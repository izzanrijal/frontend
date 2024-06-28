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


const router = useRouter()

const form = reactive({
  email: '',
  password: '',
  remember: false,
})

const vuetifyTheme = useTheme()

const authThemeMask = computed(() => {
  return vuetifyTheme.global.name.value === 'light' ? authV1MaskLight : authV1MaskDark
})

const isPasswordVisible = ref(false)
const loginError = ref(null)
var token = localStorage.getItem('token');

onMounted(async () => {
  console.log("token login: ", token)

  if (token) {
    router.push('https://gateway.berkompeten.comdashboard');
  }
});

const login = async (tokenRecaptcha) => {
  try {
    // Execute reCAPTCHA
    grecaptcha.ready(async function() {
      try {
        // const tokenRecaptcha = await grecaptcha.execute('6LfXRJ8pAAAAAOt1gKzRNIj1GOYGtp-DB_tz73OR', { action: 'submit' });
        console.log("rec resp: ",tokenRecaptcha)
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

        const response = await axios.post('https://gateway.berkompeten.comapi/student/login', {
          email: form.email,
          password: form.password,
          'g-recaptcha-response': tokenRecaptcha, // Include reCAPTCHA token in the request
        });

        console.log(response);

        // Assuming your backend returns a token upon successful login
        const token = response.data.token;

        console.log(token);

        // Save the token in local storage or Vuex store for future requests
        localStorage.setItem('token', token);

        // Redirect to the desired route upon successful login
        router.push('https://gateway.berkompeten.comdashboard');
      } catch (error) {
        // Handle login error (display error message, redirect, etc.)
        console.error('Login failed:', error);
        if (error.response && error.response.data) {
          loginError.value = error.response.data.message;

          if (error.response.data.errors){
            loginError.value = error.response.data.errors;
          }

          // Check if the user does not exist and store email in local storage
          if (error.response.data.is_exist === false) {
            localStorage.setItem('email', form.email);
            router.push('https://gateway.berkompeten.comregister');
          }
          return
        } else {
          loginError.value = 'An unexpected error occurred during login.';
          return
        }
      }
    });
  } catch (error) {
    // Handle login error (display error message, redirect, etc.)
    console.error('Login failed:', error)
    if (error.response && error.response.data) {
      loginError.value = error.response.data.errors;

      // Check if the user does not exist and store email in local storage
      if (error.response.data.is_exist === false) {
        localStorage.setItem('email', form.email);
        router.push('https://gateway.berkompeten.comregister');
      }
      return
    } else {
      loginError.value = 'An unexpected error occurred during login.';
      return
    }
  }
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
                type="email"
              />
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
                  href="javascript:void(0)"
                >
                  Forgot Password?
                </a>
              </div>

              <!-- login button -->
              <div class="g-recaptcha" data-sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" data-callback="login">
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
