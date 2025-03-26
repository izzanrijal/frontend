<script setup>
import AuthProvider from '@/views/pages/authentication/AuthProvider.vue'
import logo from '@images/berkompeten_logo.svg?raw'
import authV1MaskDark from '@images/pages/auth-v1-mask-dark.png'
import authV1MaskLight from '@images/pages/auth-v1-mask-light.png'
import authV1Tree2 from '@images/pages/auth-v1-tree-2.png'
import authV1Tree from '@images/pages/auth-v1-tree.png'
import axios from 'axios'
import { computed, onMounted, reactive, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useTheme } from 'vuetify'

// Get Cloudflare Turnstile site key from environment variables
const TURNSTILE_SITE_KEY = import.meta.env.VITE_CLOUDFLARE_TURNSTILE_SITE_KEY || '1x00000000000000000000AA'
const turnstileWidgetId = ref(null)

const form = reactive({
  username: '',
  email: '',
  password: '',
  confirm_password: '',
  privacyPolicies: false,
})

const vuetifyTheme = useTheme()
const router = useRouter()
const route = useRoute();

const authThemeMask = computed(() => {
  return vuetifyTheme.global.name.value === 'light' ? authV1MaskLight : authV1MaskDark
})

const isPasswordVisible = ref(false)
const isConfirmPasswordVisible = ref(false)

const registerError = ref(null)

// Add Turnstile initialization function
const initTurnstile = () => {
  if (window.turnstile) {
    // Remove previous widget if it exists
    if (turnstileWidgetId.value) {
      window.turnstile.remove(turnstileWidgetId.value);
    }
    
    // Render turnstile with invisible/managed mode
    turnstileWidgetId.value = window.turnstile.render('#turnstile-container-register', {
      sitekey: TURNSTILE_SITE_KEY,
      theme: 'light',
      callback: function(token) {
        // Store token in a hidden input for form submission
        const tokenInput = document.createElement('input');
        tokenInput.type = 'hidden';
        tokenInput.name = 'cf-turnstile-response';
        tokenInput.value = token;
        
        // Remove any existing token input
        const existingInput = document.querySelector('input[name="cf-turnstile-response"]');
        if (existingInput) existingInput.remove();
        
        // Add the new token input to the form
        document.querySelector('form')?.appendChild(tokenInput);
      },
      'expired-callback': () => {
        // Token expired, re-render the widget
        initTurnstile();
      },
      'error-callback': () => {
        // Handle error, but don't show error to user for invisible mode
        console.error('Turnstile encountered an error');
      },
      appearance: 'interaction-only' // Only show when needed based on risk assessment
    });
  } else {
    // If turnstile isn't loaded yet, try again after a short delay
    setTimeout(initTurnstile, 500);
  }
};

const saveFormData = async () => {
  registerError.value = "";
  
  if (form.email == "") {
    registerError.value = "email is required";
      return
    }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(form.email)) {
    registerError.value = "Invalid email format";
    return;
  }

  if (form.password == "") {0
    registerError.value = "password is required";
    return
  }

  if (form.password.length < 8) {
    registerError.value = "password length must be 8 character or more";
    return
  }

  if (form.confirm_password == "") {
    registerError.value = "confirm password is required";
    return
  }

  if (form.confirm_password.length < 8) {
    registerError.value = "confirm password length must be 8 character or more";
    return
  }

  // Save email and password to local storage
  if (form.password !== form.confirm_password) {
    // Handle the case where passwords do not match (you can show an error message or take appropriate action)
    console.error('Password and confirm password do not match')
    registerError.value = "Password and confirm password do not match"
    return
  }

  // Get Cloudflare Turnstile token if available (it might not be if user is not suspicious)
  const turnstileResponse = document.querySelector('[name="cf-turnstile-response"]')?.value;
  const requestData = {
    email: form.email,
    password: form.password,
  };
  
  // Only include the token if it exists (for suspicious traffic)
  if (turnstileResponse) {
    requestData['cf-turnstile-response'] = turnstileResponse;
  }

  try {
    const response = await axios.post('https://gateway.berkompeten.id/api/student/register/step/1', requestData)
    
    console.log("RESPONSE STEP 1: ", response)
    
    localStorage.setItem('email', form.email)
    localStorage.setItem('password', form.password)
    localStorage.setItem('confirm_password', form.confirm_password)
    router.push("/register-step-2")
  } catch (error) {
    console.error('Login failed:', error)
    if (error.response && error.response.data) {
      if (error.response.data.errors.email) {
        registerError.value = error.response.data.errors.email[0]
        return
      }
      
      // Special handling for captcha-related errors but don't explicitly mention captcha
      if (error.response.status === 429 || 
          (error.response.data.errors && typeof error.response.data.errors === 'string' && 
           error.response.data.errors.toLowerCase().includes('captcha'))) {
        // Refresh Turnstile widget for another attempt
        initTurnstile();
        registerError.value = "Please try again";
        return;
      }
      
      registerError.value = error.response.data.errors;
    }
  }
}

onMounted(() => {
  // Retrieve the email from local storage
  const storedEmail = localStorage.getItem('email');
  const queryEmail = route.query.email
  const queryName = route.query.name
  if (queryEmail){
    console.log("email get route: ", queryEmail)
    form.email = queryEmail
    localStorage.setItem('email', form.email)
    localStorage.setItem('name', queryName)
    router.push('/register');
  }

  console.log("email: ", storedEmail);
  if (storedEmail) {
    form.email = storedEmail;
  }
  
  // Initialize Turnstile when the component is mounted
  initTurnstile();
});

</script>

<template>
  <!-- eslint-disable vue/no-v-html -->

  <div class="auth-wrapper d-flex align-center justify-center pa-4">
    <VCard
      class="auth-card pa-4 pt-7"
      max-width="448"
    >
      <VCardItem class="justify-center">
        <template #prepend>
          <div class="d-flex">
            <div v-html="logo" />
          </div>
        </template>
      </VCardItem>

      <VCardText>
        <VForm @submit.prevent="() => {}">
          <VRow>
            <!-- Email -->
            <VCol cols="12">
              <VTextField
                v-model="form.email"
                label="Email"
                placeholder="example@email.com"
                type="email"
              />
            </VCol>
            <!-- Password -->
            <VCol cols="12">
              <VTextField
                v-model="form.password"
                label="Password"
                placeholder="············"
                :type="isPasswordVisible ? 'text' : 'password'"
                :append-inner-icon="isPasswordVisible ? 'ri-eye-off-line' : 'ri-eye-line'"
                @click:append-inner="isPasswordVisible = !isPasswordVisible"
              />
            </VCol>

            <!-- password -->
            <VCol cols="12">
              <VTextField
                v-model="form.confirm_password"
                label="Confirm Password"
                placeholder="············"
                :type="isConfirmPasswordVisible ? 'text' : 'password'"
                :append-inner-icon="isConfirmPasswordVisible ? 'ri-eye-off-line' : 'ri-eye-line'"
                @click:append-inner="isConfirmPasswordVisible = !isConfirmPasswordVisible"
              />
              <div class="d-flex align-center mt-1 mb-4">
              </div>

              <!-- Hidden container for Turnstile -->
              <div id="turnstile-container-register" class="mb-2"></div>
              
              <VBtn
                block
                type="submit"
                color="#0080ff"
                @click="saveFormData"
              >
                Next
              </VBtn>

              <div v-if="registerError" class="mt-2 text-danger" style="color: #ff5252;">
                {{ registerError }}
              </div>
            </VCol>

            <!-- login instead -->
            <VCol
              cols="12"
              class="text-center text-base"
            >
              <span>Already have an account?</span>
              <RouterLink
                class="text-primary ms-2"
                to="login"
              >
                Sign in instead
              </RouterLink>
            </VCol>

            <VCol
              cols="12"
              class="d-flex align-center"
            >
              <VDivider />
              <span class="mx-4">or</span>
              <VDivider />
            </VCol>

            <!-- auth providers -->
            <VCol
              cols="12"
              class="text-center"
            >
              <AuthProvider />
            </VCol>
          </VRow>
        </VForm>
      </VCardText>
    </VCard>

    <VImg
      class="auth-footer-start-tree d-none d-md-block"
      :src="authV1Tree"
      :width="250"
    />

    <VImg
      :src="authV1Tree2"
      class="auth-footer-end-tree d-none d-md-block"
      :width="350"
    />

    <!-- bg img -->
    <VImg
      class="auth-footer-mask d-none d-md-block"
      :src="authThemeMask"
    />
  </div>
</template>

<style lang="scss" scoped>
@use "@core/scss/pages/page-auth.scss";
</style>
