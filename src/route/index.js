/*
 * @Author: zhengzhuang
 * @Date: 2021-05-27 10:12:52
 * @LastEditors: zhengzhuang
 * @LastEditTime: 2021-05-31 09:53:14
 * @Description: 路由控制 route
 * @FilePath: /vue3-vite-template/src/route/index.js
 */
import { createRouter, createWebHashHistory } from "vue-router";
import Layout from "../layout/layout.vue";
import Workplace from "../views/dashboard/workplace.vue";

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard/index', // 设置默认打开的页面
    meta: { title: 'dashboard', icon: '', affix: true },
    children: [
      {
        path: '/dashboard/index',
        component: Workplace,
        meta: { title: '工作台', icon: '', affix: true },
      },
      {
        path: '/dashboard/analysis',
        component: () => import('../views/dashboard/analysis.vue'),
        meta: { title: '分析页', icon: '', affix: true },
      },
    ]
  },
  {
    path: '/form',
    component: Layout,
    redirect: '/form/basicForm', // 设置默认打开的页面
    meta: { title: '表单页', icon: '', affix: true },
    children: [
      {
        path: '/form/basicForm',
        component: () => import('../views/form/basicForm.vue'),
        meta: { title: '基础表单', icon: '', affix: true },
      },
      {
        path: '/form/stepForm',
        component: () => import('../views/form/stepForm.vue'),
        meta: { title: '分步表单', icon: '', affix: true },
      },
    ]
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

export default router;