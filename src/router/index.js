import Vue from 'vue'
import VueRouter from 'vue-router'
import DataListPage from '../pages/DataListPage.vue'
import ParkDetailPage from '../pages/ParkDetailPage.vue'

Vue.use(VueRouter)
export default new VueRouter({
  mode: 'history',
  routes: [{
      path: '/parks',
      component: DataListPage,
      props: route => ({
        currentPage: route.query.p && parseInt(route.query.p)  || 1,
        searchTerm: route.query.s || '',
      })
    },
    {
      path: '/parks/:park_id',
      component: ParkDetailPage,
    },
    {
      path: '*',
      component: DataListPage,
    },
  ]
})