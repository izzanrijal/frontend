<script setup>
const salesByCountries = [
  {
    abbr: 'US',
    amount: '$8,656k',
    country: 'United states of america',
    change: '+25.8%',
    sales: '894k',
    color: 'success',
  },
  {
    abbr: 'UK',
    amount: '$2,415k',
    country: 'United kingdom',
    change: '-6.2%',
    sales: '645k',
    color: 'error',
  },
  {
    abbr: 'IN',
    amount: '$865k',
    country: 'India',
    change: '+12.4%',
    sales: '148k',
    color: 'warning',
  },
  {
    abbr: 'JA',
    amount: '$745k',
    country: 'Japan',
    change: '-11.9%',
    sales: '86k',
    color: 'secondary',
  },
  {
    abbr: 'KO',
    amount: '$45k',
    country: 'Korea',
    change: '+16.2%',
    sales: '42k',
    color: 'error',
  },
]
</script>

<template>
  <VCard>
    <VCardItem>
      <VCardTitle><span style="color: #0080ff;">Lanjutkan Misi Belajarmu</span></VCardTitle>
      <p class="text-body-1 mb-0">
        <span class="d-inline-block font-weight-medium text-high-emphasis">Selesaikan Paket Soal Ini</span>
      </p>
      <div class="me-n3" style="padding: 20px;">
        <VRow align="center">
          <VAvatar
            color="#0080ff"
            rounded
            size="40"
            class="elevation-2"
          >
            <VIcon
              size="24"
              icon="ri-apps-line"
            />
          </VAvatar>
          <VRow align="center">
            <VCol
              cols="12"
              md="6"
            >
              <div class="d-flex flex-column ms-1" style="padding: 10px;">
                <p class="font-weight-semibold mb-1">
                  27 Februari 2024
                </p>
                <h5 class="welcome-text text-h5 font-weight-semibold mb-1">
                  Paket Tryout UKMPPD 4
                </h5>
              </div>
            </VCol>
            <VCol
              cols="12"
              md="4"
            >
            <VBtn
                block
                type="submit"
                to="/paket-soal"
                color="#0080ff"
              >
                Lanjutkan
            </VBtn>
            </VCol>
            </VRow>
        </VRow>
      </div>
    </VCardItem>
  </VCard>
</template>
