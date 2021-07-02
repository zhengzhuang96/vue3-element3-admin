<!--
 * @Author: zhengzhuang
 * @Date: 2021-05-27 17:18:09
 * @LastEditors: zhengzhuang
 * @LastEditTime: 2021-07-02 17:19:06
 * @Description: 面包屑 bread
 * @FilePath: /vue3-element3-admin/src/layout/bread.vue
-->
<template>
  <div class="body-box">
    <el-tag v-for="tag in tags" :key="tag.name" closable :type="tag.type">
      {{tag.name}}
    </el-tag>
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
import { defineComponent, ref, toRaw, reactive, toRefs } from 'vue'
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
    const state = reactive({
      tags: [
        { name: '标签一', type: '' },
        { name: '标签二', type: 'success' },
        { name: '标签三', type: 'info' },
        { name: '标签四', type: 'warning' },
        { name: '标签五', type: 'danger' }
      ]
    })

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
      routeTitle,
      ...toRefs(state)
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