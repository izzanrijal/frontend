<script setup>
import { emitter } from '@/main';
import { apiService } from '@/plugins/axios';
import { marked } from 'marked';
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { VCardTitle } from 'vuetify/lib/components/index.mjs';

const question = ref({});
const correctAnswer = ref(null);
const correctAnswerLabel = ref(null);
const discussion = ref(null);
const userAnswer = ref(null);
const router = useRouter();
const route = useRoute();
const options = ref([]);
const isLoading = ref(false);
const dialog = ref(false); // For dialog control
const props = defineProps({
  mode: String, // Accepting mode as a prop from parent
});

onMounted(async () => {
  emitter.on('refreshQuestion', (evt) => {
    selectedOption.value = null;
    selectedOptionYakin.value = null;
    getQuestion();
  });

  await getQuestion();
});

const getQuestion = async () => {
  isLoading.value = true;
  try {
    const routeQuestionPacketID = localStorage.getItem('paket');
    const number = localStorage.getItem('number');

    // First request to get question data - use caching for faster loads of the same question
    const response = await apiService.get('/student/question', {
      id: routeQuestionPacketID,
      number: number
    }, { useCache: true });

    question.value = response.data.data;
    localStorage.setItem('question_id', response.data.data.id);

    // Create options array more efficiently
    options.value = [
      { label: response.data.data.option_a, value: 'A' },
      { label: response.data.data.option_b, value: 'B' },
      { label: response.data.data.option_c, value: 'C' },
      { label: response.data.data.option_d, value: 'D' },
      { label: response.data.data.option_e, value: 'E' }
    ];

    if (question.value.student_answer) {
      selectedOption.value = question.value.student_answer;
      localStorage.setItem('answer', selectedOption.value);
    }

    if (question.value.student_answer_value) {
      selectedOptionYakin.value = question.value.student_answer_value;
      localStorage.setItem('answerValue', selectedOptionYakin.value);
    }

    // If mode is 'review', make additional request to review-answer endpoint
    if (props.mode === 'review') {
      const reviewResponse = await apiService.post('/student/user/review-answer', {
        question_packet_id: routeQuestionPacketID,
        number: number
      });

      correctAnswer.value = reviewResponse.data.data.correct_answer;
      userAnswer.value = reviewResponse.data.data.user_answer;
      discussion.value = marked(reviewResponse.data.data.discussion);

      // Set selectedOption to userAnswer from the review
      selectedOption.value = userAnswer.value;
    }
  } catch (error) {
    console.error('Error fetching question:', error);
  } finally {
    isLoading.value = false;
  }
};

const selectedOption = ref(null);
const selectedOptionYakin = ref(null);

const keyakinan = [
  { label: 'Sangat Yakin', value: 'yakin', color: 'green' },
  { label: 'Masih Ragu', value: 'ragu', color: 'orange' },
  { label: 'Saya tidak tahu untuk jawaban soal ini', value: 'tidak tahu', color: 'red' },
];

const saveToLocalStorage = () => {
  localStorage.setItem('answer', selectedOption.value);
};

const saveYakinToLocalStorage = () => {
  localStorage.setItem('answerValue', selectedOptionYakin.value);
};

const isCorrectAnswer = (value, label) => {
  var isCorrectAnswer = false
  if (value === correctAnswer.value) {
    isCorrectAnswer = true;
    correctAnswerLabel.value = label
  }
  return isCorrectAnswer;
};

const isWrongAnswer = (value) => {
  return value === userAnswer.value && value !== correctAnswer.value;
};

const isCorrectAnswerIcon = (value) => {
  return value === correctAnswer.value;
};

const isWrongAnswerIcon = (value) => {
  return value === userAnswer.value && value !== correctAnswer.value;
};
</script>

<template>
  <VCard>
    <VCardItem class="outlined-card-item">
      <VCardTitle><span style="color: #0080ff;">{{ question.question_number }}</span></VCardTitle>
      <VImg v-if="question.image_url != ''" :src="question.image_url" style="block-size: 350px; cursor: pointer; inline-size: 350px;" @click="dialog = true" />
      <p style="color: black;" class="font-weight-semibold mb-1">
        {{ question.scenario }}
      </p>
      <p style="color: black; padding-block-start: 15px;" class="font-weight-semibold mb-1">
        {{ question.question }}
      </p>
      <div class="me-n3" style="padding: 20px;">
        <VRow align="center">
          <VCol cols="12" md="12">
            <VCardItem 
              :class="{
                'correct-answer': isCorrectAnswer(option.value, option.label),
                'wrong-answer': isWrongAnswer(option.value),
              }" 
              v-if="mode === 'review'" 
              v-for="(option, index) in options"
            >
              <VRow no-gutters align="center"> <!-- Align items in the same row -->
                <!-- Subtitle in the first column -->
                <VCol cols="10">
                  <VCardSubtitle class="wrap-text">
                    {{ option.value }}. {{ option.label }}
                  </VCardSubtitle>
                </VCol>

                <!-- Icons in the second column, aligned to the right -->
                <VCol cols="2" class="d-flex justify-content-end">
                  <VIcon
                    v-if="isCorrectAnswerIcon(option.value)" 
                    class="answer-icon correct-answer-check-line"
                    icon="ri-check-line"
                  >
                  </VIcon>
                  <VIcon 
                    v-if="isWrongAnswerIcon(option.value)" 
                    class="answer-icon wrong-answer-close-line"
                    icon="ri-close-line"
                  >
                  </VIcon>
                </VCol>
              </VRow>
            </VCardItem>
            <!-- Use v-model to bind the selected option -->
            <VRadioGroup v-model="selectedOption" class="mb-2" @change="saveToLocalStorage" :disabled="mode === 'review'" v-if="mode === 'question'">
              <!-- Loop through the options and create radio buttons -->
              <VRadio
                v-for="(option, index) in options"
                :key="index"
                :label="option.label"
                :value="option.value"
                :disabled="mode === 'review'"
              />
            </VRadioGroup>
          </VCol>
        </VRow>
      </div>
    </VCardItem>

    <VCardItem class="outlined-card-item">
      <div v-if="mode === 'review'">
        <VCardTitle>
          <span style="color: #005BC5;">Jawaban Benar : {{ correctAnswer }}</span>
        </VCardTitle>
        <VCardSubtitle class="wrap-text">
          {{ correctAnswerLabel }}
        </VCardSubtitle>
        <VCardSubtitle class="wrap-text" v-html="discussion">
        </VCardSubtitle>
      </div>

      <div v-if="mode === 'question'">
        <VCardTitle><span style="color: #0080ff;">Seberapa yakin jawaban anda?</span></VCardTitle>
        <div class="me-n3" style="padding: 20px;">
          <VRow align="center">
            <VCol cols="12" md="12">
              <!-- Use v-model to bind the selected option -->
              <VRadioGroup v-model="selectedOptionYakin" class="mb-2" @change="saveYakinToLocalStorage">
                <VRadio
                  v-for="(option, index) in keyakinan"
                  :key="index"
                  :value="option.value"
                  class="custom-radio"
                  :disabled="mode === 'review'"
                >
                  <template #label>
                    <span :class="['custom-circle', option.color]"></span>
                    {{ option.label }}
                  </template>
                </VRadio>
              </VRadioGroup>
            </VCol>
          </VRow>
        </div>
      </div>
    </VCardItem>

    <!-- Dialog content -->
    <v-dialog v-model="dialog" max-width="600px">
      <v-card>
        <v-card-text>
          <VImg v-if="question.image_url !== ''" :src="question.image_url" style="max-inline-size: 100%;" />
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" text @click="dialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </VCard>
</template>

<style lang="scss" scoped>
@mixin media-breakpoint-down($breakpoint) {
  @if $breakpoint == sm {
    @media (max-width: 767px) {
      @content;
    }
  }
}

.outlined-card-item {
  border: 1px solid #ccc; /* Customize the color and size as needed */
  border-radius: 15px; /* Optional: Add border radius for rounded corners */
  margin: 10px;
}

.row-item-parent{
  margin-inline: 4px 1px;

  /* Remove bottom margin for the last row */
  @include media-breakpoint-down(sm) {
    margin-inline: 0 0 !important;
  }
}

.custom-radio {
  display: flex;
  align-items: center;
}

.custom-circle {
  display: inline-block;
  border-radius: 50%;
  block-size: 16px;
  inline-size: 16px;
  margin-inline-end: 10px;
}

.custom-circle.green {
  background-color: green;
}

.custom-circle.orange {
  background-color: orange;
}

.custom-circle.red {
  background-color: red;
}

.correct-answer {
  border: 1px solid green; /* Border for correct answer */
  border-radius: 15px;
}

.wrong-answer {
  border: 1px solid red; /* Border for wrong answer */
  border-radius: 15px;
}

.answer-content {
  flex-grow: 1; /* Ensures the content takes up most of the space */
  margin-inline-end: 10px; /* Adds space between the text and the icon */
}

.answer-item {
  display: flex;
  flex-wrap: nowrap;
  padding: 10px;
  border-radius: 15px;
}

.answer-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  block-size: 30px;
  color: white;
  inline-size: 30px;
}

.correct-answer-check-line {
  background-color: green; /* Green background for correct answer */
}

.wrong-answer-close-line {
  background-color: red; /* Red background for wrong answer */
}

/* Responsive handling */
@media (max-width: 767px) {
  .answer-item {
    padding: 8px;
  }

  .answer-icon {
    block-size: 25px;
    inline-size: 25px;
  }

  .wrap-text {
    font-size: 14px;
  }
}

.wrap-text {
  color: #000;
  margin-block: 10px; /* Adds top margin */
  white-space: normal;
  word-break: break-all; /* Ensures long words are broken to fit within the container */
  word-wrap: break-word; /* Allows the text to wrap to the next line */
}

.ml-2 {
  margin-inline-start: 8px;
}

/* Optional: Style the radio button when disabled */
.v-input--selection-controls__input:disabled {
  opacity: 0.5; /* Make it visually distinct when disabled */
}
</style>
