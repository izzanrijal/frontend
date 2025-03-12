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
      const response = await axios.get('https://gateway.berkompeten.id/api/student/analys/result', {
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
              Terima kasih telah menyelesaikan analisis soal pada {{ data.title }}. Berdasarkan hasil pengerjaan Anda, kami telah merangkum area-area yang memerlukan perhatian yang dibuat khusus untuk Anda. Dengan mempelajari topik yang disarankan secara urut, Anda akan dapat lebih mudah meningkatkan pemahaman dan hasil tes pada kesempatan berikutnya.
            </VCardSubtitle>
          </VCardItem>

          <!-- Saran Prioritas Pembelajaran Berdasarkan Diagnosis Section -->
          <VCardItem class="outlined-card-item">
            <v-card-title>
              <span style="color: #005BC5;">Saran Prioritas Pembelajaran Berdasarkan Diagnosis</span>
            </v-card-title>
            <VCardSubtitle class="wrap-text">
              Untuk memaksimalkan waktu belajar, fokuslah terlebih dahulu pada topik diagnosis spesifik berikut ini. Memperkuat pemahaman pada area ini akan memberikan dampak signifikan terhadap peningkatan skor Anda:
            </VCardSubtitle>
            <VCard>
              <VCardItem
                v-for="(diagnosis, index) in (showMoreDiagnosis ? diagnosisAdvice : diagnosisAdvice.slice(0, 5))"
                :key="index"
                class="diagnosis-item"
              >
                <p style=" padding: 0; margin: 0; color: #005BC5;">
                  <b>{{ index + 1 }}. {{ diagnosis.subtopic }}</b><br />
                  <span style="font-style: italic;">(Kelompok Topik: {{ diagnosis.group_topic }})</span>
                </p>
              </VCardItem>
              <div style="margin-block-start: 10px; text-align: center;">
                <a
                  href="#"
                  @click.prevent="showMoreDiagnosis = !showMoreDiagnosis"
                  style="color: #005BC5; text-decoration: none;"
                >
                  {{ showMoreDiagnosis ? 'Lebih Sedikit' : 'Lihat Semua' }}
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
              Untuk mendukung efisiensi pembelajaran Anda, kami telah mengelompokkan topik-topik yang relevan ke dalam grup pembelajaran. Dengan fokus pada grup ini, Anda dapat mempelajari beberapa topik sekaligus dan mempercepat peningkatan pemahaman Anda.
            </VCardSubtitle>
            <VCard>
              <VCardItem
                v-for="(topic, index) in (showMoreTopic ? topicAdvice : topicAdvice.slice(0, 5))"
                :key="index"
                class="diagnosis-item"
              >
                <p style=" padding: 0;margin: 0; color: #005BC5;">
                  <b>{{ index + 1 }}. {{ topic.group_topic }}</b>
                </p>
                <ul style="margin: 0; color: #005BC5; list-style-type: circle; padding-inline-start: 20px;">
                  <div v-for="(subtopic, subIndex) in topic.items"
                  :key="subIndex" style="margin-block-end: 5px;">
                    <li
                      v-for="(sub, childIndex) in subtopic.subtopic"
                      :key="childIndex"
                      style="margin-block-end: 5px;"
                    >
                      {{ sub }}
                    </li>
                  </div>
                  
                </ul>
              </VCardItem>
              <div style="margin-block-start: 10px; text-align: center;">
                <a
                  href="#"
                  @click.prevent="showMoreTopic = !showMoreTopic"
                  style="color: #005BC5; text-decoration: none;"
                >
                  {{ showMoreTopic ? 'Lebih Sedikit' : 'Lihat Semua' }}
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
  word-break: break-word;
  word-wrap: break-word;
}

.diagnosis-item {
  margin-block-end: 1px; /* Reduced spacing between items */
}

.outradius-card-item {
  border-radius: 15px;
  margin: 10px;
}

.item-margin {
  padding: 10px;
  margin: 5px; /* Optional: Adjust padding/margin for compactness */
}

.item {
  /* Optional border or item styling */
}

.text-success {
  color: green;
}

.text-error {
  color: red;
}
</style>
