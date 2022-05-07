import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import AblumGrid from '@/components/AlbumGrid'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/album',
      name: 'AblumGrid',
      component: AblumGrid
    }
  ]
})
