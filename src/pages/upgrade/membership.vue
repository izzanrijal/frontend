<script setup>
import MembershipPricing from '@/views/membership/MembershipPricing.vue';
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const token = localStorage.getItem('token');
const userProfile = ref(null);
const router = useRouter();

onMounted(async () => {
  if (token) {
    try {
      const response = await axios.get('https://gateway.berkompeten.id/api/student/profile', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      userProfile.value = response.data;
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
  <VRow>
    <VCol cols="12">
      <MembershipPricing />
    </VCol>
  </VRow>
</template> 
