import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import AddUser from '@/components/AddUser'
import Vuetify from "vuetify"


Vue.use(Router)
Vue.use(Vuetify)

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
