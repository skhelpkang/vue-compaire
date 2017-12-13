import Vue from 'vue'
import Router from 'vue-router'
import Sample from '@/ms/sample/component/Sample'
import Sample2 from '@/ms/sample/component/Sample2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'sample',
      component: Sample
    },
    {
      path: '/sample2',
      name: 'sample2',
      component: Sample2
    },
  ]
})
