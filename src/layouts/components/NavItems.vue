<script setup>
import VerticalNavLink from '@layouts/components/VerticalNavLink.vue';
import { apiService } from '@/plugins/axios';
import { onMounted, ref, computed } from 'vue';
import { useRouter } from 'vue-router';

const userProfile = ref(null);
const router = useRouter();
const menuItems = ref([]); // Store menu items from the API
const isLoading = ref(false);
const questions = ref([]);

const showContohAnalisaAdvis = computed(() => {
  // Cek: jika hanya ada paket trial (atau semua paket is_trial === true), maka user trial
  if (!questions.value.length) return false;
  return questions.value.every(q => q.is_trial === true);
});

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
    // Fetch paket soal
    const paketResponse = await apiService.get('/student/question-packet', {}, { useCache: true });
    if (paketResponse.data && Array.isArray(paketResponse.data.data)) {
      questions.value = paketResponse.data.data;
    }
  } catch (error) {
    console.error('Error fetching navigation data:', error);
  } finally {
    isLoading.value = false;
  }
});

// Helper to check if user is trial (proxy: hanya menu trial yang aktif)
const isTrialUser = computed(() => {
  // menuItems.value harus sudah terisi (dari API)
  if (!menuItems.value || !Array.isArray(menuItems.value)) return false;
  // Cek: jika semua menu yang bisa diakses adalah paket trial saja (misal: judul atau id menu mengandung 'Trial')
  // Implementasi: asumsikan menu trial memiliki property isTrial === true atau id === 1,2,3
  // Ganti logic sesuai struktur menuItems
  const nonTrialMenus = menuItems.value.filter(menu => !menu.isTrial && ![1,2,3].includes(menu.id));
  return nonTrialMenus.length === 0 && menuItems.value.length > 0;
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
      :item="{
        title: 'Contoh Hasil Analisa & Advis',
        to: '/contoh-analisa-advis/1',
        icon: 'ri-bar-chart-2-line',
      }"
      v-if="userProfile && userProfile.profile && userProfile.profile.membership && userProfile.profile.membership.name === 'Trial'"
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
