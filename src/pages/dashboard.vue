<script setup>
import AnalyticsDepositWithdraw from '@/views/dashboard/AnalyticsDepositWithdraw.vue'
import AnalyticsSalesByCountries from '@/views/dashboard/AnalyticsSalesByCountries.vue'
import AnalyticsTotalEarning from '@/views/dashboard/AnalyticsTotalEarning.vue'
import AnalyticsTransactions from '@/views/dashboard/AnalyticsTransactions.vue'
import AnalyticsWeeklyOverview from '@/views/dashboard/AnalyticsWeeklyOverview.vue'
import Membership from '@/views/dashboard/Membership.vue'

import axios from 'axios'
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
 // Replace with the actual key you use for the toke
const userProfile = ref(null);
const router = useRouter();
const route = useRoute();
var token = localStorage.getItem('token');
const baseUrl = process.env.VUE_APP_BASE_URL;


onMounted(async () => {
  const routeToken = route.query.token;
  console.log("token get das: ", routeToken)
  if (routeToken){
    token = routeToken
    localStorage.setItem('token', token);
    console.log("token from route: ", token)
  }
  
  if (token) {
    try {
      const response = await axios.get('https://gateway.berkompeten.com/api/student/profile', {
        headers: {  
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(response)
      console.log("BASE URL: ", process.env.BASE_URL)

      userProfile.value = response.data;
    } catch (error) {
      if (error.response && error.response.status === 401) {
        // Redirect to login page if the response status is 401
        localStorage.removeItem('token');
        localStorage.removeItem('profile');
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
      sm="3"
    >
      <Membership :userProfile="userProfile" />
    </VCol>

    <VCol
      cols="12"
      sm="3"
    >
      <AnalyticsTransactions />
    </VCol>

    <VCol
      cols="12"
      sm="3"
    >
      <AnalyticsWeeklyOverview />
    </VCol>

    <VCol
      cols="12"
      sm="3"
    >
      <AnalyticsTotalEarning />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <AnalyticsSalesByCountries />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <AnalyticsDepositWithdraw />
    </VCol>
  </VRow>
</template>
