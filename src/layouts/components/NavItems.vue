<script setup>
import VerticalNavLink from '@layouts/components/VerticalNavLink.vue';
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const token = localStorage.getItem('token'); // Replace with the actual key you use for the token
const userProfile = ref(null);
const router = useRouter();

onMounted(async () => {
  if (token) {
    try {
      const response = await axios.get('https://gateway.berkompeten.com/api/student/profile', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      userProfile.value = response.data;
    } catch (error) {
      if (error.response && error.response.status === 401) {
        // Redirect to login page if the response status is 401
        router.push('https://gateway.berkompeten.com/login');
      }
    }
  } else {
    // Redirect to login page if token is not present
    router.push('https://gateway.berkompeten.com/login');
  }
});
</script>

<template>
  <!-- 👉 Dashboards -->
  <VerticalNavLink
      :item="{
        title: 'Beranda',
        to: '/dashboard',
        icon: 'ri-home-smile-line',
      }"
  />

  <VerticalNavLink
      :item="{
        title: 'Paket Soal',
        to: '/paket-soal',
        icon: 'ri-file-edit-line',
      }"
  />

  <VerticalNavLink
      :item="{
        title: 'Hasil Analisa & Advis',
        to: '/analisa-advis',
        icon: 'ri-bar-chart-2-line',
      }"
  />
 
</template>
