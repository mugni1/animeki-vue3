<script setup>
import { defineProps } from 'vue'
import { CirclePlay } from 'lucide-vue-next'
import { RouterLink } from 'vue-router'
const { title, date } = defineProps({
  title: String,
  date: String,
  slug: String,
})
</script>

<template>
  <RouterLink :to="'/play/' + slug" class="grid grid-cols-12 bg-primary rounded">
    <div class="col-span-2 flex items-center justify-center p-1">
      <CirclePlay class="size-8" />
    </div>
    <div class="col-span-9 flex flex-col py-2">
      <b class="line-clamp-1 text-sm">{{ title }}</b>
      <p class="text-xs line-clamp-1">
        {{ date }}
      </p>
    </div>
  </RouterLink>
</template>
