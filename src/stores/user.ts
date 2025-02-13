import type { User } from '@/types/user'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const user = ref<User>()
  const loading = ref(false)
  const error = ref('')

  const get = async (userId: number) => {
    error.value = ''
    try {
      loading.value = true
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      const data = await response.json()
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('Ошибка запроса')
        }
        if (response.status === 401) {
          throw new Error('Нет доступа')
        }
        throw new Error('Произошла ошибка')
      } else {
        user.value = data
      }
    } catch (e) {
      if (e instanceof Error) {
        error.value = e.message
      }
    } finally {
      loading.value = false
    }
  }

  return {
    user,
    loading,
    error,
    get,
  }
})
