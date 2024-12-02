<script setup>
import axios from 'axios';
import { onMounted, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const diagnosisAdvice = ref([]);
const topicAdvice = ref([]);
const data = ref({});
const router = useRouter();
const route = useRoute();
const token = localStorage.getItem('token');

// State to control the "show more" functionality
const showMoreDiagnosis = ref(false);
const showMoreTopic = ref(false);

// Get the initial menu index from the route parameters
const menuIndex = ref(route.params.menu || 1);

// Function to fetch data from the API based on the menu index
const fetchData = async () => {
  if (token) {
    try {
      const response = await axios.get('https://gateway.berkompeten.com/api/student/analys/result', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          menu: menuIndex.value, // Pass the menu index as a query parameter
        },
      });

      // Process response data
      data.value = response.data.data;
      
      // Transforming `advise_learn_by_diagnose` to an array for easier rendering
      diagnosisAdvice.value = Object.entries(response.data.data.advise_learn_by_diagnose).map(([key, value]) => ({
        subtopic: key,
        ...value,
      }));

      // Transforming `advise_learn_by_topic` to an array for easier rendering
      topicAdvice.value = Object.entries(response.data.data.advise_learn_by_topic).map(([key, value]) => ({
        group_topic: key,
        items: value,
      }));
    } catch (error) {
      if (error.response && error.response.status === 401) {
        // Redirect to login page if the response status is 401
        localStorage.removeItem('token');
        localStorage.removeItem('profile');
        router.push('/login');
      } else {
        console.error('Error fetching data:', error);
      }
    }
  } else {
    // Redirect to login page if token is not present
    router.push('/login');
  }
};

// Fetch data initially on component mount
onMounted(fetchData);

// Watch for changes in the `menu` route parameter and fetch data accordingly
watch(
  () => route.params.menu,
  (newMenuIndex) => {
    menuIndex.value = newMenuIndex;
    fetchData(); // Fetch data when the menu index changes
  }
);
</script>

<template>
  <VCard class="outradius-card-item">
    <VRow no-gutters>
      <VCol cols="12" md="12">
        <VCard>
          <VCardTitle>
            <span style="color: #005BC5;">{{ data.title }}</span>
          </VCardTitle>

          <VCardItem class="outlined-card-item">
            <VCardSubtitle class="wrap-text">
              Terima kasih telah mengerjakan {{ data.title }}. Berikut adalah hasil analisis dari pengerjaan soal untuk mendeteksi dimana letak kelemahan pada topik / diagnosis tertentu yang perlu ditingkatkan
            </VCardSubtitle>
          </VCardItem>

          <!-- Saran Prioritas Pembelajaran Berdasarkan Diagnosis Section -->
          <VCardItem class="outlined-card-item">
            <v-card-title>
              <span style="color: #005BC5;">Saran Prioritas Pembelajaran Berdasarkan Diagnosis</span>
            </v-card-title>
            <VCardSubtitle class="wrap-text">
              Berikut adalah diagnosis yang membutuhkan perhatian untuk perbaikan.
            </VCardSubtitle>
            <VCard>
              <VCardItem
                v-for="(diagnosis, index) in (showMoreDiagnosis ? diagnosisAdvice : diagnosisAdvice.slice(0, 5))"
                :key="index"
                :class="['item-margin item', index === 0 ? 'item-first' : (index !== diagnosisAdvice.length - 1 ? 'item' : '')]"
              >
                <v-list-item-content>
                  <v-list-item-title>
                    <span style="color: #005BC5;"><b>{{ diagnosis.subtopic }}</b></span>
                  </v-list-item-title>
                  <v-list-item-subtitle>
                    <span style="color: #005BC5;">Dari Group Topik: {{ diagnosis.group_topic }}</span>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </VCardItem>
              <div style="margin-block-start: 10px; text-align: center;">
                <a
                  href="#"
                  @click.prevent="showMoreDiagnosis = !showMoreDiagnosis"
                  style="color: #005BC5; text-decoration: none;"
                >
                  {{ showMoreDiagnosis ? 'Lebih Sedikit' : 'Selengkapnya' }}
                </a>
              </div>
            </VCard>
          </VCardItem>

          <!-- Saran Prioritas Pembelajaran Berdasarkan Grup Topic Section -->
          <VCardItem class="outlined-card-item">
            <v-card-title>
              <span style="color: #005BC5;">Saran Prioritas Pembelajaran Berdasarkan Grup Topic</span>
            </v-card-title>
            <VCardSubtitle class="wrap-text">
              Berikut adalah grup topik yang memerlukan perhatian.
            </VCardSubtitle>
            <VCard>
              <VCardItem
                v-for="(topic, index) in (showMoreTopic ? topicAdvice : topicAdvice.slice(0, 5))"
                :key="index"
                :class="['item-margin item', index === 0 ? 'item-first' : (index !== topicAdvice.length - 1 ? 'item' : '')]"
              >
                <v-list-item-content>
                  <v-list-item-title>
                    <span style="color: #005BC5;"><b>{{ topic.group_topic }}</b></span>
                  </v-list-item-title>
                  <v-list-item-subtitle v-for="(item, groupIndex) in topic.items" :key="groupIndex">
                    <span style="color: #005BC5;">Subtopic: {{ item.subtopic }}</span>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </VCardItem>
              <div style="margin-block-start: 10px; text-align: center;">
                <a
                  href="#"
                  @click.prevent="showMoreTopic = !showMoreTopic"
                  style="color: #005BC5; text-decoration: none;"
                >
                  {{ showMoreTopic ? 'Lebih Sedikit' : 'Selengkapnya' }}
                </a>
              </div>
            </VCard>
          </VCardItem>
        </VCard>
      </VCol>
    </VRow>
  </VCard>
</template>

<style scoped>
.wrap-text {
  margin-block: 10px;
  white-space: normal;
  word-break: break-all;
  word-wrap: break-word;
}

.item-margin {
  padding: 10px;
  margin: 10px;
}

.outradius-card-item {
  border-radius: 15px;
  margin: 10px;
}

.item {
  /* border-block-end: 1px solid #ccc; */
}

.item-first {
  /* border-block-start: 1px solid #ccc; */
}

.text-success {
  color: green;
}

.text-error {
  color: red;
}
</style>
