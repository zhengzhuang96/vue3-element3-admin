<!--
 * @Author: zhengzhuang
 * @Date: 2021-05-27 11:48:57
 * @LastEditors: zhengzhuang
 * @LastEditTime: 2021-07-02 16:25:13
 * @Description: In User Settings Edit
 * @FilePath: /vue3-element3-admin/src/layout/headNav.vue
-->
<template>
  <div class="ant-pro-global-header">
    <header class="head">
      <div class="left-menu-box" @click="setLefMenuState">
        <!-- <i class="el-icon-s-fold"></i> -->
        <i :class="plusOne"></i>
      </div>
      <div>2</div>
    </header>
  </div>
</template>

<script>
import { defineComponent, computed } from "@vue/runtime-core";
export default defineComponent({
  name: "headNav",
  props: {
    isCollapse: {
      type: Boolean,
    }
  },
  setup(props) {
    function setLefMenuState() {
      this.$emit('setMenu');
    }

    const plusOne = computed(() => props.isCollapse ? "el-icon-s-fold rotate" : "el-icon-s-fold")

    return {
      setLefMenuState,
      plusOne
    }
  }
})
</script>

<style>
.ant-pro-global-header {
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 16px 0 0;
  background: #fff;
  box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
}
.head {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
}
.left-menu-box {
  width: 50px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.left-menu-box:hover {
  cursor: pointer;
}
.el-icon-s-fold {
  transition: transform 0.3s ease;
}
.rotate {
  transform: rotateZ(180deg);
}
</style>