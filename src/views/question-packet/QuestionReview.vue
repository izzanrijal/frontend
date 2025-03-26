<script setup>
import reviewLogo from '@images/review.png';
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

 // Replace with the actual key you use for the token
const questionPacket = ref({});
const skippedQuestions = ref([]);
const router = useRouter()
var token = localStorage.getItem('token');

const cardItems = ref([])

onMounted(async () => {
  await getQuestionPacketReview()
  await getSkipQuestions()
});

const getQuestionPacketReview = async () => {
  if (token) {
    try {
      const routeQuestionPacketID = localStorage.getItem('paket')
      const response = await axios.get('https://gateway.berkompeten.id/api/student/user/test/review?id='+routeQuestionPacketID, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      questionPacket.value = response.data.data;
    } catch (error) {
      handleUnauthorizedError(error)
    }
  } else {
    // Redirect to login page if token is not present
    router.push('/login');
  }
};

const getSkipQuestions = async () => {
  if (token) {
    try {
      const routeQuestionPacketID = localStorage.getItem('paket')
      const response = await axios.get('https://gateway.berkompeten.id/api/student/user/skip/questions?id='+routeQuestionPacketID, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      skippedQuestions.value = response.data.data;
    } catch (error) {
      handleUnauthorizedError(error)
    }
  } else {
    // Redirect to login page if token is not present
    router.push('/login');
  }
};

const handleUnauthorizedError = (error) => {
  if (error.response && error.response.status === 401) {
    localStorage.removeItem('token');
    localStorage.removeItem('profile');
    router.push('/login');
  }
};

const previousPage = () => {
  router.push('/soal')
};

const finishTest = async () => {
  const question_packet_id = localStorage.getItem('paket')

  try {
    console.log("paket id: ",question_packet_id)

    const response = await axios.post('https://gateway.berkompeten.id/api/student/user/finish-the-test', {
      question_packet_id: question_packet_id
    }, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    
    router.push('/result')
  } catch (error) {
    handleUnauthorizedError(error)
    if (error.response && error.response.data) {
      errorMessage.value = error.response.data.errors;
    }
  }

};

const openQuestion = async (questionNumber) => {
  try {
    localStorage.setItem('number', questionNumber)

    router.push("/soal")
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

const handleHover = (index, isHover) => {
  if (cardItems.value[index]) {
    if (isHover) {
      cardItems.value[index].classList.add('hovered');
    } else {
      cardItems.value[index].classList.remove('hovered');
    }
  }
}
</script>

<template>
  <div class="review-page-container">
    <VCard class="review-card">
      <!-- Header section with illustration -->
      <VCardItem class="header-section">
        <div class="image-container">
          <VImg 
            :src="reviewLogo" 
            class="review-image" 
            alt="Review Illustration"
          />
        </div>
        
        <VCardTitle class="review-title">
          Review kembali hasil pengerjaan test Anda
        </VCardTitle>
        
        <!-- Stats section -->
        <div class="stats-section">
          <div class="stats-container">
            <div class="stats-card">
              <div class="stats-label">Soal yang telah dikerjakan</div>
              <div class="stats-value completed">{{ questionPacket.total_answered }}</div>
            </div>
            
            <div class="stats-card">
              <div class="stats-label">Soal yang belum dikerjakan</div>
              <div class="stats-value pending">{{ questionPacket.total_skip }}</div>
            </div>
          </div>
        </div>
        
        <!-- Action buttons -->
        <div class="action-buttons">
          <VBtn 
            color="primary" 
            size="large"
            class="action-button" 
            elevation="1"
            @click="finishTest"
          >
            <VIcon icon="ri-check-line" class="mr-2" />
            Selesaikan Tes
          </VBtn>
          
          <VBtn 
            variant="outlined" 
            color="primary" 
            size="large"
            class="action-button" 
            @click="previousPage"
          >
            <VIcon icon="ri-arrow-left-line" class="mr-2" />
            Kembali Mengerjakan
          </VBtn>
        </div>
      </VCardItem>
      
      <!-- Skipped questions section -->
      <VCardItem class="skipped-questions-section">
        <div class="section-title">
          <VIcon icon="ri-error-warning-line" color="warning" class="mr-2" />
          Soal-soal yang belum diberikan jawaban: 
          <span class="highlight">Ada {{ questionPacket.total_skip }} Soal</span>
        </div>
        
        <!-- Skipped questions list -->
        <div class="questions-list-container">
          <div v-if="skippedQuestions.length === 0" class="no-questions">
            <VAlert
              type="success"
              variant="tonal"
              border="start"
              density="comfortable"
            >
              Semua soal telah dikerjakan, selamat!
            </VAlert>
          </div>
          
          <VCardItem
            v-for="(question, index) in skippedQuestions"
            :key="question.id"
            class="question-card"
            @click="openQuestion(question.question_number)"
            @mouseenter="handleHover(index, true)"
            @mouseleave="handleHover(index, false)"
            ref="cardItems"
          >
            <div class="question-content">
              <div class="question-number">{{ question.question_number }}</div>
              <div class="question-text">{{ question.question }}</div>
            </div>
          </VCardItem>
        </div>
      </VCardItem>
    </VCard>
  </div>
</template>

<style lang="scss" scoped>
.review-page-container {
  max-width: 960px;
  margin: 0 auto;
  padding: 16px;
}

.review-card {
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05) !important;
}

.header-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 24px 0;
}

.image-container {
  width: 160px;
  height: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
}

.review-image {
  max-width: 100%;
  height: auto;
  object-fit: contain;
}

.review-title {
  font-size: 1.5rem !important;
  font-weight: 700 !important;
  color: #0080ff !important;
  text-align: center;
  margin-bottom: 24px !important;
}

.stats-section {
  width: 100%;
  margin-bottom: 24px;
}

.stats-container {
  display: flex;
  justify-content: space-between;
  gap: 16px;
}

.stats-card {
  flex: 1;
  background-color: #f5f7fa;
  border-radius: 12px;
  padding: 16px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.03);
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.stats-label {
  font-size: 0.9rem;
  color: #555;
  font-weight: 500;
}

.stats-value {
  font-size: 1.8rem;
  font-weight: 700;
  
  &.completed {
    color: #0080ff;
  }
  
  &.pending {
    color: #ff3860;
  }
}

.action-buttons {
  display: flex;
  gap: 16px;
  width: 100%;
  margin-bottom: 24px;
}

.action-button {
  flex: 1;
  border-radius: 12px;
  height: 48px;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.skipped-questions-section {
  padding: 0 24px 24px;
}

.section-title {
  font-size: 1rem;
  color: #333;
  font-weight: 600;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
}

.highlight {
  color: #0080ff;
  margin-left: 4px;
}

.questions-list-container {
  max-height: 300px;
  overflow-y: auto;
  border-radius: 12px;
  border: 1px solid #eaeaea;
  padding: 8px;
  background-color: #fafafa;
}

.no-questions {
  padding: 16px;
}

.question-card {
  background-color: white;
  border-radius: 8px;
  margin-bottom: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease;
  cursor: pointer;
  
  &:hover, &.hovered {
    background-color: #f0f7ff;
    border-color: #0080ff;
    transform: translateY(-1px);
    box-shadow: 0 2px 5px rgba(0, 128, 255, 0.1);
  }
  
  &:last-child {
    margin-bottom: 0;
  }
}

.question-content {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.question-number {
  background-color: #0080ff;
  color: white;
  border-radius: 8px;
  min-width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 0.85rem;
}

.question-text {
  font-size: 0.95rem;
  color: #333;
  line-height: 1.5;
}

/* Utility classes */
.primary {
  background-color: #0080ff !important;
  color: white !important;
  
  &.v-btn--variant-outlined {
    background-color: transparent !important;
    color: #0080ff !important;
    border-color: #0080ff !important;
  }
}

.warning {
  color: #ff9800 !important;
}
</style>
