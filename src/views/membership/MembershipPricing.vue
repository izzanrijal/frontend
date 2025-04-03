<script setup>
import axios from 'axios';
import { computed, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const membershipPlans = ref(null);
const router = useRouter();
const screenWidth = ref(window.innerWidth);
const token = localStorage.getItem('token');
const isLoading = ref(true);

onMounted(async () => {
  if (token) {
    try {
      isLoading.value = true;
      const response = await axios.get('https://gateway.berkompeten.id/api/student/membership', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      membershipPlans.value = response.data.membership;
      console.log("Membership plans:", membershipPlans.value);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        // Redirect to login page if the response status is 401
        localStorage.removeItem('token');
        localStorage.removeItem('profile');
        router.push('/login');
      }
    } finally {
      isLoading.value = false;
    }
  } else {
    // Redirect to login page if token is not present
    router.push('/login');
  }

  window.addEventListener('resize', updateScreenWidth);
});

const onUnmounted = () => {
  window.removeEventListener('resize', updateScreenWidth);
};

const updateScreenWidth = () => {
  screenWidth.value = window.innerWidth;
};

const formatToIDR = (price) => {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(price);
};

const isSmallScreen = computed(() => screenWidth.value < 768);

const selectPlan = (plan) => {
  if (plan.is_current === false && plan.is_can_upgrade === true) {
    router.push({ path: '/membership/detail', query: { id: plan.id } });
  }
};
</script>

<template>
  <div class="pricing-container">
    <div class="pricing-header">
      <h1>Pilih Membership yang Tepat untuk Anda</h1>
      <p>Upgrade membership untuk akses lebih banyak fitur dan konten premium</p>
    </div>

    <div v-if="isLoading" class="loading-container">
      <VProgressCircular indeterminate color="#0080ff" :size="70" :width="7" />
    </div>

    <div v-else class="pricing-plans">
      <VRow>
        <VCol v-for="plan in membershipPlans" :key="plan.id"
          cols="12" sm="6" md="4">
          <VCard 
            class="pricing-card" 
            :class="{ 'current-plan': plan.is_current, 'premium-plan': plan.price > 0 }"
            elevation="3"
            height="100%"
          >
            <div v-if="plan.is_current" class="current-plan-badge">
              <span>Current Plan</span>
            </div>
            
            <VCardItem>
              <VCardTitle class="text-center plan-title">{{ plan.name }}</VCardTitle>
            </VCardItem>
            
            <VCardText class="text-center">
              <div class="pricing">
                <h2 v-if="plan.price > 0" class="price">{{ formatToIDR(plan.price) }}</h2>
                <h2 v-else class="price free">Gratis</h2>
                <p class="period">untuk {{ plan.activation_period }} bulan</p>
              </div>
              
              <div class="divider"></div>
              
              <div class="features">
                <p class="feature-title">Fitur yang didapat:</p>
                <ul class="feature-list">
                  <li class="feature-item">
                    <VIcon color="primary" icon="ri-check-line" class="feature-icon" />
                    <span>Durasi {{ plan.activation_period }} bulan</span>
                  </li>
                  <li class="feature-item">
                    <VIcon color="primary" icon="ri-check-line" class="feature-icon" />
                    <span>{{ plan.description }}</span>
                  </li>
                </ul>
              </div>
            </VCardText>
            
            <VCardActions class="justify-center pb-6">
              <VBtn
                v-if="plan.is_current === false && plan.is_can_upgrade === true"
                block
                size="large"
                :color="plan.price > 0 ? 'primary' : 'secondary'"
                @click="selectPlan(plan)"
                class="upgrade-btn"
              >
                Pilih Paket
              </VBtn>
              <VBtn
                v-else-if="plan.is_current === true"
                block
                size="large"
                color="success"
                disabled
                class="current-btn"
              >
                Aktif
              </VBtn>
              <VBtn
                v-else
                block
                size="large"
                color="grey"
                disabled
                class="disabled-btn"
              >
                Tidak Tersedia
              </VBtn>
            </VCardActions>
          </VCard>
        </VCol>
      </VRow>
    </div>

    <div class="pricing-faq">
      <h2>Pertanyaan Umum</h2>
      <VExpansionPanels variant="accordion">
        <VExpansionPanel>
          <VExpansionPanelTitle>Bagaimana cara upgrade membership?</VExpansionPanelTitle>
          <VExpansionPanelText>
            Pilih paket membership yang Anda inginkan, lalu klik "Pilih Paket". Anda akan diarahkan ke halaman pembayaran untuk menyelesaikan proses upgrade.
          </VExpansionPanelText>
        </VExpansionPanel>
        <VExpansionPanel>
          <VExpansionPanelTitle>Apa saja metode pembayaran yang tersedia?</VExpansionPanelTitle>
          <VExpansionPanelText>
            Kami menerima pembayaran melalui transfer bank, e-wallet, dan kartu kredit. Metode pembayaran lengkap dapat dilihat pada halaman pembayaran.
          </VExpansionPanelText>
        </VExpansionPanel>
        <VExpansionPanel>
          <VExpansionPanelTitle>Apakah membership dapat diperpanjang?</VExpansionPanelTitle>
          <VExpansionPanelText>
            Ya, Anda dapat memperpanjang membership dengan memilih paket yang sama atau upgrade ke paket yang lebih tinggi saat masa aktif mendekati habis.
          </VExpansionPanelText>
        </VExpansionPanel>
      </VExpansionPanels>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.pricing-container {
  padding: 2rem 1rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 767px) {
    padding: 1rem 0.5rem;
  }
}

.pricing-header {
  text-align: center;
  margin-bottom: 3rem;

  h1 {
    color: #0080ff;
    font-size: 2.5rem;
    margin-bottom: 1rem;
    
    @media (max-width: 767px) {
      font-size: 1.8rem;
    }
  }

  p {
    font-size: 1.2rem;
    color: #666;
    max-width: 700px;
    margin: 0 auto;
    
    @media (max-width: 767px) {
      font-size: 1rem;
    }
  }
}

.loading-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
}

.pricing-plans {
  margin-bottom: 4rem;
}

.pricing-card {
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.1) !important;
  }

  &.current-plan {
    border: 2px solid #0080ff;
  }

  &.premium-plan {
    .plan-title {
      color: #0080ff;
    }
  }
}

.current-plan-badge {
  position: absolute;
  top: 10px;
  right: -30px;
  background-color: #0080ff;
  color: white;
  padding: 5px 30px;
  transform: rotate(45deg);
  font-weight: bold;
  font-size: 0.8rem;
  z-index: 1;
}

.plan-title {
  font-size: 1.8rem;
  font-weight: bold;
  color: #333;
  
  @media (max-width: 767px) {
    font-size: 1.5rem;
  }
}

.pricing {
  margin: 1.5rem 0;

  .price {
    font-size: 2.5rem;
    font-weight: bold;
    color: #0080ff;
    margin-bottom: 0.5rem;
    
    &.free {
      color: #4caf50;
    }
    
    @media (max-width: 767px) {
      font-size: 2rem;
    }
  }

  .period {
    color: #666;
    font-size: 1rem;
  }
}

.divider {
  height: 2px;
  background-color: #f0f0f0;
  margin: 1.5rem 0;
}

.features {
  text-align: left;
  padding: 0 1rem;

  .feature-title {
    font-weight: bold;
    margin-bottom: 1rem;
    font-size: 1.1rem;
    color: #333;
  }

  .feature-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .feature-item {
    display: flex;
    align-items: flex-start;
    margin-bottom: 1rem;
    
    .feature-icon {
      margin-right: 0.5rem;
      color: #0080ff;
      margin-top: 2px;
    }
  }
}

.upgrade-btn {
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.current-btn {
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.disabled-btn {
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.pricing-faq {
  max-width: 800px;
  margin: 0 auto;
  
  h2 {
    text-align: center;
    margin-bottom: 2rem;
    color: #333;
    font-size: 2rem;
    
    @media (max-width: 767px) {
      font-size: 1.5rem;
    }
  }
}
</style> 
