import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import AddUser from '@/components/AddUser'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/add-user',
      name: 'AddUser',
      component: AddUser
    }
  ]
})
