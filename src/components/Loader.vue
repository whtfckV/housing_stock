<script setup lang="ts">
//
</script>

<template>
  <span class="loader"></span>
</template>

<style lang="scss" scoped>
.loader {
  display: inline-block;
  width: 25px;
  height: 25px;
  border: 2px solid #ccc;
  border-top: 2px solid var(--color-main);
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
