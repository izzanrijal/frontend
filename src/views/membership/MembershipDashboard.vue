<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
 // Replace with the actual key you use for the token
const membership = ref(null);
const router = useRouter();
const route = useRoute();
var token = localStorage.getItem('token');

onMounted(async () => {
  if (token) {
    try {
      const response = await axios.get('https://gateway.berkompeten.com/api/student/membership', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      membership.value = response.data.membership;
      console.log("Membership: ", membership)
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

const formatToIDR = (price) => {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(price);
}

const truncateDescription = (description) => {
  if (description.length > 50) {
    return description.substring(0, 35) + '...';
  }
  return description;
};
</script>

<template>
  <VCard class="vcardtext-container">
    <VCardTitle><span style="color: #0080ff;">Upgrade Membership</span></VCardTitle>
    <VRow>
      <VCol
          cols="6"
          md="6"
          v-for="item in membership"
        >
        <VCard class="mb-4">
          <VCardItem>
            <VRow align="center" class="d-flex flex-wrap row-item-parent">
              <VAvatar
                    :color="item.is_active ? '#0080ff' : '#cccccc'"
                    rounded
                    size="38"
                    class="elevation-2"
                  >
                <VIcon
                  size="24"
                  icon="ri-apps-line"
                />
              </VAvatar>
              <div class="me-n3" style="padding: 7px;">
                
                <VCardTitle><span style="color: black;">{{ item.name }}</span></VCardTitle>
                <p style="color: #0080ff;" class="font-weight-semibold mb-1">
                  Periode Aktivasi: {{ item.activation_period }} Bulan
                </p>
                <p style="color: #0080ff;" class="font-weight-semibold mb-1">
                  Deskripsi paket: {{ truncateDescription(item.description) }}
                </p>
                <p v-if="item.price !== 0" style="color: black;" class="font-weight-semibold mb-1">
                  <b>Harga: {{ formatToIDR(item.price) }}</b>
                </p>
                <p v-if="item.price === 0" style="color: black;" class="font-weight-semibold mb-1">
                  <b>Free</b>
                </p>
              </div>
            </VRow>

            <template #append>
              <VBtn v-if="item.is_current === false"
                    block
                    type="submit"
                    :to="{ path: '/membership/detail', query: { id: item.id } }"
                    :color="item.is_active ? '#0080ff' : '#cccccc'"
                  >
                  View
              </VBtn>
              <p v-if="item.is_current === true" style="color: black;" class="font-weight-semibold mb-1">
                  <b>Current Membership</b>
              </p>
            </template>
          </VCardItem>
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
