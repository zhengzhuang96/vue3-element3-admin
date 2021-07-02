<!--
 * @Author: zhengzhuang
 * @Date: 2021-05-27 10:07:02
 * @LastEditors: zhengzhuang
 * @LastEditTime: 2021-05-28 16:39:26
 * @Description: 首页/工作台  index
 * @FilePath: /vue3-vite-template/src/views/dashboard/workplace.vue
-->
<template>
  <div class="body-box">
    <bread />
    <el-row :gutter="24" class="head-box">
      <el-col :span="16">
        <div class="grid-content">
          <div class="grid-content-box">
            <div class="headImg"></div>
          </div>
          <div class="grid-content-box">
            <p>早安，开发者，祝你开心每一天</p>
            <p>交互专家 |某某某事业群－某某平台部－某某技术部－UED</p>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content head-top-list">
          <div class="top-list">
            <span>页面数</span>
            <span>56</span>
          </div>
          <div class="top-list">
            <span>访问数</span>
            <span>1000</span>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
import bread from "../../layout/bread.vue";

export default defineComponent({
  name: "workplace",
  components: {
    bread
  },
  setup() {
  },
})
</script>

<style lang="less" scoped>
.el-row {
  &:last-child {
    margin-bottom: 0;
    // padding: 0;
  }
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
  text-align: left;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}
.grid-content-box:last-child {
  margin-left: 30px;
}
.grid-content p:first-child {
  margin-bottom: 12px;
  color: rgba(0, 0, 0, 0.85);
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
}
.grid-content p:last-child {
  color: rgba(0, 0, 0, 0.45);
  font-size: 14px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.head-box {
  background-color: #fff;
  display: flex;
  align-items: center;
  padding: 0 20px 20px;
  margin: 0!important;
}
.headImg {
  width: 80px;
  height: 80px;
  background-color: cadetblue;
  border-radius: 50%;
  overflow: hidden;
}
.head-top-list {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  .top-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
  }
}
</style>