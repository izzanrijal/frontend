<script setup>
import { apiService } from '@/plugins/axios';
import { Chart, registerables } from 'chart.js';
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

Chart.register(...registerables);

const canvas = ref(null);
const results = ref([]);
const chart = ref(null);
const isLoading = ref(false);
const route = useRoute();
const menuIndex = ref(route.params.menu);
const recomendationAdvice = ref(''); // New ref for recommendation advice

const fetchChartData = async () => {
  isLoading.value = true;
  try {
    const response = await apiService.get('/student/analys/chart/result', {
      menu: menuIndex.value,
    }, { useCache: true }); // Use caching for better performance

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
          plugins: {
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
      value: `${score.score}% (${parseFloat(score.score) >= 66 ? 'Memenuhi Nilai Batas Kelulusan' : 'Belum Memenuhi Nilai Batas Kelulusan'})`,
      color: parseFloat(score.score) >= 66 ? '#005BC5' : '#FFA39E',
      passed: parseFloat(score.score) >= 66
    }));

    // Update recommendation advice
    recomendationAdvice.value = decodeHtml(data.recomandationAdvise);
  } catch (error) {
    console.error("Error fetching chart data:", error);
  } finally {
    isLoading.value = false;
  }
};

const decodeHtml = (html) => {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
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
        <div class="card-item-recommend">
          <VCardTitle>
            <span style="color: #005BC5;"> Rekomendasi & Advice </span>
          </VCardTitle>
          <VCardSubtitle class="wrap-text">
            <!-- Bind the recommendation advice as raw HTML -->
            <div v-html="recomendationAdvice"></div>
          </VCardSubtitle>
        </div>
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

.card-item-recommend {
  border-block-end: 1px solid #ccc; /* Customize the color and size as needed */
  margin-inline-start: 4px;
}

.wrap-text {
  color: #333; /* Text color */
  font-family: Arial, sans-serif; /* Use a clean, readable font */
  font-size: 1rem; /* Legible font size */
  line-height: 1.5; /* Improve readability */
  margin-block: 10px; /* Add vertical spacing */
  text-align: start; /* Align text to the start */
  white-space: normal; /* Preserve text formatting */
  word-break: break-word; /* Allow long words to wrap */
}

.wrap-text p, .wrap-text ul {
  display: inline; /* Display both inline */
  padding: 0; /* Remove padding */
  margin: 0; /* Remove margins */
}

.wrap-text ul {
  list-style-type: none; /* Remove bullet points */
  padding-inline-start: 0; /* Remove indentation */
}

.wrap-text ul li {
  display: inline; /* Make list items inline */
  margin-inline-end: 10px; /* Add spacing between items */
}

</style>
