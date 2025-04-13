<script setup>
import VerticalNavLink from '@layouts/components/VerticalNavLink.vue';
import { apiService } from '@/plugins/axios';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const userProfile = ref(null);
const router = useRouter();
const menuItems = ref([]); // Store menu items from the API
const isLoading = ref(false);

// Fetch user profile and menu data on component mount
onMounted(async () => {
  isLoading.value = true;
  try {
    // Fetch user profile data with caching - profile doesn't change frequently
    const profileResponse = await apiService.get('/student/profile', {}, { useCache: true });
    userProfile.value = profileResponse.data;

    // Fetch menu data with caching - menu structure doesn't change frequently
    const menuResponse = await apiService.get('/student/analys/menu', { id: 2 }, { useCache: true });

    if (!menuResponse.data.error) {
      menuItems.value = menuResponse.data.data.menus; // Store menus in `menuItems`
    }
  } catch (error) {
    console.error('Error fetching navigation data:', error);
  } finally {
    isLoading.value = false;
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

  <VerticalNavLink
      v-if="userProfile.profile.membership.name === 'Trial'"
      :item="{
        title: 'Analisis Paket Soal 1 sd. Paket Soal 3',
        to: '/example-analisa-advis',
        icon: 'ri-bar-chart-2-line',
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
