<script setup>
import { Chart, registerables } from 'chart.js';
import { onMounted, ref } from 'vue';
Chart.register(...registerables);

const canvas = ref(null);

onMounted(() => {
  const ctx = canvas.value.getContext('2d');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Tryout 1', 'Tryout 2', 'Tryout 3'],
      datasets: [
        {
          label: 'Hasil Tryout Anda',
          data: [60, 62, 65],
          borderColor: 'blue',
          borderWidth: 1,
        },
        {
          label: 'Nilai Batas Kelulusan',
          data: [62, 65, 65],
          borderColor: 'green',
          borderWidth: 1,
        },
        {
          label: 'Nilai Rata-rata Semua Peserta',
          data: [58, 61, 63],
          borderColor: 'orange',
          borderWidth: 1,
        },
      ],
    },
  });
});

const results = ref([
  { label: 'Try Out Paket 1', value: '61.5% (Belum Memenuhi Nilai Batas Kelulusan)', color: '#FFA39E', passed: false },
  { label: 'Try Out Paket 2', value: '61.5% (Belum Memenuhi Nilai Batas Kelulusan)', color: '#FFA39E', passed: false },
  { label: 'Try Out Paket 3', value: '65.5% (Memenuhi Nilai Batas Kelulusan)', color: '#005BC5', passed: true },
]);
</script>

<template>
  <VCard class="outradius-card-item">
      <VCol
        cols="12"
        md="12"
      >
        <VCardTitle>
          <span style="color: #005BC5;">Progress Pengerjaan Tryout</span>
        </VCardTitle>
        <VCardItem class="card-item">
          <canvas ref="canvas"></canvas>
        </VCardItem>
        <VCardItem class="card-item">
          <VCardTitle>
            <span style="color: #005BC5;">Presentase Hasil Pengerjaan</span>
          </VCardTitle>
          <VCardText>   
            <div v-for="(result, index) in results" :key="index">
              <VListItemTitle class="font-weight-medium mb-1 custom-title-style">
                {{ result.label }}
              </VListItemTitle>
              <VListItemSubtitle class="font-weight-medium mb-1 text-body-1">
                <span :style="{ color: result.color }">{{ result.value }}</span>
              </VListItemSubtitle>
            </div>
          </VCardText>
        </VCardItem>
        <VCardItem class="card-item">
          <VCardTitle>
            <span style="color: #005BC5;"> Rekomendasi & Advice </span>
          </VCardTitle>
          <VCardSubtitle class="wrap-text">
            #lorem45952 Hasil 3 tryout Anda belum mencapai batas kelulusan. Diperlukan pembelajaran intensif lebih lanjut.
          </VCardSubtitle>
          <VCardSubtitle class="wrap-text">
            Tekankan pentingnya latihan untuk meningkatkan keterampilan. Sarankan peserta untuk meluangkan waktu untuk latihan lebih lanjut dengan menggunakan sumber daya yang tersedia, seperti latihan soal atau simulasi tes.
          </VCardSubtitle>
        </VCardItem>
      </VCol>
  </VCard>
</template>

<style scoped>
.outradius-card-item {
  border-radius: 15px; /* Optional: Add border radius for rounded corners */
  margin: 10px;
}

.card-item {
  border-block-end: 1px solid #ccc; /* Customize the color and size as needed */
}

.wrap-text {
  margin-block: 10px; /* Adds top margin */
  white-space: normal;
  word-break: break-all; /* Ensures long words are broken to fit within the container */
  word-wrap: break-word; /* Allows the text to wrap to the next line */
}
</style>

