<script setup>
import { ref } from 'vue';

// Sample data for lists and results
const diagnosisList = ref([
  { title: 'Infeksi Abdomen', group: 'dari Grup Topik Gastroenteropahotologi' },
  { title: 'Gawat Napas (Respiratory Distress)', group: 'dari Grup Topik Respirasi' },
  { title: 'Fisiologi Kehamilan, dan lainnya', group: 'dari Grup Topik Reproduksi' },
  { title: 'Rhinitis Kronik', group: 'dari Grup Topik THT-KL' },
]);

const results = ref([
  { label: 'Infeksi Abdomen', value: 'dari Group Topik Gastroe', color: '#005BC5', passed: true },
  { label: 'Gawat Napas (Respiratory Distress)', value: 'dari Group Topik Respirasi', color: '#005BC5', passed: true },
  { label: 'Fisiologi Kehamilan, dan Lainnya', value: 'dari Group Topik Reproduksi', color: '#005BC5', passed: true },
]);

</script>

<template>
  <VCard class="outradius-card-item">
    <VRow no-gutters>
      <VCol
        cols="12"
        md="12"
      >
        <VCard>
          <VCardTitle>
            <span style="color: #005BC5;">Analisis Paket Tryout 1 sd. Paket Tryout 3</span>
          </VCardTitle>
          <VCardItem class="outlined-card-item">
            <VCardSubtitle class="wrap-text">
              #lorem78429 Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
            </VCardSubtitle>
          </VCardItem>
          <VCardItem class="outlined-card-item">
            <v-card-title>
              <span style="color: #005BC5;">Saran Prioritas Pembelajaran Berdasarkan Diagnosis</span>
            </v-card-title>
            <VCardSubtitle class="wrap-text">
              #lorem78429 Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
            </VCardSubtitle>
            <VCard>
              <VCardItem 
              :class="[
                'item-margin item', 
                index === 0 ? 'item-first' : (index !== diagnosisList.length - 1 ? 'item' : '')
              ]" 
                v-for="(item, index) in diagnosisList" 
                :key="index"
              >
                <v-list-item-content>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                  <v-list-item-subtitle>{{ item.group }}</v-list-item-subtitle>
                </v-list-item-content>
              </VCardItem>
            </VCard>
          </VCardItem>
          <VCardItem class="outlined-card-item">
            <v-card-title>
              <span style="color: #005BC5;">Saran Prioritas Pembelajaran Berdasarkan Grup Topic</span>
            </v-card-title>
            <VCardSubtitle class="wrap-text">
              #lorem78429 Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
            </VCardSubtitle>
            <VCard>
              <VCardItem 
              :class="[
                'item-margin item', 
                index === 0 ? 'item-first' : (index !== diagnosisList.length - 1 ? 'item' : '')
              ]" 
                v-for="(item, index) in diagnosisList" 
                :key="index"
              >
                <v-list-item-content>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                  <v-list-item-subtitle>{{ item.group }}</v-list-item-subtitle>
                </v-list-item-content>
              </VCardItem>
            </VCard>
          </VCardItem>
        </VCard>
      </VCol>
    </VRow>
  </VCard>
</template>

<style scoped>
.wrap-text {
  margin-block: 10px; /* Adds top margin */
  white-space: normal;
  word-break: break-all; /* Ensures long words are broken to fit within the container */
  word-wrap: break-word; /* Allows the text to wrap to the next line */
}

.item-margin {
  padding: 10px;
  margin: 10px;
}

.outlined-card-item {
  border: 1px solid #ccc; /* Customize the color and size as needed */
  border-radius: 15px; /* Optional: Add border radius for rounded corners */
  margin: 10px;
}

.outradius-card-item {
  border-radius: 15px; /* Optional: Add border radius for rounded corners */
  margin: 10px;
}

.item {
  border-block-end: 1px solid #ccc; /* Customize the color and size as needed */
}

.item-first {
  border-block-start: 1px solid #ccc; /* Customize the color and size as needed */
}

.text-success {
  color: green;
}

.text-error {
  color: red;
}
</style>
