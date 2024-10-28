<script setup>
import axios from 'axios';
import { Chart, registerables } from 'chart.js';
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

Chart.register(...registerables);

const canvas = ref(null);
const results = ref([]);
const chart = ref(null);
var token = localStorage.getItem('token');
const route = useRoute();
const menuIndex = ref(route.params.menu);

const fetchChartData = async () => {
  try {
    const response = await axios.get('https://gateway.berkompeten.com/api/student/analys/chart/result', {
      headers: {
        Authorization: `Bearer ${token}`
      },
      params: {
        menu: menuIndex.value,
      }
    });

    if (response.data.error) {
      console.error(response.data.message);
      return;
    }

    const data = response.data.data;
    const labels = data.userScores.map(item => item.tryout);
    const userScores = data.userScores.map(item => parseFloat(item.score));
    const passingThreshold = data.passingThreshold.map(item => item.score);
    const averageScores = data.averageScores.map(item => item.score);

    // Check for chart instance existence before attempting to update or create
    if (chart.value && chart.value.destroy) {
      chart.value.destroy(); // Destroy existing instance if it exists
    }
    
    // Proceed with chart creation only if canvas context is available
    if (canvas.value) {
      const ctx = canvas.value.getContext('2d');
      chart.value = new Chart(ctx, {
        type: 'line',
        data: {
          labels,
          datasets: [
            {
              label: 'Hasil Tryout Anda',
              data: userScores,
              borderColor: 'blue',
              borderWidth: 1,
            },
            {
              label: 'Nilai Batas Kelulusan',
              data: passingThreshold,
              borderColor: 'green',
              borderWidth: 1,
            },
            {
              label: 'Nilai Rata-rata Semua Peserta',
              data: averageScores,
              borderColor: 'orange',
              borderWidth: 3,
            },
          ],
        },
        options: {
          plugins: { // Make sure there are no undefined plugins or unnecessary configurations
            legend: {
              display: true,
              position: 'top',
            },
          },
        },
      });
    }

    // Update results section
    results.value = data.userScores.map(score => ({
      label: score.tryout,
      value: `${score.score}% (${parseFloat(score.score) >= 63.5 ? 'Memenuhi Nilai Batas Kelulusan' : 'Belum Memenuhi Nilai Batas Kelulusan'})`,
      color: parseFloat(score.score) >= 63.5 ? '#005BC5' : '#FFA39E',
      passed: parseFloat(score.score) >= 63.5
    }));
  } catch (error) {
    console.error("Error fetching chart data:", error);
  }
};

onMounted(() => {
  fetchChartData();
});

// Watch for changes in route params
watch(
  () => route.params.menu,
  (newMenuIndex) => {
    if (newMenuIndex !== menuIndex.value) {
      menuIndex.value = newMenuIndex;
      fetchChartData();
    }
  }
);
</script>

<template>
  <VCard class="outradius-card-item">
      <VCol cols="12" md="12">
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
