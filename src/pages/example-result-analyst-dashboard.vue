<script setup>

import ExampleAnalyzeAdvisDashboard from '@/views/analyze-advis/ExampleAnalyzeAdvisDashboard.vue';
import ExampleChartDashboard from '@/views/analyze-advis/ExampleChartDashboard.vue';
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const token = localStorage.getItem('token'); // Replace with the actual key you use for the token
const userProfile = ref(null);
const router = useRouter();
const route = useRoute()
const menuIndex = ref(route.params.menu)

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
  <VRow v-if="token" class="match-height">
    <VCol
      cols="12"
      sm="6"
    >
      <ExampleAnalyzeAdvisDashboard :menuIndex="menuIndex" />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <ExampleChartDashboard :menuIndex="menuIndex"/>
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
