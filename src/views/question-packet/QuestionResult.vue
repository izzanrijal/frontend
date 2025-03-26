<script setup>
import { apiService } from '@/plugins/axios';
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

// State variables
const questionPacketResult = ref({});
const analysisAdvice = ref({});
const adviseByDiagnose = ref([]);
const adviseByTopic = ref([]);
const skippedQuestions = ref([]);
const errorMessage = ref('');
const isLoading = ref(false);

const router = useRouter();
const route = useRoute();

// When the component mounts, fetch all required data
onMounted(() => {
  fetchQuestionPacketResult();
  fetchQuestionPacketAnalyzeResult();
  getSkipQuestions();
});

const fetchQuestionPacketResult = async () => {
  isLoading.value = true;
  try {
    const routeQuestionPacketID = localStorage.getItem('paket');
    const response = await apiService.get('/student/user/test/result', {
      id: routeQuestionPacketID
    }, { useCache: true });
    
    questionPacketResult.value = response.data.data;
  } catch (error) {
    console.error('Error fetching question packet result:', error);
  } finally {
    isLoading.value = false;
  }
};

const fetchQuestionPacketAnalyzeResult = async () => {
  isLoading.value = true;
  try {
    const questionPacketId = localStorage.getItem('paket');
    const response = await apiService.get('/student/analys/result-by-question-packet-id', {
      question_packet_id: questionPacketId
    }, { useCache: true });

    analysisAdvice.value = response.data.data;
    adviseByDiagnose.value = Object.entries(response.data.data.advise_learn_by_diagnose).map(
      ([subtopic, details]) => ({
        subtopic,
        ...details,
      })
    );

    adviseByTopic.value = Object.entries(response.data.data.advise_learn_by_topic).map(([group_topic, subtopics]) => ({
      group_topic,
      subtopics,
    }));
  } catch (error) {
    console.error('Error fetching analysis advice:', error);
  } finally {
    isLoading.value = false;
  }
}

const getSkipQuestions = async () => {
  isLoading.value = true;
  try {
    const routeQuestionPacketID = localStorage.getItem('paket');
    const response = await apiService.get('/student/user/skip/questions', {
      id: routeQuestionPacketID
    }, { useCache: true });
    
    skippedQuestions.value = response.data.data;
  } catch (error) {
    console.error('Error fetching skipped questions:', error);
  } finally {
    isLoading.value = false;
  }
};

const openDiscussion = async () => {
  const question_packet_id = localStorage.getItem('paket');
  const answer = localStorage.getItem('answer');
  const answerValue = localStorage.getItem('answerValue');
  const question_id = localStorage.getItem('question_id');

  if (answer === null) {
    errorMessage.value = "Tolong pilih jawaban terlebih dahulu";
    return;
  }

  if (answerValue === null) {
    errorMessage.value = "Tolong pilih seberapa yakin jawaban anda terlebih dahulu";
    return;
  }

  if (question_id === null) {
    errorMessage.value = "question id is empty. please contact your administrator";
    return;
  }

  try {
    router.push('/dashboard');
  } catch (error) {
    console.error('answer failed:', error);
    if (error.response && error.response.data) {
      errorMessage.value = error.response.data.errors;
    } else {
      errorMessage.value = 'An unexpected error occurred during login.';
    }
  }
};
</script>

<template>
  <v-container>
    <!-- Card for Score -->
    <v-row>
      <v-col cols="12">
        <VCard class="outlined-card-item mb-4">
          <VCardItem class="text-left">
            <div class="me-n3" style="padding: 20px;">
              <VRow align="center" class="d-flex flex-wrap row-item-parent">
                <VAvatar color="#0080ff" rounded size="40" class="elevation-2">
                  <VIcon size="32" icon="ri-apps-line" />
                </VAvatar>
                <div class="me-n3" style="display: flex; flex-grow: 1; padding: 20px;">
                  <VCol cols="12" md="6">
                    <VCardTitle>
                      <span style="color: #0080ff;">
                        <b>Nilai Anda {{ questionPacketResult.score }}</b>
                      </span>
                    </VCardTitle>
                    <VRow align="left" style="justify-content: flex-start;">
                      <VCol cols="6" sm="6">
                        <p style="color: black;" class="font-weight-semibold mb-1">Passing grade:</p>
                        <p style="color: black;"><b>66</b></p>
                      </VCol>
                      <VCol cols="6" sm="6">
                        <p style="color: black;" class="font-weight-semibold mb-1">Soal yang dikerjakan:</p>
                        <p style="color: #0080ff;">{{ questionPacketResult.total_answered }} Soal</p>
                      </VCol>
                    </VRow>
                  </VCol>
                </div>
              </VRow>
            </div>
            <template #append>
              <VBtn block type="submit" @click="openDiscussion()" color="#0080ff" class="responsive-button">Lihat Pembahasan Soal</VBtn>
            </template>
          </VCardItem>
        </VCard>
      </v-col>
    </v-row>

    <!-- Card for Analysis & Advice -->
    <v-row>
      <v-col cols="12">
        <VCard class="outlined-card-item mb-4">
          <VCardItem>
            <VCardTitle>
              <span style="color: #0080ff;">Analisis & Advice</span>
            </VCardTitle>
            <div class="me-n3" style="padding: 20px;">
              <VRow align="center" class="d-flex flex-wrap row-item-parent">
                <VAvatar color="#0080ff" rounded size="40" class="elevation-2">
                  <VIcon size="24" icon="ri-apps-line" />
                </VAvatar>
                <div class="me-n3" style="padding: 20px;">
                  <VCardTitle>
                    <span style="color: black;">List topik/diagnosis yang sebaiknya Anda tingkatkan pada latihan ini</span>
                  </VCardTitle>
                </div>
              </VRow>
            </div>
          </VCardItem>
          <VRow align="center" class="d-flex flex-wrap row-item">
            <div class="d-flex align-center flex-wrap mb-3">
              <VChip
                class="d-flex flex-wrap v-item"
                color="#0080ff"
                size="small"
                v-for="(diagnosis, index) in adviseByDiagnose"
                :key="index"
              >
                {{ diagnosis.subtopic }} ({{ diagnosis.group_topic }})
              </VChip>
            </div>
          </VRow>
        </VCard>
      </v-col>
    </v-row>

    <!-- Skipped Questions -->
    <v-row v-if="skippedQuestions.length !== 0">
      <v-col cols="12">
        <VCard class="outlined-card-item mb-4">
          <VCardItem style="max-block-size: 300px; overflow-y: auto;">
            <VCardItem
              v-for="(question, index) in skippedQuestions"
              :key="question.id"
              class="outlined-card-item"
            >
              <div class="me-n3" style="padding: 10px;">
                <VRow align="center">
                  <p style="color: black;" class="font-weight-semibold mb-1">
                    {{ question.question_number }} {{ question.question }}
                  </p>
                </VRow>
              </div>
            </VCardItem>
          </VCardItem>
        </VCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>
.responsive-button {
  block-size: auto;
  font-size: 1rem; /* Default font size for larger screens */
  min-block-size: 40px;
  padding-block: 8px;
  padding-inline: 16px; /* Default padding */
}

/* Medium screens (tablets) */
@media (max-width: 960px) {
  .responsive-button {
    font-size: 0.9rem; /* Slightly smaller font */
    min-block-size: 35px;
    padding-block: 6px;
    padding-inline: 12px;
  }
}

.outlined-card-item {
  border-radius: 15px;
  margin: 10px;
}

.row-item-parent {
  margin-inline: 0; /* Adjust margins for tighter spacing */
}

.row-item {
  margin-inline: 10px 0; /* Reduced margin */
}

.v-item {
  margin: 4px; /* Spacing between chips */
}

@media (max-width: 600px) {
  .responsive-button {
    font-size: 0.8rem; /* Smaller font size */
    min-block-size: 30px; /* Reduce button height */
    padding-block: 4px;
    padding-inline: 10px;
  }
  
  /* Adjust for mobile view */
  .outlined-card-item {
    padding: 10px;
    margin: 5px;
  }

  .row-item-parent {
    flex-direction: column; /* Stack rows vertically */
  }

  .v-item {
    margin: 2px; /* Reduce chip spacing for smaller screens */
  }
}
</style>

