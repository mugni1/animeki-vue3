<script setup lang="ts">
import { useAppStore } from '@/stores/appStore'
import { Sun } from 'lucide-vue-next'
import { Moon } from 'lucide-vue-next'
const stores = useAppStore()
</script>

<template>
  <section
    class="w-full h-15 bg-base-300 shadow-md flex items-center justify-center fixed top-0 z-40"
  >
    <nav class="container mx-auto px-5 flex items-center justify-between">
      <div>
        <b>Brand</b>
      </div>
      <div>
        <button
          class="btn btn-primary btn-soft btn-sm btn-square rounded-full"
          @click="stores.changeTheme"
        >
          <Sun v-if="!stores.isDark" class="size-5" />
          <Moon v-else class="size-5" />
        </button>
      </div>
    </nav>
  </section>
</template>
