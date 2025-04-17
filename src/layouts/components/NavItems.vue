<script setup>
import { apiService } from '@/plugins/axios';
import VerticalNavLink from '@layouts/components/VerticalNavLink.vue';
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
    console.log('profileResponse production', profileResponse.data);
    userProfile.value = profileResponse.data;

    // Fetch menu data with caching - menu structure doesn't change frequently
    const menuResponse = await apiService.get('/student/analys/menu', { id: 2 }, { useCache: true });
    console.log('menuResponse production', menuResponse.data);

    if (!menuResponse.data.error && Array.isArray(menuResponse.data.data?.menus)) {
      // Filter out menu items whose 'link' doesn't match any valid route
      const validRoutes = [
        '/dashboard',
        '/paket-soal',
        '/detail',
        '/review',
        '/result',
        '/soal',
        '/soal-review',
        '/profile/:tab',
        '/otp',
        '/upgrade/membership',
        '/membership/detail',
        '/lab-values',
        '/example-analisa-advis',
        '/analisa-advis/:menu',
      ];
      // Accept both static and dynamic (with params) routes
      menuItems.value = menuResponse.data.data.menus.filter(menu => {
        return validRoutes.some(route => {
          if (route.includes(':')) {
            // Dynamic route, check prefix
            const base = route.split('/:')[0];
            return menu.link.startsWith(base);
          }
          return menu.link === route;
        });
      });
    }
  } catch (error) {
    console.error('Error fetching navigation data:', error);
  } finally {
    isLoading.value = false;
  }
});
</script>

<template>
  <div v-if="isLoading">Loading menu...</div>
  <div v-else-if="menuItems.length === 0">
    <span class="text-error">Menu tidak tersedia.</span>
  </div>
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
      v-if="userProfile.value && userProfile.value.profile && userProfile.value.profile.membership && userProfile.value.profile.membership.name === 'Trial'"
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
