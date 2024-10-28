<script setup>
import VerticalNavLink from '@layouts/components/VerticalNavLink.vue';
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const token = localStorage.getItem('token'); // Replace with the actual key you use for the token
const userProfile = ref(null);
const router = useRouter();
const menuItems = ref([]); // Store menu items from the API

// Fetch user profile and menu data on component mount
onMounted(async () => {
  if (token) {
    try {
      // Fetch user profile data
      const profileResponse = await axios.get('https://gateway.berkompeten.com/api/student/profile', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      userProfile.value = profileResponse.data;

      // Fetch menu data
      const menuResponse = await axios.get('https://gateway.berkompeten.com/api/student/analys/menu', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          id: 2 // Send the `id` parameter as required
        }
      });

      if (!menuResponse.data.error) {
        menuItems.value = menuResponse.data.data.menus; // Store menus in `menuItems`
      }

    } catch (error) {
      if (error.response && error.response.status === 401) {
        // Redirect to login page if the response status is 401
        router.push('/login');
      }
    }
  } else {
    // Redirect to login page if token is not present
    router.push('/login');
  }
});
</script>

<template>
  <!-- Dashboard and other static links -->
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

  <!-- Dynamic Menu Links from API -->
  <VerticalNavLink
    v-for="(menu, index) in menuItems" :key="index"
    :item="{
      title: menu.title,
      to: menu.link,
      icon: 'ri-bar-chart-2-line',
    }"
  />
</template>
