<script setup>
import aviato from '@images/logos/aviato.png';
import bitbank from '@images/logos/bitbank.png';
import zipcar from '@images/logos/zipcar.png';

const earnings = [
  {
    avatar: zipcar,
    title: 'Zipcar',
    subtitle: 'Vuejs, React & HTML',
    amount: '$24,895.65',
    progress: 'primary',
  },
  {
    avatar: bitbank,
    title: 'Bitbank',
    subtitle: 'Sketch, Figma & XD',
    amount: '$8,6500.20',
    progress: 'info',
  },
  {
    avatar: aviato,
    title: 'Aviato',
    subtitle: 'HTML & Anguler',
    amount: '$1,2450.80',
    progress: 'secondary',
  },
]
</script>

<template>
  <VCard>
    <VCardItem>
      <template #subtitle>
        <VAvatar
          color="#0080ff"
          rounded
          size="40"
          class="elevation-2"
        >
          <VIcon
            size="24"
            icon="ri-file-3-line"
          />
        </VAvatar>
        <p class="text-body-1 mb-0">
          <span class="d-inline-block font-weight-medium text-high-emphasis">Paket Soal Tersedia</span>
        </p>
        <h4 class="text-h4 text-primary">
          <span style="color: #0080ff;">5</span> <span class="text-high-emphasis">Paket Soal Lagi</span>
        </h4>
      </template>
    </VCardItem>
  </VCard>
</template>

