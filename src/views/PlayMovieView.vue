<script setup>
import Container from '@/components/elements/Container.vue'
import { Server } from 'lucide-vue-next'
</script>

<template>
  <Container class="pt-20 grid grid-cols-6 gap-5">
    <section class="col-span-4 space-y-5">
      <div class="w-full p-4 rounded flex flex-col bg-base-200 gap-1">
        <b class="text-primary">Mobile Suit Gundam: GQuuuuuuX Episode 1 Sub Indo</b>
        <p class="text-xs text-base-content/60">
          April 9, 2025 · ? views · Posted by MattyKiicy · series Mobile Suit Gundam: GQuuuuuuX
        </p>
      </div>
      <div class="w-full aspect-video skeleton rounded"></div>
      <div class="w-full border border-primary rounded p-5 space-y-4">
        <h3 class="font-extrabold flex gap-2"><Server class="size-6" /> Server List</h3>
        <div class="grid grid-cols-4 gap-4">
          <button class="btn btn-primary btn-soft">Server 1</button>
          <button class="btn btn-primary btn-soft">Server 1</button>
          <button class="btn btn-primary btn-soft">Server 1</button>
          <button class="btn btn-primary btn-soft">Server 1</button>
          <button class="btn btn-primary btn-soft">Server 1</button>
          <button class="btn btn-primary btn-soft">Server 1</button>
          <button class="btn btn-primary btn-soft">Server 1</button>
          <button class="btn btn-primary btn-soft">Server 1</button>
        </div>
      </div>
    </section>
    <section class="col-span-2">tes</section>
  </Container>
</template>
