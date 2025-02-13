import type { User } from '@/types/user'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const user = ref<User>()
  const loading = ref(false)
  const error = ref('')

  const get = async (userId: number) => {
    try {
      loading.value = true
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      const data = await response.json()

      user.value = data
    } catch (error) {
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
