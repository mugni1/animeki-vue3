<template>
  <Navbar />
  <RouterView />
</template>

<script setup>
import { RouterView } from 'vue-router'
import { onMounted } from 'vue'
import Navbar from './components/shared/Navbar.vue'
import { useAppStore } from './stores/appStore'
const stores = useAppStore()
onMounted(() => {
  stores.applyTheme()
})
</script>
