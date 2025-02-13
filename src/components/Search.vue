<script setup lang="ts">
import { useSearchStore } from '@/stores/search';
import Loader from './Loader.vue';

const searchStore = useSearchStore()
</script>

<template>
  <label class="search">
    <span class="search__label">Поиск сотрудников</span>
    <input v-model="searchStore.search" placeholder="Введите id или имя" class="search__input" type="text">
    <Loader v-if="searchStore.loading" class="search__loader" />
    <span v-if="searchStore.error" class="search__error"> {{ searchStore.error }}</span>
  </label>
</template>

<style lang="scss" scoped>
// @keyframes spin {
//   0% {
//     transform: translateY(-50%) rotate(0deg);
//   }

//   100% {
//     transform: translateY(-50%) rotate(360deg);
//   }
// }

.search {
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 22px;
  padding-top: 27px;
  padding-right: 30px;
  padding-left: 20px;

  &__loader {
    position: absolute;
    right: 40px;
    bottom: 0;
    translate: 0 -50%;
  }

  &__label {
    font-weight: 600;
    font-size: 16px;
  }

  &__input {
    border-radius: 8px;
    border: 1.5px solid #E9ECEF;
    padding: 14.5px 16px;
    padding-right: 30px;
    font-weight: 400;
    font-size: 14px;
    color: var(--color-text-second);
  }

  &__error {
    position: absolute;
    top: 100%;
    font-weight: 600;
    font-size: 12px;
    color: rgb(252, 73, 73);
  }
}
</style>
