<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

 // Replace with the actual key you use for the token
const questionPacketResult = ref({});
const skippedQuestions = ref([]);
const router = useRouter();
const route = useRoute()
const analysisAdvice = ref({});
const adviseByDiagnose = ref([]);
const adviseByTopic = ref([]);
const options = ref([])
var token = localStorage.getItem('token');

const item = ["Reparasi Paru", "Reproduksi"]

onMounted(async () => {
  await getQuestionPacketScore()
  await fetchQuestionPacketAnalyzeResult()
  await getSkipQuestions()
});

const getQuestionPacketScore = async () => {
  if (token) {
    try {
      const routeQuestionPacketID = localStorage.getItem('paket')
      console.log("question packet id: " + routeQuestionPacketID)
      const response = await axios.get('https://gateway.berkompeten.com/api/student/user/test/result?id='+routeQuestionPacketID, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      questionPacketResult.value = response.data.data;
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
};

const fetchQuestionPacketAnalyzeResult = async () => {
  if (token) {
    try {
      const questionPacketId = localStorage.getItem('paket');
      const response = await axios.get(
        `https://gateway.berkompeten.com/api/student/analys/result-by-question-packet-id?question_packet_id=${questionPacketId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

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
      if (error.response && error.response.status === 401) {
        // Redirect to login page if the response status is 401
        localStorage.removeItem('token');
        router.push('/login');
      }
    }
  }
}

const getSkipQuestions = async () => {
  if (token) {
    try {
      const routeQuestionPacketID = localStorage.getItem('paket')
      const response = await axios.get('https://gateway.berkompeten.com/api/student/user/skip/questions?id='+routeQuestionPacketID, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      skippedQuestions.value = response.data.data;
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
};

const openDiscussion = async () => {
  question_packet_id = localStorage.getItem('paket')

  if (answer === null ){
    errorMessage.value = "Tolong pilih jawaban terlebih dahulu"
    return
  }

  if (answerValue === null){
    errorMessage.value = "Tolong pilih seberapa yakin jawaban anda terlebih dahulu"
    return
  }

  if (question_id === null){
    errorMessage.value = "question id is empty. please contact your administrator"
    return
  }

  try {
    router.push('/dashboard')
  } catch (error) {
    // Handle login error (display error message, redirect, etc.)
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
  <div style="max-block-size: 300px; overflow-y: auto;">
    <VCard class="outlined-card-item mb-4">
      <VCardItem class="text-left">
        <div class="me-n3" style="padding: 20px;">
          <VRow align="center" class="d-flex flex-wrap row-item-parent">
            <VAvatar color="#0080ff" rounded size="40" class="elevation-2">
              <VIcon size="32" icon="ri-apps-line"/>
            </VAvatar>
            <div class="me-n3" style="display: flex; flex-grow: 1;padding: 20px;">
              <VCol cols="6" md="6">
                <VCardTitle><span style="color: #0080ff;"><b>Nilai Anda {{ questionPacketResult.score }}</b></span></VCardTitle>
                <VRow align="left" style="justify-content: flex-start;">
                  <VCol cols="6" md="6">
                    <p style="color: black; padding-block-start: 15px;" class="font-weight-semibold mb-1">Passing grade:</p>
                    <p style="color: black; padding-block-start: 15px;" class="font-weight-semibold mb-1"><b>66</b></p>
                  </VCol>
                  <VCol cols="6" md="6">
                    <p style="color: black; padding-block-start: 15px;" class="font-weight-semibold mb-1">Soal yang dikerjakan:</p>
                    <p style="color: #0080ff; padding-block-start: 15px;" class="font-weight-semibold mb-1">{{ questionPacketResult.total_answered }} Soal</p>
                  </VCol>
                </VRow>
              </VCol>
            </div>
          </VRow>
        </div>
        <template #append>
          <VBtn block type="submit" @click="openDiscussion()" color="#0080ff">Lihat Pembahasan Soal</VBtn>
        </template>
      </VCardItem>
    </VCard>
  </div>

  <div style="max-block-size: 300px; overflow-y: auto;">
    <VCard class="outlined-card-item mb-4">
      <VCardItem>
        <VCardTitle><span style="color: #0080ff;">Analisis & Advice</span></VCardTitle>
        <div class="me-n3" style="padding: 20px;">
          <VRow align="center" class="d-flex flex-wrap row-item-parent">
            <VAvatar color="#0080ff" rounded size="40" class="elevation-2">
              <VIcon size="24" icon="ri-apps-line"/>
            </VAvatar>
            <div class="me-n3" style="padding: 20px;">
              <VCardTitle><span style="color: black;">List topik/diagnosis yang sebaiknya Anda tingkatkan pada latihan ini</span></VCardTitle>
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
  </div>

  <div  v-if="skippedQuestions.length !== 0">
    <VCard class="outlined-card-item mb-4">
      <VCardItem style="max-block-size: 300px; overflow-y: auto;">
        <VCardItem v-for="(question, index) in skippedQuestions" :key="question.id" class="outlined-card-item">
          <div class="me-n3" style="padding: 10px;">
              <VRow align="center">
                  <p style="color: black; padding-block-start: 15px;" class="font-weight-semibold mb-1">
                      {{ question.question_number }} {{ question.question }}
                  </p>
              </VRow>
          </div>
        </VCardItem>  
      </VCardItem>
    </VCard>
  </div>
</template>

<style lang="scss" scoped>
.outlined-card-item {
  border-radius: 15px; /* Optional: Add border radius for rounded corners */
  margin: 10px;
}

.row-item-parent{
  margin-inline: 4px 1px;

  /* Remove bottom margin for the last row */
}

.row-item{
  margin-inline: 14px 1px;

  /* Remove bottom margin for the last row */
}

.v-item {
  margin: 2px; /* Remove bottom margin for the last row */
}
</style>
