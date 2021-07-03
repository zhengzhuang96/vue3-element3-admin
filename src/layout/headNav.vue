<!--
 * @Author: zhengzhuang
 * @Date: 2021-05-27 11:48:57
 * @LastEditors: zhengzhuang
 * @LastEditTime: 2021-07-03 17:54:55
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
    <div class="tag-group">
      <el-scrollbar class="page-component__scroll">
        <el-tag
          v-for="(tag, index) in tags"
          :key="tag"
          :closable="index != 0 ? true : false"
          :type="tag.type"
          @click="setTages(tag)"
          @close="handleClose(tag)"
        >{{ tag.name }}</el-tag>
      </el-scrollbar>
    </div>
  </div>
</template>

<script>
import { defineComponent, computed, toRefs, reactive, watch } from "@vue/runtime-core";
import { useRoute, useRouter } from "vue-router";
export default defineComponent({
  name: "headNav",
  props: {
    isCollapse: {
      type: Boolean,
    }
  },
  emits: ["set-menu"],
  setup(props, context) {
    const route = useRoute();
    const router = useRouter();

    const state = reactive({
      tags: [],
    })

    state.tags.push({ name: router.currentRoute.value.meta.title, path: router.currentRoute.value.path, type: '' })

    const plusOne = computed(() => props.isCollapse ? "el-icon-s-fold rotate" : "el-icon-s-fold")

    watch(() => route.path, () => {
      for (let i = 0; i < state.tags.length; i++) {
        state.tags[i].type = 'info'
        if (route.path == state.tags[i].path) {
          state.tags[i].type = ''
        }
      }
      const isExist = state.tags.some(item => {
        return item.path === route.path
      })
      if (!isExist) {
        state.tags.push({ name: router.currentRoute.value.meta.title, path: router.currentRoute.value.path, type: '' })
      }
    });

    const handleClose = tag => {
      if (state.tags.length !== 1) {
        state.tags.splice(state.tags.indexOf(tag), 1)
        if (tag.type == '') {
          router.push({ path: state.tags[state.tags.length - 1].path })
        }
        state.tags[state.tags.length - 1].type = ''
      } else {
        router.push({ path: '/dashboard/index' })
      }
    }

    const setLefMenuState = () => {
      context.emit('set-menu');
    };

    const setTages = params => {
      router.push({ path: params.path })
    };

    return {
      plusOne,
      ...toRefs(state),
      handleClose,
      setLefMenuState,
      setTages
    }
  }
})
</script>

<style lang="less" scoped>
.ant-pro-global-header {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding: 0 16px 0 0;
  background: #fff;
  box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
  align-items: flex-start;
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
.tag-group {
  float: left;
  // display: flex;
  // flex-direction: row;
  // overflow-x: scroll;
  // overflow-y: hidden;
  white-space: nowrap;
  .el-tag--small {
    margin: 5px 5px;
  }
}
.page-component__scroll {
  width: 100%;
}
.page-component__scroll .el-scrollbar__wrap {
  overflow-x: auto;
}
.el-tag--small:hover {
  cursor: pointer;
}
</style>