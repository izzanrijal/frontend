<script setup>
import americanBank from '@images/logos/american-bank.png'
import aws from '@images/logos/aws.png'
import citiBank from '@images/logos/citi-bank.png'
import digitalOcean from '@images/logos/digital-ocean.png'
import github from '@images/logos/github.png'
import google from '@images/logos/google.png'
import gumroad from '@images/logos/gumroad.png'
import mastercardLabel from '@images/logos/mastercard-label.png'
import slack from '@images/logos/slack.png'
import stripe from '@images/logos/stripe.png'
import { ref } from 'vue'
import { load } from 'webfontloader'

const questionOrder = [
  {
    id: 1,
    order: 1,
    is_active: 1,
  },
  {
    id: 2,
    order: 2,
    is_active: 0,
  },
  {
    id: 3,
    order: 3,
    is_active: 0,
  },
  {
    id: 4,
    order: 4,
    is_active: 0,
  },
  {
    id: 5,
    order: 5,
    is_active: 0,
  },
  {
    id: 6,
    order: 6,
    is_active: 0,
  },
  {
    id: 7,
    order: 7,
    is_active: 0,
  },
  {
    id: 8,
    order: 8,
    is_active: 0,
  },
  {
    id: 9,
    order: 9,
    is_active: 0,
  },
  {
    id: 10,
    order: 10,
    is_active: 0,
  },
  {
    id: 11,
    order: 11,
    is_active: 0,
  },
  {
    id: 12,
    order: 12,
    is_active: 0,
  },
  {
    id: 13,
    order: 13,
    is_active: 0,
  },
  {
    id: 14,
    order: 14,
    is_active: 0,
  },
  {
    id: 15,
    order: 15,
    is_active: 0,
  },
  {
    id: 16,
    order: 16,
    is_active: 0,
  },
  {
    id: 17,
    order: 17,
    is_active: 0,
  },
  {
    id: 18,
    order: 18,
    is_active: 0,
  },
  {
    id: 19,
    order: 19,
    is_active: 0,
  },
  {
    id: 20,
    order: 20,
    is_active: 0,
  },
  {
    id: 21,
    order: 21,
    is_active: 0,
  },
  {
    id: 22,
    order: 22,
    is_active: 0,
  },
  {
    id: 23,
    order: 23,
    is_active: 0,
  },
  {
    id: 24,
    order: 24,
    is_active: 0,
  },
  {
    id: 25,
    order: 25,
    is_active: 0,
  },
  {
    id: 26,
    order: 26,
    is_active: 0,
  },
  {
    id: 27,
    order: 27,
    is_active: 0,
  },
  {
    id: 28,
    order: 28,
    is_active: 0,
  },
  {
    id: 29,
    order: 29,
    is_active: 0,
  },
  {
    id: 30,
    order: 30,
    is_active: 0,
  },
  {
    id: 31,
    order: 31,
    is_active: 0,
  },
  {
    id: 32,
    order: 32,
    is_active: 0,
  },
  {
    id: 33,
    order: 33,
    is_active: 0,
  },
  {
    id: 34,
    order: 34,
    is_active: 0,
  },
  {
    id: 35,
    order: 35,
    is_active: 0,
  },
  {
    id: 36,
    order: 36,
    is_active: 0,
  },
  {
    id: 37,
    order: 37,
    is_active: 0,
  },
  {
    id: 38,
    order: 38,
    is_active: 0,
  },
  {
    id: 39,
    order: 39,
    is_active: 0,
  },
  {
    id: 40,
    order: 40,
    is_active: 0,
  },
];

// Define the number of buttons per row
const buttonsPerRow = 5;
var answer = ref(null)
var answerValue = ref(null)

// Compute the grouped buttons based on the specified logic
const groupedButtons = computed(() => {
  const result = [];
  for (let i = 0; i < questionOrder.length; i += buttonsPerRow) {
    result.push(questionOrder.slice(i, i + buttonsPerRow));
  }
  return result;
});

const previousPage = () => {
  // Implement logic for going to the previous page
};

const nextPage = () => {
  answer = localStorage.getItem("answer")
  answerValue = localStorage.getItem("answerValue")

  console.log("answer submit: ", answer)
  console.log("answer val submit: ", answerValue)
};
</script>

<template>
  <VCard>
    <VRow no-gutters>
      <VCol
        md="12"
      >
        <VCardItem>
          <VCardTitle><span style="color: #0080ff;">Soal Dikerjakan</span></VCardTitle>

          <template #append>
            <p class="font-weight-semibold mb-1">
              <span style="color: #0080ff;">1</span> / 200
            </p>
          </template>
        </VCardItem>

        <VDivider />

        <VCardText class="vcardtext-container">
          <VRow v-for="(row, rowIndex) in groupedButtons" :key="rowIndex" class="d-flex flex-wrap row-item">
            <div 
              v-for="item in row"
              :key="item.id" 
              class="d-flex flex-wrap v-item">
              <VBtn
                :color="item.is_active ? 'primary' : ''"
                variant="outlined"
                class="mb-1"
                style="width: 40px; height: 40px;"
              >
                <span class="d-none d-sm-block">{{ item.order }}</span>
              </VBtn>
            </div>
          </VRow>
        </VCardText>
      </VCol>
    </VRow>
    
    <VDivider />

    <VCardText class="vcardtext-container">
      <VRow class="d-flex flex-wrap">
        <VCol cols="6" class="mb-1">
          <VBtn @click="previousPage" color="#0080ff" variant="outlined">Kembali</VBtn>
        </VCol>
        
        <VCol cols="6" class="mb-1">
          <VBtn @click="nextPage" color="#0080ff">Selanjutnya</VBtn>
        </VCol>
      </VRow>
    </VCardText>
  </VCard>
</template>

<style lang="scss" scoped>

.custom-title-style {
  margin-bottom: 0px !important;
}

/* Add custom styling for scroll and reduce gap */
.vcardtext-container {
  max-height: 350px; /* Adjust the max height as needed */
  overflow-y: auto;
  margin-bottom: -10px; /* Adjust this margin to reduce the gap between rows */
}

.vcardtext-container{
  margin-bottom: 0; /* Remove bottom margin for the last row */
}

.row-item{
  margin-left: 4px;
  margin-right: 1px; /* Remove bottom margin for the last row */
}

.v-item {
  margin: 2px; /* Remove bottom margin for the last row */
}
</style>
