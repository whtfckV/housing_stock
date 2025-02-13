<script setup lang="ts">
import { useSearchStore } from '@/stores/search';
import Employee from './Employee.vue';
import Observer from './Observer.vue';

const searchStore = useSearchStore()

const loadMore = () => {
  // берем следующую страницу, в сторе в вотчере отправляем запрос
  searchStore.page += 1
}

const handleSelect = (id: number) => {
  searchStore.selected = id
}
</script>

<template>
  <div class="results">
    <h3 class="results__title">Результаты</h3>
    <span v-if="!searchStore.search && !searchStore.users.length" class="results__subtitle">начните поиск </span>
    <template v-else>
      <ul v-if="searchStore.users.length" class="results__list">
        <Employee v-for="user in searchStore.users" :key="user.id" :user="user"
          :selected="user.id === searchStore.selected" @select="handleSelect" />
        <Observer :onIntersect="loadMore" />
      </ul>
      <span v-else-if="searchStore.search" class="results__subtitle">ничего не найдено</span>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.results {
  display: flex;
  flex-direction: column;
  // row-gap: 10px;
  height: 100%;

  &__title {
    padding-left: 20px;
    padding-right: 30px;
    font-weight: 600;
    font-size: 16px;
  }

  &__subtitle {
    padding-left: 20px;
    padding-right: 30px;
    font-weight: 400;
    font-size: 14px;
    color: var(--color-text-second);
  }

  &__list {
    display: flex;
    flex-direction: column;
    row-gap: 18px;
    margin: 0;
    padding: 10px 30px 20px 20px;
    max-height: 552px;
    overflow-y: scroll;
    list-style: none;
  }
}
</style>
