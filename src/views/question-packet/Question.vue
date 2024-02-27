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
    <VCardItem class="outlined-card-item">
      <VCardTitle><span style="color: #0080ff;">1.</span></VCardTitle>
      <p style="color: black;" class="font-weight-semibold mb-1">
        Seorang wanita berusia 48 tahun, dalam keadaan tidak sadar dibawa oleh keluarganya ke puskesmas. Berdasarkan heteroanamnesis pihak keluarga, wanita ini telah sering menjalani opname dirumah sakit karena gejala sakit yang sama. Mulai tadi pagi ia tidak sadarkan diri. Sebelum tidak sadar, malam harinya ia mengadakan pesta perkawinan anaknya dan ia makan banyak sekali, yang pada keadaan biasa ia tidak nafsu makan. Hasil pemeriksaan fisik diapatkan ascites, sklera mata berwarna kuning, tangan dan tungkai kurus, terdapat edema di kedua kakunya, dan ada fetor ex ore. Ada gambaran vena kolateral di abdomen. 

Keadaan tidak sadar dari penderita ini kemungkinan disebabkan oleh...
      </p>
      <div class="me-n3" style="padding: 20px;">
        <VRow align="center">
          <VCol cols="12" md="12">
            <!-- Use v-model to bind the selected option -->
            <VRadioGroup v-model="selectedOption" class="mb-2" @change="saveToLocalStorage">
              <!-- Loop through the options and create radio buttons -->
              <VRadio
                v-for="(option, index) in options"
                :key="index"
                :label="option.label"
                :value="option.value"
                :color="option.color"
              />
            </VRadioGroup>
          </VCol>
        </VRow>
      </div>
    </VCardItem>

    <VCardItem class="outlined-card-item">
      <VCardTitle><span style="color: #0080ff;">Seberapa yakin jawaban anda?</span></VCardTitle>
      <div class="me-n3" style="padding: 20px;">
        <VRow align="center">
          <VCol cols="12" md="12">
            <!-- Use v-model to bind the selected option -->
            <VRadioGroup v-model="selectedOptionYakin" class="mb-2" @change="saveYakinToLocalStorage">
              <!-- Loop through the options and create radio buttons -->
              <VRadio
                v-for="(option, index) in keyakinan"
                :key="index"
                :label="option.label"
                :value="option.value"
              />
            </VRadioGroup>
          </VCol>
        </VRow>
      </div>
    </VCardItem>
  </VCard>
</template>

<style lang="scss" scoped>
.outlined-card-item {
  border: 1px solid #cccccc; /* Customize the color and size as needed */
  border-radius: 5px; /* Optional: Add border radius for rounded corners */

  margin: 10px;
}
</style>