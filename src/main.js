/*
 * @Author: zhengzhuang
 * @Date: 2021-05-27 09:59:40
 * @LastEditors: zhengzhuang
 * @LastEditTime: 2021-05-27 16:25:28
 * @Description: In User Settings Edit
 * @FilePath: /vue3-vite-template/src/main.js
 */
import 'element3/lib/theme-chalk/index.css'
import { createApp } from 'vue'
import Element3 from 'element3'
import router from "./route"
import App from './App.vue'

createApp(App).use(router).use(Element3, { size: 'small', zIndex: 3000 }).mount('#app')