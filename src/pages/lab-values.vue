<script setup>
import LabValuesTable from '@/views/lab-values/LabValuesTable.vue';
</script>

<template>
  <VRow>
    <VCol cols="12">
      <VCard title="Nilai Normal Laboratorium" style="color: #0080ff;">
        <LabValuesTable />
      </VCard>
    </VCol>
  </VRow>
</template>
