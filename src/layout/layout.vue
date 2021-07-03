<!--
 * @Author: zhengzhuang
 * @Date: 2021-05-27 10:59:17
 * @LastEditors: zhengzhuang
 * @LastEditTime: 2021-07-03 10:17:20
 * @Description: In User Settings Edit
 * @FilePath: /vue3-element3-admin/src/layout/layout.vue
-->
<template>
  <div class="body-box">
    <el-container>
      <el-aside>
        <leftMenu :isCollapse="isCollapse" />
      </el-aside>
      <el-container>
        <el-header>
          <headNav @set-menu="setMenu" :isCollapse="isCollapse" />
        </el-header>
        <el-main>
          <content />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue'
import leftMenu from "./leftMenu.vue";
import headNav from "./headNav.vue";
import content from "./content.vue";

export default defineComponent({
  name: "layout",
  components: {
    leftMenu,
    headNav,
    content
  },
  setup() {
    const MenuRef = ref();
    const isCollapse = ref(false);  // 菜单栏展开状态

    const setMenu = () => {
      isCollapse.value ? isCollapse.value = false : isCollapse.value = true;
    };

    return {
      isCollapse,
      setMenu,
      MenuRef
    }
  },
})
</script>

<style scoped>
.body-box {
  height: 100%;
}
.el-container {
  height: 100%;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  padding: 0;
  height: auto!important;
}

.el-aside {
  background-color: #fff;
  color: #333;
  text-align: center;
  width: auto !important;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  padding: 0;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>