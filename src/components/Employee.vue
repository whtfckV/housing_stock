<script setup lang="ts">
import type { User } from '@/types/user';

type Props = {
  user: User
  selected?: boolean
}

type Emits = {
  select: [id: number]
}

defineProps<Props>()

const emit = defineEmits<Emits>()

const handleClick = (id: number) => {
  emit('select', id)
}

</script>

<template>
  <li :class="['employee', { selected: selected }]" @click="handleClick(user.id)">
    <!-- Тут могла бы быть ссылка на картинку из сотрудника -->
    <img class="employee__img" src="@/assets/img/img.png" alt="Заглушка">
    <div class="employee__info">
      <span class="employee__name"> {{ user.username }} </span>
      <!-- Не знаю важно это было или нет, но я сделал -->
      <a @click.stop :title="user.email" class="employee__mail" :href="`mailto:${user.email}`"> {{ user.email }} </a>
    </div>
  </li>
</template>

<style lang="scss" scoped>
.employee {
  display: flex;
  min-height: 70px;
  border-radius: 10px;
  align-items: center;
  background: #FFFFFF;
  box-shadow: 0px 0px 10px 0px #0000001A;
  overflow: hidden;
  cursor: pointer;

  &.selected {
    border: 1px solid #E0E0E0;

    .employee__info {
      background-color: #E0E0E0;
    }

    .employee__name {
      translate: 12px 0;
    }
  }

  &__img {
    border-right: 1px solid #E0E0E0;
    width: 70px;
    height: 70px;
    object-fit: cover;
  }

  &__info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: 100%;
    row-gap: 5px;
    padding-left: 15px;
    transition: background-color .3s ease;
  }

  &__name {
    font-weight: 600;
    font-size: 14px;
    transition: translate .3s ease;
  }

  &__mail {
    display: block;
    max-width: 140px;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 400;
    font-size: 14px;
    color: var(--text-color-second);
    text-decoration: none;
  }
}
</style>
