<template>
  <div class="rounded-md overflow-hidden">
    <RouterLink :to="'/detail/' + slug">
      <div class="h-55 w-full skeleton relative">
        <img :src="image" alt="" class="w-full h-full object-center object-cover" />
        <div
          class="absolute h-8 px-2 flex items-center left-0 right-0 bg-gradient-to-b from-transparent via-base-300/80 to-base-300 bottom-0 text-xs"
        >
          {{ status }}
        </div>
        <div class="absolute py-1 px-2 bg-primary rounded text-xs top-2 right-2 font-bold">
          {{ category }}
        </div>
      </div>
    </RouterLink>
    <div class="text-accent py-1 text-sm">
      <h1 class="text-center line-clamp-1 text-base-content font-bold">{{ title }}</h1>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { RouterLink } from 'vue-router'
const { image, title, status, category, slug } = defineProps({
  slug: {
    type: String,
  },
  title: {
    type: String,
  },
  image: {
    type: String,
  },
  status: {
    type: String,
  },
  category: {
    type: String,
  },
})
</script>
