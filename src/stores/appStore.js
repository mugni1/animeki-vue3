import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore('appStore', () => {
  const isDark = ref(true)

  const changeTheme = () => {
    isDark.value = !isDark.value
    localStorage.setItem('isDark', JSON.stringify(isDark.value)) // ubah boolean menjadi string untuk localStorage
    applyTheme()
  }

  const applyTheme = () => {
    const saved = localStorage.getItem('isDark')
    if (saved !== null) {
      isDark.value = JSON.parse(saved) // ubah string "true"/"false" jadi boolean
    }
    document.documentElement.setAttribute('data-theme', isDark.value ? 'forest' : 'emerald')
  }

  return { changeTheme, isDark, applyTheme }
})
