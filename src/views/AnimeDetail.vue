<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import Container from '@/components/elements/Container.vue'
import axios from 'axios'
import Loading from '@/components/layouts/Loading.vue'
import CardPlayer from '@/components/shared/CardPlayer.vue'
import { List } from 'lucide-vue-next'

const route = useRoute()
const slug = route.params.slug
const anime = ref({})

const loading = ref(true)

onMounted(async () => {
  try {
    const res = await axios.get('https://animeki-api-express.vercel.app/anime/' + slug)
    anime.value = res.data.data
    console.log(res.data.data)
  } catch (err) {
    console.log(err)
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <Loading v-if="loading" />
  <Container v-else class="pt-20">
    <div class="w-6/12 mx-auto rounded-md overflow-hidden skeleton">
      <img :src="anime.image" alt="" class="h-full w-full object-cover object-center" />
    </div>
    <div class="flex flex-col items-center justify-center my-3">
      <h2 class="font-bold text-xl text-center leading-tight line-clamp-2">{{ anime.title }}</h2>
      <p class="text-xs text-center text-base-content/60">
        {{ anime.subTitle }}
      </p>
    </div>
    <div class="grid grid-cols-2 gap-3 text-xs my-2">
      <div>
        <p class="flex items-center">{{ anime.status }}</p>
        <p>{{ anime.studio }}</p>
        <p>{{ anime.season }}</p>
        <p>{{ anime.type }}</p>
      </div>
      <div>
        <p>{{ anime.posted_by }}</p>
        <p>{{ anime.durasi }}</p>
        <p>{{ anime.release_date }}</p>
        <p>{{ anime.updated_date }}</p>
      </div>
    </div>
    <div class="flex flex-wrap gap-2 text-sm my-2">
      <button v-for="category in anime.category" class="btn btn-sm btn-outline btn-primary">
        {{ category.categpry_name }}
      </button>
    </div>
    <div class="flex flex-col gap-1 my-2">
      <b class="flex gap-1 items-center"><List class="size-6" /> Playlist Episode</b>
      <div
        class="w-full h-60 border rounded overflow-hidden border-primary overflow-y-auto p-2 space-y-2"
      >
        <CardPlayer
          v-for="episode in anime.episodes"
          :slug="episode.episode_slug"
          :title="episode.episode_title"
          :date="episode.episode_date"
        />
      </div>
    </div>
  </Container>
</template>
