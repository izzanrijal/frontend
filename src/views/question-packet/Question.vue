<script setup>
import { emitter } from '@/main';
import axios from 'axios';
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
var token = localStorage.getItem('token');
const dialog = ref(false); // For dialog control
const props = defineProps({
  mode: String, // Accepting mode as a prop from parent
});

onMounted(async () => {
  emitter.on('refreshQuestion', (evt) => {
    console.log("run emit trigger: ", evt.number);
    selectedOption.value = null;
    selectedOptionYakin.value = null;
    getQuestion();
  });

  await getQuestion();
});

const getQuestion = async () => {
  if (token) {
    try {
      const routeQuestionPacketID = localStorage.getItem('paket');
      const number = localStorage.getItem('number');

      // First request to get question data
      const response = await axios.get(
        'https://gateway.berkompeten.com/api/student/question?id=' +
          routeQuestionPacketID +
          '&number=' +
          number,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      question.value = response.data.data;
      localStorage.setItem('question_id', response.data.data.id);

      const optionA = { label: response.data.data.option_a, value: 'A' };
      const optionB = { label: response.data.data.option_b, value: 'B' };
      const optionC = { label: response.data.data.option_c, value: 'C' };
      const optionD = { label: response.data.data.option_d, value: 'D' };
      const optionE = { label: response.data.data.option_e, value: 'E' };

      options.value = [optionA, optionB, optionC, optionD, optionE];

      if (question.value.student_answer) {
        selectedOption.value = question.value.student_answer;
        localStorage.setItem('answer', selectedOption.value);
      }

      if (question.value.student_answer_value) {
        selectedOptionYakin.value = question.value.student_answer_value;
        localStorage.setItem('answerValue', selectedOptionYakin.value);
      }

      // If mode is 'review', make additional request to review-answer endpoint
      console.log("mode: ", props.mode)
      if (props.mode === 'review') {
        console.log("run mode review")
        const reviewResponse = await axios.post(
          'https://gateway.berkompeten.com/api/student/user/review-answer',
          {
            question_packet_id: routeQuestionPacketID,
            number: number
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            }
          }
        );

        correctAnswer.value = reviewResponse.data.data.correct_answer;
        userAnswer.value = reviewResponse.data.data.user_answer;
        discussion.value = marked(reviewResponse.data.data.discussion);

        // Set selectedOption to userAnswer from the review
        selectedOption.value = userAnswer.value;
      }
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

const selectedOption = ref(null);
const selectedOptionYakin = ref(null);

const keyakinan = [
  { label: 'Sangat Yakin', value: 'yakin', color: 'green' },
  { label: 'Masih Ragu', value: 'ragu', color: 'orange' },
  { label: 'Saya tidak tahu untuk jawaban soal ini', value: 'tidak tahu', color: 'red' },
];

const saveToLocalStorage = () => {
  console.log("selected option: ", selectedOption.value);
  localStorage.setItem('answer', selectedOption.value);
};

const saveYakinToLocalStorage = () => {
  console.log("selected option yakin: ", selectedOptionYakin.value);
  localStorage.setItem('answerValue', selectedOptionYakin.value);
};

const isCorrectAnswer = (value, label) => {
  console.log("val: ", value)
  console.log("label: ", label)
  console.log("correct answer: ", correctAnswer.value)
  correctAnswerLabel.value = label
  console.log("correct answer label: ", correctAnswerLabel.value)
  return value === correctAnswer.value;
};

const isWrongAnswer = (value) => {
  console.log("val: ", value)
  console.log("user answer: ", userAnswer.value)
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
              <VCardSubtitle class="wrap-text">
                {{ option.value }}. {{ option.label }}
                
                <!-- Icons based on correctness -->
                <VIcon
                  v-if="isCorrectAnswerIcon(option.value)" 
                  color="green" 
                  class="ml-2 correct-answer-check-line"
                  icon="ri-check-line"
                >
                </VIcon>
                <VIcon 
                  v-if="isWrongAnswerIcon(option.value)" 
                  color="red" 
                  class="ml-2 wrong-answer-close-line"
                  icon="ri-close-line"
                >
                </VIcon>
              </VCardSubtitle>
            </VCardItem>
            <!-- Use v-model to bind the selected option -->
            <VRadioGroup v-model="selectedOption" class="mb-2" @change="saveToLocalStorage" :disabled="mode === 'review'" v-if="mode === 'question'">
              <!-- Loop through the options and create radio buttons -->
              <VRadio
                v-for="(option, index) in options"
                :key="index"
                :label="option.label"
                :value="option.value"
                :color="isCorrectAnswer(option.value, option.label) ? 'green' : (isWrongAnswer(option.value) ? 'red' : 'default')"
                :class="{
                  'correct-answer': isCorrectAnswer(option.value, option.label),
                  'wrong-answer': isWrongAnswer(option.value),
                }"
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
.outlined-card-item {
  border: 1px solid #ccc; /* Customize the color and size as needed */
  border-radius: 15px; /* Optional: Add border radius for rounded corners */
  margin: 10px;
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

.correct-answer-check-line {
  border: 1px solid green; /* Border for correct answer */
  border-radius: 15px;
  background-color: rgba(0, 255, 0, 10%);
}

.wrong-answer-close-line {
  border: 1px solid red; /* Border for wrong answer */
  border-radius: 15px;
  background-color: rgba(255, 0, 0, 10%);
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
