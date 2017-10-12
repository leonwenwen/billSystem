import Vue from 'vue'
import Router from 'vue-router'
import Onepage from '@/components/public/onepage'
import Cannular from '@/components/page/chartannular'
import Ccurve from '@/components/page/chartcurve'
import Ccolumn from '@/components/page/chartcolumn'
import Cpie from '@/components/page/chartpie'
import Cblend from '@/components/page/chartblend'
import Basicfrom from '@/components/page/basicfrom'
import Upflie from '@/components/page/upflie'
import Tableplugin from '@/components/page/tablestyle'
import Drag from '@/components/page/drag'
const Dday = resolve => require(['@/components/page/dday'], resolve)   //懒加载
const Tday = resolve => require(['@/components/page/tday'], resolve)


Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      component: Onepage
    },
    {
      path: '/Dday',
      component: Dday
    },
    {
      path: '/Tday',
      component: Tday
    },
    {
      path: '/Cannular',
      component: Cannular
    },
    {
      path: '/Ccurve',
      component: Ccurve
    },
    {
      path: '/Ccolumn',
      component: Ccolumn
    },
    {
      path: '/Cpie',
      component: Cpie
    },
    {
      path: '/Cblend',
      component: Cblend
    },
    {
      path: '/Basicfrom',
      component: Basicfrom
    },
    {
      path: '/Upflie',
      component: Upflie
    },
    {
      path: '/Tableplugin',
      component: Tableplugin
    },
    {
      path: '/Drag',
      component: Drag
    }

  ]
})

