<script setup>
const statistics = [
  {
    title: 'Sales',
    stats: '245k',
    icon: 'ri-pie-chart-2-line',
    color: 'primary',
  },
  {
    title: 'Customers',
    stats: '12.5k',
    icon: 'ri-group-line',
    color: 'success',
  },
  {
    title: 'Product',
    stats: '1.54k',
    icon: 'ri-macbook-line',
    color: 'warning',
  },
  {
    title: 'Revenue',
    stats: '$88k',
    icon: 'ri-money-dollar-circle-line',
    color: 'info',
  },
]
</script>

<template>
  <VCard title="">
    <template #subtitle>
      <VAvatar
        color="#0080ff"
        rounded
        size="40"
        class="elevation-2"
      >
        <VIcon
          size="24"
          icon="ri-hourglass-fill"
        />
      </VAvatar>
      <p class="text-body-1 mb-0">
        <span class="d-inline-block font-weight-medium text-high-emphasis">Hitung Mundur Ujian (UKMPPD)</span>
      </p>
      <h4 class="text-h4 text-primary">
        <span style="color: #0080ff;">24</span> <span class="text-high-emphasis">Hari Lagi</span>
      </h4>
    </template>
  </VCard>
</template>