<template>
  <VRow class="match-height">
    <VCol cols="12">
      <VAlert type="info" variant="outlined" class="mb-4" color="#005BC5" border="start" style="background: #f5faff;">
        <template #prepend>
          <v-icon color="#005BC5">mdi-information-outline</v-icon>
        </template>
        <span style="font-weight: 500; color: #005BC5;">
          Halaman ini hanya berisi contoh hasil analisa & advis.
        </span>
        <div style="margin-top: 2px; color: #222;">
          Setelah Anda menyelesaikan seluruh paket soal 1-3 atau 4-6, hasil analisa dan saran pembelajaran yang tampil di sini akan digantikan dengan hasil riil sesuai performa Anda. Silakan gunakan halaman ini sebagai referensi, bukan sebagai hasil akhir.
        </div>
      </VAlert>
    </VCol>
    <VCol cols="12" sm="6">
      <VCard class="outradius-card-item">
        <VCard>
          <VCardTitle>
            <span style="color: #005BC5;">{{ data.title }}</span>
          </VCardTitle>
          <VCardItem class="outlined-card-item">
            <VCardSubtitle class="wrap-text">
              Terima kasih telah menyelesaikan analisis soal pada {{ data.title }}. Berdasarkan hasil pengerjaan Anda, kami telah merangkum area-area yang memerlukan perhatian yang dibuat khusus untuk Anda. Dengan mempelajari topik yang disarankan secara urut, Anda akan dapat lebih mudah meningkatkan pemahaman dan hasil tes pada kesempatan berikutnya.
            </VCardSubtitle>
          </VCardItem>
          <VCardItem class="outlined-card-item">
            <v-card-title>
              <span style="color: #005BC5;">Saran Prioritas Pembelajaran Berdasarkan Diagnosis</span>
            </v-card-title>
            <VCardSubtitle class="wrap-text">
              Untuk memaksimalkan waktu belajar, fokuslah terlebih dahulu pada topik diagnosis spesifik berikut ini. Memperkuat pemahaman pada area ini akan memberikan dampak signifikan terhadap peningkatan skor Anda:
            </VCardSubtitle>
            <VCard>
              <VCardItem
                v-for="(diagnosis, index) in visibleDiagnosisAdvice"
                :key="index"
                class="diagnosis-item"
              >
                <p style="padding: 0; margin: 0; color: #005BC5;">
                  <b>{{ index + 1 }}. {{ diagnosis.subtopic }}</b><br />
                  <span style="font-style: italic;">(Kelompok Topik: {{ diagnosis.group_topic }})</span>
                </p>
              </VCardItem>
              <div style="margin-block-start: 10px; text-align: center;">
                <a
                  href="#"
                  @click.prevent="toggleShowMoreDiagnosis"
                  style="color: #005BC5; text-decoration: none;"
                >
                  {{ showMoreDiagnosis ? 'Lebih Sedikit' : 'Lihat Semua' }}
                </a>
              </div>
            </VCard>
          </VCardItem>
          <VCardItem class="outlined-card-item">
            <v-card-title>
              <span style="color: #005BC5;">Saran Prioritas Pembelajaran Berdasarkan Grup Topic</span>
            </v-card-title>
            <VCardSubtitle class="wrap-text">
              Untuk mendukung efisiensi pembelajaran Anda, kami telah mengelompokkan topik-topik yang relevan ke dalam grup pembelajaran. Dengan fokus pada grup ini, Anda dapat mempelajari beberapa topik sekaligus dan mempercepat peningkatan pemahaman Anda.
            </VCardSubtitle>
            <VCard>
              <VCardItem
                v-for="(topic, index) in visibleTopicAdvice"
                :key="index"
                class="diagnosis-item"
              >
                <p style="padding: 0;margin: 0; color: #005BC5;">
                  <b>{{ index + 1 }}. {{ topic.group_topic }}</b>
                </p>
                <ul style="margin: 0; color: #005BC5; list-style-type: circle; padding-inline-start: 20px;">
                  <div v-for="(subtopic, subIndex) in topic.items"
                  :key="subIndex" style="margin-block-end: 5px;">
                    <li
                      v-for="(sub, childIndex) in subtopic.subtopic"
                      :key="childIndex"
                      style="margin-block-end: 5px;"
                    >
                      {{ sub }}
                    </li>
                  </div>
                </ul>
              </VCardItem>
              <div style="margin-block-start: 10px; text-align: center;">
                <a
                  href="#"
                  @click.prevent="toggleShowMoreTopic"
                  style="color: #005BC5; text-decoration: none;"
                >
                  {{ showMoreTopic ? 'Lebih Sedikit' : 'Lihat Semua' }}
                </a>
              </div>
            </VCard>
          </VCardItem>
        </VCard>
      </VCard>
    </VCol>
    <VCol cols="12" sm="6">
      <VCard class="pa-4">
        <VCardTitle>Progress Pengerjaan Tryout</VCardTitle>
        <VCardItem>
          <div class="chart-wrapper mb-4">
            <canvas id="contohStaticChart"></canvas>
          </div>
          <div class="presentase mb-4">
            <div class="presentase-title">Presentase Hasil Pengerjaan</div>
            <ul>
              <li>Paket Soal 1<br /><span class="red">61.00% (Belum Memenuhi Nilai Batas Kelulusan)</span></li>
              <li>Paket Soal 2<br /><span class="red">62.00% (Belum Memenuhi Nilai Batas Kelulusan)</span></li>
              <li>Paket Soal 3<br /><span class="red">55.00% (Belum Memenuhi Nilai Batas Kelulusan)</span></li>
            </ul>
          </div>
          <div class="advice">
            <div class="advice-title">Rekomendasi &amp; Advice</div>
            <div><b>nilai rata-rata dari ketiga tes &lt; 66</b></div>
            <div class="mb-2">Hasil tryout Anda menunjukkan bahwa nilai belum memenuhi batas kelulusan. Kami sarankan untuk fokus memperdalam pemahaman pada topik-topik yang telah diidentifikasi:</div>
            <ul>
              <li>Manfaatkan waktu Anda untuk berlatih menggunakan soal simulasi tambahan.</li>
              <li>Gunakan sumber daya pendukung, seperti modul pembelajaran atau diskusi kelompok.</li>
              <li>Tetap berlatih secara konsisten untuk meningkatkan keterampilan Anda!</li>
            </ul>
            <div>Dengan dedikasi dan usaha lebih, Anda dapat mencapai hasil yang diharapkan.</div>
          </div>
        </VCardItem>
      </VCard>
    </VCol>
  </VRow>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)

const diagnosisAdvice = ref([])
const topicAdvice = ref([])
const data = ref({})
const isLoading = ref(false)
const showMoreDiagnosis = ref(false)
const showMoreTopic = ref(false)

const visibleDiagnosisAdvice = computed(() => showMoreDiagnosis.value ? diagnosisAdvice.value : diagnosisAdvice.value.slice(0, 5))
const visibleTopicAdvice = computed(() => showMoreTopic.value ? topicAdvice.value : topicAdvice.value.slice(0, 5))

function toggleShowMoreDiagnosis() {
  showMoreDiagnosis.value = !showMoreDiagnosis.value
}
function toggleShowMoreTopic() {
  showMoreTopic.value = !showMoreTopic.value
}

async function fetchData() {
  isLoading.value = true
  try {
    const response = await fetch('/src/assets/user13_result.json')
    const json = await response.json()
    diagnosisAdvice.value = Object.entries(json.data.advise_learn_by_diagnose).map(([subtopic, detail]) => ({
      subtopic,
      group_topic: detail.group_topic,
      rekurensi: detail.rekurensi,
      jumlah_test: detail.jumlah_test,
      kompetensi: detail.kompetensi,
      ranking_score: detail.ranking_score
    }))
    topicAdvice.value = Object.entries(json.data.advise_learn_by_topic).map(([group_topic, items]) => ({
      group_topic,
      items: items.map(item => ({ subtopic: item.subtopic }))
    }))
    data.value = {
      title: json.data.title || 'Analisis Paket Soal 1 sd. Paket Soal 3',
    }
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  fetchData()
  const ctx = document.getElementById('contohStaticChart')
  if (!ctx) return
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
        },
        {
          label: 'Nilai Batas Kelulusan (66)',
          data: [66, 66, 66],
          borderColor: '#22c55e',
          backgroundColor: '#22c55e',
        },
        {
          label: 'Nilai Rata-rata Semua Peserta',
          data: [22, 30, 27],
          borderColor: '#facc15',
          backgroundColor: '#facc15',
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: true,
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
  })
})
</script>

<style scoped>
.outradius-card-item {
  border-radius: 15px;
  margin: 10px;
}
.outlined-card-item {
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 16px;
}
.diagnosis-item {
  margin-bottom: 4px;
}
.group-topic-item {
  margin-bottom: 12px;
}
.chart-wrapper {
  width: 100%;
  min-height: 200px;
}
.presentase-title {
  font-weight: bold;
  margin-bottom: 8px;
}
.red {
  color: #FF5252;
}
.advice-title {
  font-weight: bold;
  margin-bottom: 6px;
}
.wrap-text {
  margin-block: 10px;
  white-space: normal;
  word-break: break-word;
  word-wrap: break-word;
}
</style>
