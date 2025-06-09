<script setup lang="ts">
import Container from '@/components/elements/Container.vue'
import { ArrowLeftCircle } from 'lucide-vue-next'
import { RouterLink } from 'vue-router'
</script>

<template>
  <Container :class="'min-h-screen flex items-center justify-center flex-col gap-4'">
    <div class="flex flex-col items-center justify-center">
      <h1 class="font-extrabold text-4xl">404</h1>
      <h1 class="font-extrabold text-xl">Not Found</h1>
    </div>
    <RouterLink to="/" class="btn btn-primary"><ArrowLeftCircle class="size-6" /> Back</RouterLink>
  </Container>
</template>
