import Vue from 'vue'
import Router from 'vue-router'
/* import HelloWorld from '@/components/HelloWorld' */
import home from '@/pages/home'
import publications from '@/pages/publications'
import research from '@/pages/research'
import contactus from '@/pages/contactus'
import students from '@/pages/students'
import teachers from '@/pages/teachers'
import genebridge from '@/pages/genebridge'
/* import { component } from 'vue/types/umd' */

Vue.use(Router)

export default new Router({
  routes: [
    /* {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, */
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/publications',
      name: 'publications',
      component: publications
    },
    {
      path: '/research',
      name: 'research',
      component: research
    },
    {
      path: '/people/students',
      name: 'students',
      component: students
    },
    {
      path: '/people/teachers',
      name: 'teachers',
      component: teachers
    },
    {
      path: '/contactus',
      name: 'contactus',
      component: contactus
    },
    {
      path: '/resources/genebridge',
      name: 'genebridge',
      component: genebridge
    }
  ]
})
