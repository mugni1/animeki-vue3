import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore('appStore', () => {
  const isDark = ref(true)
  const changeTheme = () => {
    isDark.value = !isDark.value
    setTheme()
  }
  const setTheme = () => {
    if (isDark.value) {
      document.documentElement.setAttribute('data-theme', 'forest')
    } else {
      document.documentElement.setAttribute('data-theme', 'emerald')
    }
  }
  return { changeTheme, isDark, setTheme }
})
