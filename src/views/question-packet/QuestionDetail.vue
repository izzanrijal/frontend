<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { VCard } from 'vuetify/lib/components/index.mjs';
 // Replace with the actual key you use for the token
const questionsPacket = ref({});
const router = useRouter();
const route = useRoute();
var token = localStorage.getItem('token');

onMounted(async () => {
  if (token) {
    console.log("question packet detail run: ")
    try {
      const routeQuestionPacketID = localStorage.getItem('paket');
      console.log("question packet detail id: ", routeQuestionPacketID)
      const response = await axios.get('https://gateway.berkompeten.id/api/student/question-packet/detail?id='+routeQuestionPacketID, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("question packet detail resp: ", response.data.data)
      questionsPacket.value = response.data.data;
      console.log("question packet detail: ", questionsPacket)
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

const openQuestion = async (id, number) => {
  try {

    const response = await axios.post('https://gateway.berkompeten.id/api/student/user/do-the-test', {
      question_packet_id: id,
    }, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
 
    console.log("response open: ", response)
    
    localStorage.setItem('paket', id)
    localStorage.setItem('number', number)
    localStorage.removeItem('answer');
    localStorage.removeItem('answerValue');

    if (questionsPacket.is_done) {
      router.push("/soal-review")
    }else{
      router.push("/soal")
    }
  } catch (error) {
    // Handle login error (display error message, redirect, etc.)
    console.error('answer failed:', error);
    if (error.response && error.response.data) {
      errorMessage.value = error.response.data.errors;
    } else {
      errorMessage.value = 'An unexpected error occurred during login.';
    }
  }
}

const openDetail = async (id, number) => {
  try {

    const response = await axios.post('https://gateway.berkompeten.id/api/student/user/do-the-test', {
      question_packet_id: id,
    }, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
 
    console.log("response detail review: ", response)
    
    localStorage.setItem('paket', id)
    localStorage.setItem('number', number)
    localStorage.removeItem('answer');
    localStorage.removeItem('answerValue');

    router.push("/soal-review")
  } catch (error) {
    // Handle login error (display error message, redirect, etc.)
    console.error('answer failed:', error);
    if (error.response && error.response.data) {
      errorMessage.value = error.response.data.errors;
    } else {
      errorMessage.value = 'An unexpected error occurred during login.';
    }
  }
}
</script>

<template>
  <div class="detail-page-container">
    <!-- Main Content Card -->
    <VCard class="main-card">
      <!-- Header Section with Title -->
      <VCardItem class="header-section">
        <VCardTitle class="packet-title">{{ questionsPacket.name }}</VCardTitle>
      </VCardItem>

      <!-- Info Card Section -->
      <VCardItem class="info-card-section">
        <VCard class="info-card" elevation="0">
          <VCardItem>
            <div class="info-content">
              <div class="info-icon">
                <VAvatar color="primary" rounded size="52" class="elevation-1">
                  <VIcon size="28" icon="ri-file-list-line" />
                </VAvatar>
              </div>
              <div class="info-text">
                <VCardTitle class="total-question">
                  Total Soal: {{ questionsPacket.total_question }}
                </VCardTitle>
                <p class="status-text" v-if="questionsPacket.is_done === false">
                  Siapkan diri Anda untuk mengerjakan paket soal yang telah dirancang untuk menguji pemahaman Anda pada berbagai topik.
                </p>
                <p class="status-text" v-if="questionsPacket.is_done === true">
                  Anda telah selesai mengerjakan soal-soal dalam paket ini. Kini saatnya untuk meninjau jawaban dan memahami pembahasan untuk meningkatkan pemahaman Anda.
                </p>
              </div>
            </div>
          </VCardItem>
        </VCard>
      </VCardItem>

      <!-- Detail Section -->
      <VCardItem class="detail-section">
        <h3 class="detail-heading">Detail</h3>
        
        <!-- Content for not completed test -->
        <div v-if="questionsPacket.is_done === false" class="detail-content">
          <ul class="detail-list">
            <li>Selesaikan paket soal ini untuk mendapatkan analisis yang dipersonalisasi khusus untuk Anda.</li>
            <li>Tidak perlu terburu-buru—Anda dapat melanjutkannya kapan saja.</li>
          </ul>
          
          <VCard color="info" variant="tonal" class="notice-card my-4">
            <VCardText class="notice-text">
              <VIcon icon="ri-information-line" start class="mr-1" />
              Kerjakan soal ini dengan jujur dan tanpa bantuan untuk hasil yang akurat. Jika tidak tahu jawabannya, tandai "Tidak Tahu" agar prioritas pembelajaran Anda dapat dipetakan dengan tepat.
            </VCardText>
          </VCard>
        </div>
        
        <!-- Content for completed test -->
        <div v-if="questionsPacket.is_done === true" class="detail-content">
          <ul class="detail-list">
            <li>Tinjau jawaban Anda dan lihat pembahasan lengkap untuk setiap soal.</li>
          </ul>
        </div>
      </VCardItem>

      <!-- Alert for completed test -->
      <VCard 
        v-if="questionsPacket.is_done === true" 
        color="info"
        variant="tonal"
        class="alert-card mx-4 mb-6"
      >
        <VCardItem class="alert-item">
          <template #prepend>
            <VIcon icon="ri-information-line" size="24" class="mr-2" />
          </template>
          <VCardText class="alert-text pa-0">
            Perhatian: Halaman berikutnya akan menampilkan soal dan pembahasan dari paket ini. Gunakan sebagai bahan pembelajaran dan evaluasi untuk memahami soal-soal yang belum Anda kuasai.
          </VCardText>
        </VCardItem>
      </VCard>

      <!-- Action Button Section -->
      <VCardItem class="button-section">
        <!-- Button for starting a new test -->
        <VBtn
          v-if="questionsPacket.is_done === false && questionsPacket.next_question === 1"
          block
          size="large"
          color="primary"
          class="action-button"
          elevation="1"
          @click="openQuestion(questionsPacket.id, 1)"
        >
          <VIcon icon="ri-play-circle-line" start class="mr-2" />
          Mulai Test
        </VBtn>

        <!-- Button for continuing a test -->
        <VBtn
          v-if="questionsPacket.is_done === false && questionsPacket.next_question !== 1"
          block
          size="large"
          color="primary" 
          class="action-button"
          elevation="1"
          @click="openQuestion(questionsPacket.id, questionsPacket.next_question)"
        >
          <VIcon icon="ri-arrow-right-circle-line" start class="mr-2" />
          Lanjutkan Test
        </VBtn>

        <!-- Button for review -->
        <VBtn
          v-if="questionsPacket.is_done === true"
          block
          size="large"
          color="primary"
          class="action-button"
          elevation="1"
          @click="openDetail(questionsPacket.id, 1)"
        >
          <VIcon icon="ri-file-search-line" start class="mr-2" />
          Detail & Pembahasan
        </VBtn>
      </VCardItem>
    </VCard>
  </div>
</template>

<style lang="scss" scoped>
.detail-page-container {
  max-width: 960px;
  margin: 0 auto;
  padding: 16px;
}

.main-card {
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05) !important;
}

.header-section {
  padding: 24px 24px 8px;
}

.packet-title {
  font-size: 1.5rem !important;
  font-weight: 700 !important;
  color: #333 !important;
  line-height: 1.3;
}

.info-card-section {
  padding: 0 24px 16px;
}

.info-card {
  border-radius: 12px;
  border: 1px solid rgba(0, 128, 255, 0.1);
  background-color: rgba(0, 128, 255, 0.02);
}

.info-content {
  display: flex;
  align-items: flex-start;
  gap: 16px;
}

.total-question {
  font-size: 1.1rem !important;
  font-weight: 600 !important;
  color: #555;
  margin-bottom: 8px;
}

.status-text {
  font-size: 1rem;
  line-height: 1.5;
  color: #666;
  margin: 0;
}

.detail-section {
  padding: 8px 24px 16px;
}

.detail-heading {
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 16px;
}

.detail-content {
  color: #666;
}

.detail-list {
  padding-left: 24px;
  margin-bottom: 16px;
  
  li {
    margin-bottom: 8px;
    line-height: 1.5;
  }
}

.notice-card {
  border-radius: 12px;
}

.notice-text {
  display: flex;
  align-items: center;
  font-size: 0.95rem;
  line-height: 1.5;
}

.alert-card {
  border-radius: 12px;
}

.alert-item {
  padding: 16px;
}

.alert-text {
  font-size: 0.95rem;
  line-height: 1.5;
}

.button-section {
  padding: 16px 24px 24px;
}

.action-button {
  font-weight: 600;
  letter-spacing: 0.5px;
  height: 48px;
  border-radius: 12px;
}

/* Utility classes */
.primary {
  background-color: #0080ff !important;
  color: white !important;
}

.info {
  background-color: rgba(0, 128, 255, 0.1) !important;
  color: #0080ff !important;
}
</style>
