<!--
 * @Author: zhengzhuang
 * @Date: 2021-05-27 11:06:21
 * @LastEditors: zhengzhuang
 * @LastEditTime: 2021-05-28 16:42:05
 * @Description: 侧边栏 leftMenu
 * @FilePath: /vue3-vite-template/src/layout/leftMenu.vue
-->
<template>
  <div class="box">
    <div class="head-top-box">
      <h2 class="head-top">Vue3</h2>
    </div>
    <el-menu
      :default-active="defaultActive"
      class="el-menu-vertical-demo"
      background-color="#001529"
      text-color="#fff"
      active-text-color="#fff"
      :router="true"
      :collapse="isCollapse"
      :unique-opened="true"
    >
      <el-submenu
        class="box-submenu"
        v-for="(item, key) in routeBread"
        :index="item.path"
        :key="key"
      >
        <template v-slot:title>
          <i class="el-icon-location"></i>
          <span>{{ item.meta.title }}</span>
        </template>
        <el-menu-item-group>
          <router-link v-for="(items, keys) in item.children" :to="items.path" :key="keys">
            <el-menu-item :index="items.path">{{ items.meta.title }}</el-menu-item>
          </router-link>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import { defineComponent, ref, computed, toRaw } from "vue";
import { useRouter, useRoute } from 'vue-router'

export default defineComponent({
  name: "leftMenu",
  props: {
    isCollapse: {
      type: Boolean,
    }
  },
  setup() {
    const router = useRouter()
    const route = useRoute()
    const routeBread = ref([]);
    routeBread.value = router.options.routes;

    const defaultActive = computed(() => {
      return toRaw(route).fullPath.value
    })

    return {
      routeBread,
      defaultActive
    }
  }
})
</script>

<style>
.box {
  background: #001529;
  box-shadow: 1px 0 4px rgb(0 21 41 / 8%);
  height: 100%;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
  border-right: 0;
}
.el-submenu__title {
  display: flex;
  align-items: center;
}
.el-menu--collapse {
  border-right: 0;
}
.head-top {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 0;
  margin: 0;
  color: #fff;
}
.is-active {
  color: #409eff;
  background-color: #409eff !important;
}
</style>