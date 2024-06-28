<script setup>

import AnalyzeAdvisDashboard from '@/views/analyze-advis/AnalyzeAdvisDashboard.vue';
import ChartDashboard from '@/views/analyze-advis/ChartDashboard.vue';
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
  <VRow v-if="token" class="match-height">
    <VCol
      cols="12"
      sm="6"
    >
      <AnalyzeAdvisDashboard :userProfile="userProfile" />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <ChartDashboard />
    </VCol>
  </VRow>
  <!-- <VRow class="match-height">
    <VCol
      cols="12"
      md="12"
    >
      <VCardItem class="justify-center">
        <template #prepend>
          <div class="d-flex">
            <div v-html="noDataImage" />
          </div>
        </template>
      </VCardItem>
    </VCol>
  </VRow> -->
</template>
