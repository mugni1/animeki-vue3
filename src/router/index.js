import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFound from '@/views/NotFound.vue'
import PlayMovie from '@/views/PlayMovieView.vue'
import AnimeDetail from '@/views/AnimeDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/detail/:slug', name: 'AnimeDetail', component: AnimeDetail },
    { path: '/play/:slug', name: 'PlayMovie', component: PlayMovie },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue'),
    // },
  ],
})

export default router
