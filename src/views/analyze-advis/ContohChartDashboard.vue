<template>
  <VCard>
    <VCardTitle>
      <span style="color: #005BC5;">Progress Pengerjaan Tryout</span>
    </VCardTitle>
    <VCardItem>
      <div class="chart-wrapper">
        <canvas id="contohStaticChart"></canvas>
      </div>
      <div class="presentase">
        <div class="presentase-title">Presentase Hasil Pengerjaan</div>
        <ul>
          <li>Paket Soal 1<br /><span class="red">61.00% (Belum Memenuhi Nilai Batas Kelulusan)</span></li>
          <li>Paket Soal 2<br /><span class="red">62.00% (Belum Memenuhi Nilai Batas Kelulusan)</span></li>
          <li>Paket Soal 3<br /><span class="red">55.00% (Belum Memenuhi Nilai Batas Kelulusan)</span></li>
        </ul>
      </div>
    </VCardItem>
  </VCard>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import Chart from 'chart.js/auto';

onMounted(() => {
  const ctx = document.getElementById('contohStaticChart') as HTMLCanvasElement | null;
  if (ctx) {
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Paket Soal 1', 'Paket Soal 2', 'Paket Soal 3'],
        datasets: [
          {
            label: 'Hasil Tryout Anda',
            data: [61, 62, 55],
            borderColor: '#3b82f6',
            backgroundColor: '#3b82f6',
            fill: false,
            tension: 0.4,
          },
          {
            label: 'Nilai Batas Kelulusan (66)',
            data: [66, 66, 66],
            borderColor: '#22c55e',
            backgroundColor: '#22c55e',
            fill: false,
            borderDash: [5, 5],
          },
          {
            label: 'Nilai Rata-rata Semua Peserta',
            data: [22, 30, 27],
            borderColor: '#facc15',
            backgroundColor: '#facc15',
            fill: false,
            borderDash: [5, 5],
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            suggestedMax: 70,
          },
        },
      },
    });
  }
});
</script>

<style scoped>
.chart-wrapper {
  width: 100%;
  max-width: 600px;
  margin: 0 auto 24px auto;
}
.presentase {
  margin-top: 24px;
  margin-bottom: 24px;
}
.presentase-title {
  font-weight: 600;
  margin-bottom: 10px;
}
.red {
  color: #e74c3c;
}
</style>
