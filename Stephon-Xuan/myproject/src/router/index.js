import Vue from 'vue'
import Router from 'vue-router'
import pageOne from '@/views/pageOne'
import pageTwo from '@/views/pageTwo'
import {A,B} from "@/components/";
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'pageOne',
      component:pageOne,
      // children:[
      //   {
      //     path:'shadiao',
      //     component:A
      //   }
      // ]
    },
    {
      path: '/pageTwo',
      name:'pageTwo',
      component:pageTwo
      
    },
    
  ]
})
