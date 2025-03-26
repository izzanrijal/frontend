<template>
  <v-dialog
    :model-value="modelValue"
    @update:model-value="$emit('update:modelValue', $event)"
    persistent
    width="300"
    class="loading-modal"
  >
    <v-card class="text-center pa-6">
      <div class="d-flex flex-column align-center">
        <div class="loading-spinner mb-4">
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
        </div>
        <v-card-title class="text-center pb-0">{{ title }}</v-card-title>
        <v-card-text class="text-center pt-2">
          {{ message }}
        </v-card-text>
      </div>
    </v-card>
  </v-dialog>
</template>

<script setup>
defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
  title: {
    type: String,
    default: 'Memuat...',
  },
  message: {
    type: String,
    default: 'Sedang berpindah ke pertanyaan berikutnya. Harap tunggu sebentar.',
  },
});

defineEmits(['update:modelValue']);
</script>

<style scoped>
.loading-spinner {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 80px;
  height: 80px;
}

.circle {
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: #0080ff;
  animation: bounce 1.4s infinite ease-in-out both;
}

.circle:nth-child(1) {
  left: 16px;
  animation-delay: -0.32s;
}

.circle:nth-child(2) {
  animation-delay: -0.16s;
}

.circle:nth-child(3) {
  right: 16px;
}

@keyframes bounce {
  0%, 80%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}
</style> 
