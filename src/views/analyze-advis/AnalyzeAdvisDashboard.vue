<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

// Sample data for lists and results
const diagnosisAdvice = ref({});
const topicAdvice = ref({});
const data = ref({});
const router = useRouter();
var token = localStorage.getItem('token');

onMounted(async () => {
  if (token) {
    try {
      const response = await axios.get('https://gateway.berkompeten.com/api/student/analys/result', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      data.value = response.data.data;
      diagnosisAdvice.value = response.data.data.advise_learn_by_diagnose;
      topicAdvice.value = response.data.data.advise_learn_by_topic;
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

// Slicing logic - limit the number of items shown

</script>

<template>
  <VCard class="outradius-card-item">
    <VRow no-gutters>
      <VCol
        cols="12"
        md="12"
      >
        <VCard>
          <VCardTitle>
            <span style="color: #005BC5;">{{ data.title }}</span>
          </VCardTitle>
          <VCardItem class="outlined-card-item">
            <VCardSubtitle class="wrap-text">
              #lorem78429 Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
            </VCardSubtitle>
          </VCardItem>
          <VCardItem class="outlined-card-item">
            <v-card-title>
              <span style="color: #005BC5;">Saran Prioritas Pembelajaran Berdasarkan Diagnosis</span>
            </v-card-title>
            <VCardSubtitle class="wrap-text">
              #lorem78429 Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
            </VCardSubtitle>
            <VCard>
              <VCardItem 
              :class="[
                'item-margin item', 
                index === 0 ? 'item-first' : (index !== diagnosisAdvice.length - 1 ? 'item' : '')
              ]" 
                v-for="(value, key, index) in diagnosisAdvice" 
                :key="index"
              >
                <v-list-item-content>
                  <v-list-item-title>{{ key }}</v-list-item-title>
                  <v-list-item-subtitle v-for="(groupItem, groupIndex) in value" :key="groupIndex">
                   dari Group Topik {{ groupItem.group }}
                  </v-list-item-subtitle>
                </v-list-item-content>
              </VCardItem>
            </VCard>
          </VCardItem>
          <VCardItem class="outlined-card-item">
            <v-card-title>
              <span style="color: #005BC5;">Saran Prioritas Pembelajaran Berdasarkan Grup Topic</span>
            </v-card-title>
            <VCardSubtitle class="wrap-text">
              #lorem78429 Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
            </VCardSubtitle>
            <VCard>
              <VCardItem 
              :class="[
                'item-margin item', 
                index === 0 ? 'item-first' : (index !== topicAdvice.length - 1 ? 'item' : '')
              ]" 
                v-for="(value, key, index) in topicAdvice" 
                :key="index"
              >
                <v-list-item-content>
                  <v-list-item-title>{{ key }}</v-list-item-title>
                  <v-list-item-subtitle v-for="(groupItem, groupIndex) in value" :key="groupIndex">
                   dari Sistem Topik {{ groupItem.group }}
                  </v-list-item-subtitle>
                </v-list-item-content>
              </VCardItem>
            </VCard>
          </VCardItem>
        </VCard>
      </VCol>
    </VRow>
  </VCard>
</template>

<style scoped>
.wrap-text {
  margin-block: 10px; /* Adds top margin */
  white-space: normal;
  word-break: break-all; /* Ensures long words are broken to fit within the container */
  word-wrap: break-word; /* Allows the text to wrap to the next line */
}

.item-margin {
  padding: 10px;
  margin: 10px;
}

.outlined-card-item {
  border: 1px solid #ccc; /* Customize the color and size as needed */
  border-radius: 15px; /* Optional: Add border radius for rounded corners */
  margin: 10px;
}

.outradius-card-item {
  border-radius: 15px; /* Optional: Add border radius for rounded corners */
  margin: 10px;
}

.item {
  border-block-end: 1px solid #ccc; /* Customize the color and size as needed */
}

.item-first {
  border-block-start: 1px solid #ccc; /* Customize the color and size as needed */
}

.text-success {
  color: green;
}

.text-error {
  color: red;
}
</style>
