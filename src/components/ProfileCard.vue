<script setup lang="ts">
import type { User } from '@/types/user';

type Props = {
  user: User
}

defineProps<Props>()

</script>

<template>
  <div class="profile-card">
    <img class="profile-card__img" src="@/assets/img/img_big.png" alt="Заглушка">
    <div class="profile-card__info">
      <div class="profile-card__main-info">
        <h2 class="profile-card__title">{{ user.name }}</h2>
        <p>
          <span class="profile-card__label">email:</span>
          <a class="profile-card__link" :href="`mailto:${user.email}`">{{ user.email }}</a>
        </p>
        <p>
          <span class="profile-card__label">phone:</span>
          <!-- Формат номеров с добавочним номером -->
          <a class="profile-card__link" :href="`tel:+${user.phone.split(' x').join(',,').split('-').join('')}`">
            {{ user.phone }}
          </a>
        </p>
      </div>
      <div class="profile-card__about">
        <h3 class="profile-card__label profile-card__label_big">О себе:</h3>
        <p class="profile-card__about-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus maxime accusantium, rerum quia officiis, eos
          quibusdam ut nostrum excepturi ex, quas dignissimos laboriosam voluptatem ratione? Asperiores vitae
          dignissimos magni mollitia.
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.profile-card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 61px;
  width: 100%;

  &__img {
    width: 100%;
    object-fit: cover;
  }

  &__info {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
  }

  &__main-info {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
  }

  &__about {
    display: flex;
    flex-direction: column;
    row-gap: 25px;

    &-text {
      font-weight: 400;
      font-size: 14px;
    }
  }

  &__title {
    font-weight: 600;
    font-size: 16px;
  }

  &__label {
    display: inline-block;
    margin-right: 8px;
    font-weight: 600;
    font-size: 14px;

    &_big {
      font-size: 16px;
    }
  }

  &__link {
    font-weight: 400;
    font-size: 16px;
    color: var(--color-text-second);
    text-decoration: none;
  }

}
</style>
