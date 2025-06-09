<script setup>
import { onMounted, ref } from 'vue'
import Card from '@/components/elements/Card.vue'
import Container from '@/components/elements/Container.vue'
import axios from 'axios'
import Loading from '@/components/layouts/Loading.vue'

const animes = ref([])
const loading = ref(true)

onMounted(async () => {
  try {
    const res = await axios.get('https://animeki-api-express.vercel.app/ongoing')
    animes.value = res.data.data.animes
  } catch (err) {
    console.log(err)
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <Loading v-if="loading" />
  <Container v-else :class="'pt-20'">
    <h1 class="font-bold text-xl mb-3">On-Going Anime</h1>

    <div class="w-full grid grid-cols-2 gap-5">
      <Card
        v-for="anime in animes"
        :slug="anime.slug"
        :image="anime.image"
        :category="anime.type"
        :status="anime.status"
        :title="anime.title"
      />
    </div>
  </Container>
</template>
