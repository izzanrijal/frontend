<script setup>
import AuthProvider from '@/views/pages/authentication/AuthProvider.vue'
import logo from '@images/berkompeten_logo.svg?raw'
import authV1MaskDark from '@images/pages/auth-v1-mask-dark.png'
import authV1MaskLight from '@images/pages/auth-v1-mask-light.png'
import authV1Tree2 from '@images/pages/auth-v1-tree-2.png'
import authV1Tree from '@images/pages/auth-v1-tree.png'
import { useTheme } from 'vuetify'

import axios from 'axios'
import { useRouter } from 'vue-router'

// Get Cloudflare Turnstile site key from environment variables
const TURNSTILE_SITE_KEY = import.meta.env.VITE_CLOUDFLARE_TURNSTILE_SITE_KEY || '1x00000000000000000000AA'
const turnstileWidgetId = ref(null)

const router = useRouter()

const form = reactive({
  email: '',
  password: '',
  remember: false,
})

const savedEmails = ref([]) // Store saved emails
const vuetifyTheme = useTheme()
const showSuggestions = ref(false);
const filteredEmails = ref([]);

const authThemeMask = computed(() => {
  return vuetifyTheme.global.name.value === 'light' ? authV1MaskLight : authV1MaskDark
})

const isPasswordVisible = ref(false)
const loginError = ref(null)
const isLoading = ref(false)
var token = localStorage.getItem('token');

// Filter emails based on user input
const filterEmails = () => {
  const query = form.email.toLowerCase();
  filteredEmails.value = savedEmails.value.filter((email) =>
    email.toLowerCase().includes(query)
  );
};

// Select email from suggestions
const selectEmail = (email) => {
  form.email = email;
  showSuggestions.value = false;
};

// Hide suggestions on blur (with a slight delay to allow selection)
const hideSuggestions = () => {
  setTimeout(() => (showSuggestions.value = false), 200);
};

// Add Turnstile initialization function
const initTurnstile = () => {
  if (window.turnstile) {
    // Remove previous widget if it exists
    if (turnstileWidgetId.value) {
      window.turnstile.remove(turnstileWidgetId.value);
    }
    
    // Render turnstile with invisible/managed mode
    turnstileWidgetId.value = window.turnstile.render('#turnstile-container', {
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

onMounted(async () => {
  console.log("token login: ", token)

  if (token) {
    router.push('/dashboard');
  }

  // Load emails from localStorage
  const emails = JSON.parse(localStorage.getItem('savedEmails')) || []
  savedEmails.value = emails
  
  // Initialize Turnstile when the component is mounted
  initTurnstile();
});

// Save new email to storage when login is successful
const saveEmail = (email) => {
  if (!savedEmails.value.includes(email)) {
    savedEmails.value.push(email);
    localStorage.setItem('savedEmails', JSON.stringify(savedEmails.value));
  }
};

const handleCustomEmail = (value) => {
  if (!savedEmails.value.includes(value)) {
    form.email = value; // Keep the custom value in the input
  }
};

const login = async () => {
  try {
    if (form.email === "") {
      loginError.value = "email is required"
      return
    }

    if (form.password === "") {
      loginError.value = "password is required"
      return
    }

    if (form.password.length < 8) {
      loginError.value = "password length must be 8 character or more";
      return
    }

    isLoading.value = true

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

    // Login API
    try {
      const response = await axios.post('https://gateway.berkompeten.id/api/student/login', requestData);
      // Setelah login sukses, cek status membership di profile
      try {
        const profile = await axios.get('https://gateway.berkompeten.id/api/student/profile', {
          headers: {
            Authorization: `Bearer ${response.data.token}`,
          },
        });
        // Jika profile sukses, lanjutkan login
        localStorage.setItem('token', response.data.token);
        saveEmail(form.email);
        isLoading.value = false
        router.push('/dashboard');
      } catch (profileError) {
        isLoading.value = false
        // Jika membership tidak aktif (401), tampilkan pesan error dan JANGAN simpan token
        if (
          profileError.response &&
          profileError.response.data && (
            profileError.response.data.message?.toLowerCase().includes('keanggotaan tidak aktif') ||
            profileError.response.data.message?.toLowerCase().includes('membership tidak aktif') ||
            profileError.response.data.message?.toLowerCase().includes('unauthorized. your membership is expired')
          )
        ) {
          loginError.value = 'Login Gagal: Keanggotaan Anda tidak aktif. Silakan perbarui keanggotaan atau hubungi support@berkompeten.id.';
          return;
        }
        // Error lain pada profile
        loginError.value = profileError.response?.data?.message || 'An unexpected error occurred during login.';
        return;
      }
    } catch (error) {
      isLoading.value = false
      // Membership tidak aktif atau salah password
      if (
        error.response &&
        error.response.data && (
          error.response.data.message?.toLowerCase().includes('keanggotaan tidak aktif') ||
          error.response.data.message?.toLowerCase().includes('membership tidak aktif') ||
          error.response.data.message?.toLowerCase().includes('unauthorized. your membership is expired')
        )
      ) {
        loginError.value = 'Login Gagal: Keanggotaan Anda tidak aktif. Silakan perbarui keanggotaan atau hubungi support@berkompeten.id.';
        return;
      }
      // Error lain (termasuk salah password)
      loginError.value = error.response?.data?.message || 'An unexpected error occurred during login.';
      return;
    }
  } catch (error) {
    isLoading.value = false
    loginError.value = 'An unexpected error occurred during login.';
    return;
  }
}

const navigateToForgotPassword = () => {
  router.push('/forgot-password')
}
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

      <VCardText class="pt-2">
        <h5 class="text-h5 font-weight-semibold mb-1">
          Hai Selamat Datang!
        </h5>
        <p class="mb-0">
          Please sign-in to your account and start the adventure
        </p>
      </VCardText>

      <VCardText>
        <VForm @submit.prevent="login">
          <VRow>
            <!-- email -->
            <VCol cols="12">
              <VTextField
                v-model="form.email"
                label="Email"
                placeholder="Enter your email"
                clearable
                autocomplete="off"
                @focus="showSuggestions = true"
                @blur="hideSuggestions"
                @input="filterEmails"
              />

              <!-- Suggestions Dropdown -->
              <VList
                v-if="showSuggestions && filteredEmails.length"
                class="suggestions-list"
              >
                <VListItem
                  v-for="email in filteredEmails"
                  :key="email"
                  @mousedown.prevent="selectEmail(email)"
                >
                  <VListItemTitle>{{ email }}</VListItemTitle>
                </VListItem>
              </VList>
            </VCol>

            <!-- password -->
            <VCol cols="12">
              <VTextField
                v-model="form.password"
                label="Password"
                placeholder="············"
                :type="isPasswordVisible ? 'text' : 'password'"
                :append-inner-icon="isPasswordVisible ? 'ri-eye-off-line' : 'ri-eye-line'"
                @click:append-inner="isPasswordVisible = !isPasswordVisible"
              />

              <!-- remember me checkbox -->
              <div class="d-flex align-center justify-space-between flex-wrap mt-1 mb-4">
                <VCheckbox
                  v-model="form.remember"
                  label="Remember me"
                />

                <a
                  class="ms-2 mb-1"
                  @click="navigateToForgotPassword"
                >
                  Forgot Password?
                </a>
              </div>

              <!-- login button -->
              <div>
                <!-- Hidden container for Turnstile -->
                <div id="turnstile-container" class="mb-2"></div>
                
                <VBtn
                  block
                  type="submit"
                  color="#0080ff"
                >
                  Login
                </VBtn>
              </div>

              <div v-if="loginError" class="mt-2 text-danger" style="color: #ff5252;">
                {{ loginError }}
              </div>
            </VCol>

            <!-- create account -->
            <VCol
              cols="12"
              class="text-center text-base"
            >
              <span>New on our platform?</span>
              <RouterLink
                class="text-primary ms-2"
                to="/register"
              >
                Create an account
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
    <VDialog v-model="isLoading" persistent width="300">
      <template #default>
        <div class="d-flex flex-column align-center justify-center pa-6">
          <VProgressCircular indeterminate color="#0080ff" size="48" />
          <span class="mt-4">Memproses login...</span>
        </div>
      </template>
    </VDialog>
  </div>
</template>

<style lang="scss" scoped>
@use "@core/scss/pages/page-auth.scss";

.suggestions-list {
  padding: 0;
  border: 1px solid #ccc;
  background: white;
  margin-block: 4px 0;
  margin-inline: 0;
  max-block-size: 150px;
  overflow-y: auto;
}

.suggestions-list .v-list-item {
  cursor: pointer;
}

.suggestions-list .v-list-item:hover {
  background-color: #f0f0f0;
}
</style>
