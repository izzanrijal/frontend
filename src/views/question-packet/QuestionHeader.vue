<script setup>
import { ref } from 'vue';

const selectedOption = ref(null);
const selectedOptionYakin = ref(null);
const options = [
  { label: 'A Keracunan makanan', value: 'a' },
  { label: 'B Keracunan amonia', value: 'b' },
  { label: 'C Kecapaian', value: 'c' },
  { label: 'D Kebanyakan minum alkohol', value: 'd' },
  { label: 'E Keracunan urea', value: 'e' },
];

const keyakinan = [
  { label: 'Sangat Yakin', value: 'yakin', color: 'success' },
  { label: 'Masih Ragu', value: 'ragu', color: 'warning' },
  { label: 'Saya tidak tahu untuk jawaban soal ini', value: 'tidak_tahu', color: 'danger' },
];

const saveToLocalStorage = () => {
  console.log("selected option: ", selectedOption.value)
  // Save the selected option to local storage
  localStorage.setItem('answer', selectedOption.value);
};

const saveYakinToLocalStorage = () => {
  console.log("selected option yakin: ", selectedOptionYakin.value)
  // Save the selected option to local storage
  localStorage.setItem('answerValue', selectedOptionYakin.value);
};
</script>

<template>
  <VCard>
    <VRow class="match-height">
      <VCol
        cols="12"
        md="3"
      >
        <VCardItem class="outlined-card-item">
          <p style="color: black;" class="font-weight-semibold mb-1">
            \ Topic \ <span style="color: #0080ff;">Test</span>
          </p>
        </VCardItem>
      </VCol>

      <VCol
        cols="12"
        md="9"
      >
        <VCardItem>
          <template #append>
            <VRow class="match-height">
            <VCol
              cols="12"
              md="7"
            >
              <VBtn
                    block
                    type="submit"
                    to="/lab-values"
                    color="#0080ff"
                    variant="outlined"
                  >
                  Nilai Normal Laboratorium
              </VBtn>
            </VCol>
            <VCol
              cols="12"
              md="5"
            >
              <VBtn
                    block
                    type="submit"
                    to="/soal"
                    color="#0080ff"
                  >
                  Selesaikan Test
              </VBtn>
            </VCol>
          </VRow>
          </template>
          
          
        </VCardItem>
      </VCol>
    </VRow>
  </VCard>
</template>

<style lang="scss" scoped>
.outlined-card-item {
  border: 1px solid #ccc; /* Customize the color and size as needed */
  border-radius: 5px; /* Optional: Add border radius for rounded corners */
  margin: 10px;
}
</style>
