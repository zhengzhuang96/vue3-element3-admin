/*
 * @Author: zhengzhuang
 * @Date: 2021-05-27 09:59:40
 * @LastEditors: zhengzhuang
 * @LastEditTime: 2021-07-08 11:53:08
 * @Description: In User Settings Edit
 * @FilePath: /vue3-element3-admin/src/main.js
 */
import 'element3/lib/theme-chalk/index.css'
import { createApp } from 'vue'
import Element3 from 'element3'
import SparkUI from "spark-ui";
import router from "./route"
import App from './App.vue'

createApp(App).use(router).use(Element3, { size: 'small', zIndex: 3000 }).use(SparkUI).mount('#app')