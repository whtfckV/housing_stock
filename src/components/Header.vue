<script setup lang="ts">
//
</script>

<template>
  <header class="header">
    <h1 class="header__title"> Жилфонд </h1>
    <!-- Тут могла бы быть ссылка роутера, но в данном задании он не требуется -->
    <a class="header__user-link" href="#"> Пользователь </a>
  </header>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 50px;

  &__title {
    font-weight: 600;
    font-size: 32px;
    color: var(--color-main);
  }

  &__user-link {
    font-weight: 400;
    font-size: 16px;
    color: inherit;
    text-decoration: none;
  }
}
</style>
