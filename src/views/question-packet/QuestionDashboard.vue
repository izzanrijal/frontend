<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
 // Replace with the actual key you use for the token
const questions = ref([]);
const router = useRouter();
var token = localStorage.getItem('token');

onMounted(async () => {
  if (token) {
    try {
      const response = await axios.get('https://gateway.berkompeten.com/api/student/question-packet', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      questions.value = response.data.data;
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
});

const openDetail = (id) => {
  localStorage.setItem('paket', id)
  router.push("/detail")
}

const openMembership = () => {
  router.push("/upgrade/membership")
}
</script>

<template>
  <VCard class="vcardtext-container">
    <VRow>
      <VCol
          cols="6"
          md="6"
          v-for="item in questions"
        >
        <VCard class="mb-4">
          <VCardItem>
            <VRow align="center" class="d-flex flex-wrap row-item-parent">
              <VAvatar
                    :color="item.is_accessed ? '#0080ff' : '#cccccc'"
                    rounded
                    size="40"
                    class="elevation-2"
                  >
                <VIcon
                  size="24"
                  icon="ri-apps-line"
                />
              </VAvatar>
              <div class="me-n3" style="padding: 20px;">
                
                <VCardTitle><span style="color: black;">{{ item.title }}</span></VCardTitle>
                <p style="color: #0080ff;" class="font-weight-semibold mb-1" v-if="item.is_accessed === true && item.is_can_be_done === true && item.answer === 0">
                  Belum dikerjakan
                </p>
                <p style="color: #0080ff;" class="font-weight-semibold mb-1" v-if="item.is_accessed === true && item.is_can_be_done === true && item.answer > 0 && item.start_date !== null && item.finish_date === null">
                  Mulai dikerjakan: {{ item.start_date }}
                </p>
                <!-- <p style="color: #0080ff;" class="font-weight-semibold mb-1" v-if="item.finish_date === '-' && item.is_active === true">
                  Mulai dikerjakan: {{ item.start_date }}
                </p>
                <p style="color: #0080ff;" class="font-weight-semibold mb-1" v-if="item.finish_date !== '-' && item.is_active === true">
                  Diselesaikan: {{ item.finish_date }}
                </p> -->
                <a
                  v-if="item.is_accessed === false"
                  style="color: #0080ff;"
                  @click="openMembership()"
                >Silahkan upgrade membership untuk melanjutkan</a>
              </div>
            </VRow>

            <template #append>
              <VBtn v-if="item.is_accessed === true && item.is_can_be_done === true && item.answer === 0"
                    block
                    type="submit"
                    @click="openDetail(item.id)"
                    :color="item.is_accessed ? '#0080ff' : '#cccccc'"
                  >
                  Kerjakan Sekarang
              </VBtn>
              <VBtn v-if="item.is_accessed === true && item.is_can_be_done === true && item.answer > 0 && item.start_date !== null && item.finish_date === null"
                    block
                    type="submit"
                    @click="openDetail(item.id)"
                    :color="item.is_accessed ? '#0080ff' : '#cccccc'"
                  >
                  Lanjutkan
              </VBtn>
              <!-- <h6 class="text-h6" v-else="item.finish_date !== '-'">
                <a
                  :style="{ color: item.is_accessed ? '#0080ff' : '#cccccc' }"
                  href="javascript:void(0)"
                >Detail & Pembahasan</a>
              </h6> -->
            </template>
          </VCardItem>
          <VRow align="center" class="d-flex flex-wrap row-item">
            <div class="d-flex align-center flex-wrap mb-3">
              <VChip
                class="d-flex flex-wrap v-item"
                :color="item.is_accessed ? '#0080ff' : '#cccccc'"
                size="small"
                v-for="child in item.topics"
              >
                {{ child }}
              </VChip>
            </div>
          </VRow>
        </VCard>
      </VCol>
    </VRow>
  </VCard>
</template>
<style lang="scss" scoped>

.custom-title-style {
  margin-block-end: 0 !important;
}

/* Add custom styling for scroll and reduce gap */
.vcardtext-container {
  margin-block-end: -10px; /* Adjust this margin to reduce the gap between rows */
  overflow-y: auto;
}

.vcardtext-container{
  padding: 10px; /* Remove bottom margin for the last row */
}

.row-item-parent{
  margin-inline: 4px 1px;

  /* Remove bottom margin for the last row */
}

.row-item{
  margin-inline: 14px 1px;

  /* Remove bottom margin for the last row */
}

.v-item {
  margin: 2px; /* Remove bottom margin for the last row */
}
</style>
