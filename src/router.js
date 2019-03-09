import Vue from 'vue'
import Router from 'vue-router'
import Siswa from './components/siswa.vue'
import Kelas from './components/kelas.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/siswa',
      name: 'siswa',
      component: Siswa
    },
    {
      path: '/kelas',
      name: 'kelas',
      component: Kelas
    }
  ]
})
