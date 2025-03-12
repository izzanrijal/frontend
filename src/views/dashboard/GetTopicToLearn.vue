<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const topicLists = ref([]);
const token = localStorage.getItem('token');
const router = useRouter();

onMounted(async () => {
  getTopicToLearn();
});

const getTopicToLearn = async () => {
  if (token) {
    try {
      const response = await axios.get('https://gateway.berkompeten.id/api/student/dashboard/get-need-to-learn-topic', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      topicLists.value = response.data.data;
    } catch (error) {
      if (error.response && error.response.status === 401) {
        // Redirect to login page if the response status is 401
        localStorage.removeItem('token');
        localStorage.removeItem('profile');
        router.push('/login');
      }
    }
  } else {
    // Redirect to login page if token is not present
    router.push('/login');
  }
};
</script>

<template>
  <VCard>
    <VRow no-gutters>
      <VCol cols="12" md="12">
        <VCardItem>
          <VCardTitle>
            <span style="color: #005BC5;">Daftar Topik/Penyakit Prioritas</span>
          </VCardTitle>
        </VCardItem>

        <VCardText v-if="topicLists.length > 0">
          <VList class="card-list">
            <VListItem
              v-for="(topic, index) in topicLists.slice(0, 5)"
              :key="index"
            >
              <VListItemTitle class="font-weight-medium mb-1 custom-title-style">
                <span style="color: #005BC5;">{{ topic.title }}</span>
              </VListItemTitle>
              <VListItemSubtitle class="text-body-1">
                <span style="color: #005BC5;">{{ topic.subtitle }}</span>
              </VListItemSubtitle>
            </VListItem>
          </VList>

          <template #append>
            <h6 class="text-h6">
              <a
                style="color: #005BC5;"
                href="javascript:void(0)"
              >View All</a>
            </h6>
          </template>
        </VCardText>

        <VCardText v-else>
          <div class="no-record-container">
            <img
              src="@/assets/images/topic_no_record.png"
              alt="No records available"
              class="no-record-image"
            />
          </div>
        </VCardText>
      </VCol>
    </VRow>
  </VCard>
</template>

<style lang="scss" scoped>
.card-list {
  --v-card-list-gap: 1.25rem;
}

.custom-title-style {
  margin-block-end: 0 !important;
}

.no-record-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px;
  block-size: 200px; /* Adjust height as needed */
}

.no-record-image {
  block-size: auto;
  max-inline-size: 100%;
}
</style>
