<template>
  <div class="analisa-advis-page">
    <h1 class="page-title">Contoh Hasil Analisa &amp; Advis</h1>
    <div class="analisa-advis-content">
      <div class="chart-section">
        <h2>Progress Pengerjaan Tryout</h2>
        <div class="chart-wrapper">
          <canvas ref="chartCanvas" width="600" height="250" style="max-width:100%;"></canvas>
        </div>
      </div>
      <div class="result-section">
        <h3>Presentase Hasil Pengerjaan</h3>
        <div class="presentase">
          <div>Paket Soal 1<br><span class="presentase-score not-passed">61.00% (Belum Memenuhi Nilai Batas Kelulusan)</span></div>
          <div>Paket Soal 2<br><span class="presentase-score not-passed">62.00% (Belum Memenuhi Nilai Batas Kelulusan)</span></div>
          <div>Paket Soal 3<br><span class="presentase-score not-passed">55.00% (Belum Memenuhi Nilai Batas Kelulusan)</span></div>
        </div>
        <h3>Rekomendasi &amp; Advice</h3>
        <div class="advice">
          <b>nilai rata-rata dari ketiga tes &lt; 66</b>
          <p>Hasil tryout Anda menunjukkan bahwa nilai belum memenuhi batas kelulusan. Kami sarankan untuk fokus memperdalam pemahaman pada topik-topik yang telah diidentifikasi:</p>
          <ul>
            <li>Manfaatkan waktu Anda untuk berlatih menggunakan soal simulasi tambahan.</li>
            <li>Gunakan sumber daya pendukung, seperti modul pembelajaran atau diskusi kelompok.</li>
            <li>Tetap berlatih secara konsisten untuk meningkatkan keterampilan Anda!</li>
          </ul>
          <p>Dengan dedikasi dan usaha lebih, Anda dapat mencapai hasil yang diharapkan.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const chartCanvas = ref<HTMLCanvasElement | null>(null);

onMounted(() => {
  if (!chartCanvas.value) return;
  const ctx = chartCanvas.value.getContext('2d');
  if (!ctx) return;
  // Data
  const labels = ['Paket Soal 1', 'Paket Soal 2', 'Paket Soal 3'];
  // User
  const userScores = [61, 62, 55];
  // Batas Lulus
  const lulusScores = [66, 66, 66];
  // Rata-rata peserta lain (mepet)
  const avgScores = [22, 30, 25];

  // Chart area
  ctx.clearRect(0, 0, 600, 250);
  // Draw axes
  ctx.strokeStyle = '#bbb';
  ctx.beginPath();
  ctx.moveTo(50, 30); ctx.lineTo(50, 210); ctx.lineTo(580, 210);
  ctx.stroke();

  // Draw grid lines and Y axis labels
  ctx.font = '12px Arial';
  ctx.fillStyle = '#888';
  for (let y = 0; y <= 7; y++) {
    const val = 70 - y * 10;
    const yPos = 30 + y * 25;
    ctx.fillText(val.toString(), 15, yPos + 5);
    ctx.strokeStyle = '#eee';
    ctx.beginPath();
    ctx.moveTo(50, yPos); ctx.lineTo(580, yPos);
    ctx.stroke();
  }

  // Draw X axis labels
  labels.forEach((label, i) => {
    ctx.fillStyle = '#444';
    ctx.fillText(label, 120 + i * 150, 230);
  });

  // Helper to get canvas Y for score
  const getY = (score: number) => 210 - ((score - 20) * 180) / 50;

  // Draw user line
  ctx.strokeStyle = '#1976d2';
  ctx.lineWidth = 3;
  ctx.beginPath();
  userScores.forEach((score, i) => {
    const x = 120 + i * 150;
    const y = getY(score);
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.stroke();
  // Draw user dots
  userScores.forEach((score, i) => {
    const x = 120 + i * 150;
    const y = getY(score);
    ctx.beginPath();
    ctx.arc(x, y, 6, 0, 2 * Math.PI);
    ctx.fillStyle = '#1976d2';
    ctx.fill();
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 2;
    ctx.stroke();
  });

  // Draw batas lulus line
  ctx.strokeStyle = '#43a047';
  ctx.lineWidth = 2;
  ctx.beginPath();
  lulusScores.forEach((score, i) => {
    const x = 120 + i * 150;
    const y = getY(score);
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.stroke();

  // Draw rata-rata peserta lain line
  ctx.strokeStyle = '#ffb300';
  ctx.lineWidth = 2;
  ctx.beginPath();
  avgScores.forEach((score, i) => {
    const x = 120 + i * 150;
    const y = getY(score);
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.stroke();

  // Draw legend
  ctx.font = '13px Arial';
  ctx.fillStyle = '#1976d2';
  ctx.fillRect(370, 40, 16, 7);
  ctx.fillText('Hasil Tryout Anda', 390, 48);
  ctx.fillStyle = '#43a047';
  ctx.fillRect(370, 60, 16, 7);
  ctx.fillText('Nilai Batas Kelulusan (66)', 390, 68);
  ctx.fillStyle = '#ffb300';
  ctx.fillRect(370, 80, 16, 7);
  ctx.fillText('Nilai Rata-rata Semua Peserta', 390, 88);
});
</script>

<style scoped>
.analisa-advis-page {
  padding: 32px;
  background: #f8f9fd;
  min-height: 100vh;
}
.page-title {
  font-size: 1.6rem;
  font-weight: bold;
  margin-bottom: 24px;
}
.analisa-advis-content {
  display: flex;
  flex-direction: column;
  gap: 32px;
}
.chart-section {
  background: #fff;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 8px #0001;
}
.chart-wrapper {
  width: 100%;
  overflow-x: auto;
}
.result-section {
  background: #fff;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 8px #0001;
}
.presentase {
  margin-bottom: 16px;
}
.presentase-score.not-passed {
  color: #d32f2f;
  font-weight: 500;
}
.advice {
  margin-top: 12px;
}
</style>
