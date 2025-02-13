import type { User } from '@/types/user'
import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
import { useUserStore } from './user'

// Не использую в работе mutations, так как это оустаревший подход,
// с множеством дублирования кода
// сейчас в actions можно напрямую менять стор и работать с асинхронностью
// -------------------------------------------------------------------------
export const useSearchStore = defineStore('search', () => {
  const search = ref('')
  const users = ref<User[]>([])
  const selected = ref<User['id']>()
  const loading = ref(false)
  const error = ref('')

  const userStore = useUserStore()

  // Pagination
  // Но так как возможности ее реализовать нет в API, а в тз есть
  // сделаю заготовку что это возможно
  // page будет обновляться по observer
  const page = ref(1)
  // в пагинации всегда должен возвращаться сколько всего элементов
  // благодаря этогу можно проверять если ли что еще загружать
  // и в зависимости от этого отправлять запрос на подшрузку данных или нет
  const size = ref(0)

  let timeout: number | undefined

  const createQuery = (stringQuery: string) => {
    // Тут в query так же подставлять текущую подгружаемую страницу
    const queryList = stringQuery.split(',').map((query) => query.trim())
    const listId = queryList
      .filter((query) => !isNaN(Number(query)))
      .filter((query) => !!query.length)
    const listName = queryList.filter((query) => isNaN(Number(query) && query.length))

    const searchParams = new URLSearchParams([
      ...listId.map((id) => ['id', id]),
      // тут нету изменения регистра, тк само API
      ...listName.map((name) => ['username', encodeURIComponent(name)]),
    ])

    return searchParams
  }

  const get = async (query: string) => {
    const searchParams = createQuery(query)
    const url = new URL('/users', 'https://jsonplaceholder.typicode.com')
    url.search = searchParams.toString()

    try {
      // тут можно сделать второй лоадер на пагинацию
      // и в зависимости от страницы показывать под списком
      // если первый запрос то в инпуте, как я сделал
      loading.value = true
      const response = await fetch(url)
      const data = await response.json()

      // Если убрать эту запись то можно посмотреть бесконечный скролл, правда данные запрашиваются одни и те же
      // т.к. jsonplaceholder не поддерживает пагинацию на данном эндпоинте
      size.value = data.length

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('Ошибка запроса')
        }
        if (response.status === 401) {
          throw new Error('Нет доступа')
        }
        throw new Error('Произошла ошибка')
      } else {
        // Если первая страница то меняем данные
        if (page.value === 1) {
          users.value = data
        } else {
          // иначе дописываем в конец
          users.value.push(...data)
        }
      }
    } catch (e) {
      // Очень по простому
      // По хорошему ошибку надо обрабатывать еще на уровне запроса в класса API
      // обычно я использую самописный, тк у axios находили пробелы в безопасности
      if (e instanceof Error) {
        error.value = e.message
      }
    } finally {
      loading.value = false
    }
  }

  watch(search, (newQuery) => {
    error.value = ''
    page.value = 1
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      get(newQuery)
    }, 500)
  })

  watch(page, () => {
    // Если первая страница или размер пользователей равен размеру всех пользователей которые вернул бэк
    if (page.value === 1 || users.value.length === size.value) {
      return
    }
    console.log(page.value)
    get(search.value)
  })

  watch(selected, () => {
    if (selected.value) {
      userStore.get(selected.value)
    }
  })

  return {
    search,
    users,
    selected,
    loading,
    error,
    page,
    get,
  }
})
