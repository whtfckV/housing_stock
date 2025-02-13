<script setup lang="ts">
import Loader from './Loader.vue';
import ProfileCard from './ProfileCard.vue';
import { useUserStore } from '@/stores/user';

const userStore = useUserStore()
</script>

<template>
  <section class="profile">
    <Loader v-if="userStore.loading" class="profile__loader" />
    <ProfileCard v-else-if="userStore.user" :user="userStore.user" />
    <span v-else-if="userStore.error" class="profile__error"> {{ userStore.error }} </span>
    <span v-else class="profile__none">
      Выберите сотрудника, чтобы посмотреть его профиль
    </span>
  </section>
</template>

<style lang="scss" scoped>
.profile {
  display: flex;
  padding: 30px;
  padding-left: 20px;

  &__loader {
    margin: auto;
  }

  &__error {
    margin: auto;
    font-weight: 400;
    font-size: 14px;
    color: rgb(252, 73, 73);
  }

  &__none {
    margin: auto;
    font-weight: 400;
    font-size: 14px;
    color: var(--color-text-second);
  }
}
</style>
