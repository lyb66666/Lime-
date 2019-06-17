import Vue from 'vue'
import Router from 'vue-router'
import vueresource from 'vue-resource'
import discover from '@/components/discover'
import tclass from '@/components/class'
import about from '@/components/about'
import home from '@/components/home'
import user from '@/components/user'
import pay from '@/components/pay'
import login from '@/components/login'
//huanghui 
import rixi from '@/components/rixi'
import gufeng from '@/components/gufeng'
import xiaoyuan from '@/components/xiaoyuan'
import huaijiu from '@/components/huaijiu'
import cos from '@/components/cos'
import yishu from '@/components/yishu'
import de from '@/components/de'
import order from '@/components/order'

Vue.use(Router)
Vue.use(vueresource)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'login',
            component: login
        },
        {
            path: '/home',
            name: 'home',
            component: home
        },
        {
            path: '/discover',
            name: 'discover',
            component: discover
        },
        {
            path: '/class',
            // name:'class',
            component: tclass,
            children: [
                { path: '', name: 'rixis', component: rixi },
                { path: 'rixi', name: 'rixi', component: rixi },
                { path: 'gufeng', name: 'gufeng', component: gufeng },
                { path: 'xiaoyuan', name: 'xiaoyuan', component: xiaoyuan },
                { path: 'huaijiu', name: 'huaijiu', component: huaijiu },
                { path: 'cos', name: 'cos', component: cos },
                { path: 'yishu', name: 'yishu', component: yishu },
            ]
        },
        {
            path: '/about',
            name: 'about',
            component: about
        },
        {
            path: '/user',
            name: 'user',
            component: user
        },
        {
            path: '/order',
            name: 'order',
            component: order
        },
        {
            path: '/pay',
            name: 'pay',
            component: pay
        },
        {
            path: '/de',
            name: 'de',
            component: de
        },
    ]
})