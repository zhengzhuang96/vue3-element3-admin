<!--
 * @Author: zhengzhuang
 * @Date: 2021-05-27 17:18:09
 * @LastEditors: zhengzhuang
 * @LastEditTime: 2021-05-31 09:39:02
 * @Description: 面包屑 bread
 * @FilePath: /vue3-vite-template/src/layout/bread.vue
-->
<template>
  <div class="body-box">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item v-for="(item, key) in routeBread" :key="key">
        <router-link v-if="item.path !== undefined" :to="item.path">{{ item.title }}</router-link>
        <span v-else>{{ item.title }}</span>
      </el-breadcrumb-item>
    </el-breadcrumb>
    <p>{{ routeTitle }}</p>
    <p class="des">{{ desText }}</p>
  </div>
</template>
<script>
import { defineComponent, ref, toRaw } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: "bread",
  props: {
    desText: {
      type: String
    }
  },
  setup() {
    const route = useRoute()
    const routeBread = ref([])
    const routeTitle = ref('')
    route.matched.filter((item) => {
      if (item.meta.title) {
        const title = item.meta.title;
        const path = item.path;
        routeBread.value.push({
          title: title,
          // path: path
        });
      }
    })

    routeBread.value.unshift({
      title: "首页",
      path: "/"
    });

    routeTitle.value = toRaw(route).meta.value.title

    return {
      routeBread,
      routeTitle
    }
  },
})
</script>

<style scoped>
.body-box {
  padding: 20px;
  background-color: #fff;
}
.body-box p {
  display: flex;
  margin: 0 auto;
  font-size: 20px;
  margin: 20px 0 0px;
  font-weight: 600;
}
.body-box p:last-child {
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
  font-weight: normal;
}
</style>