<!--
 * @Author: zhengzhuang
 * @Date: 2021-05-28 09:33:20
 * @LastEditors: zhengzhuang
 * @LastEditTime: 2021-05-28 14:01:40
 * @Description: 分析页面 analysis
 * @FilePath: /vue3-vite-template/src/views/analysis.vue
-->
<template>
  <div>
    <bread />
    分析页面 analysis
  </div>
</template>
<script>
import { defineComponent } from 'vue'
import bread from "../../layout/bread.vue";

export default defineComponent({
  name: "analysis",
  components: {
    bread
  },
  setup() {
    
  },
})
</script>
