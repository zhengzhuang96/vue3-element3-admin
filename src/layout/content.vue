<!--
 * @Author: zhengzhuang
 * @Date: 2021-05-27 16:12:52
 * @LastEditors: zhengzhuang
 * @LastEditTime: 2021-05-27 16:15:52
 * @Description: In User Settings Edit
 * @FilePath: /vue3-vite-template/src/layout/content.vue
-->
<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "content"
})
</script>

<style>
</style>