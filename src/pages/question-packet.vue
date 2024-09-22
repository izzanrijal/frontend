<script setup>
import Question from '@/views/question-packet/Question.vue';
import QuestionHeader from '@/views/question-packet/QuestionHeader.vue';
import QuestionOrder from '@/views/question-packet/QuestionOrder.vue';

import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const token = localStorage.getItem('token'); // Replace with the actual key you use for the token
const userProfile = ref(null);
const router = useRouter();
const route = useRoute();

const mode = computed(() => {
  return route.path === '/soal-review' ? 'review' : 'question';
});

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
  <VRow class="match-height">
    <VCol
      cols="12"
      md="12"
    >
      <QuestionHeader :mode="mode"/>
    </VCol>
  </VRow>

  <VRow class="match-height">
    <VCol
      cols="12"
      md="9"
    >
      <Question :mode="mode" />
    </VCol>

    <VCol
      cols="12"
      md="3"
    >
      <QuestionOrder :mode="mode"/>
    </VCol>
  </VRow>
</template>
