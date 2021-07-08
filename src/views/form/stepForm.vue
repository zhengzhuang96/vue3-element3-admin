<!--
 * @Author: zhengzhuang
 * @Date: 2021-05-31 09:51:44
 * @LastEditors: zhengzhuang
 * @LastEditTime: 2021-07-08 11:46:25
 * @Description: 分步表单 stepForm
 * @FilePath: /vue3-element3-admin/src/views/form/stepForm.vue
-->
<template>
  <div>
    <bread desText="将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。" />
    <div class="box-container">
      <el-steps :active="active" finish-status="success" :align-center="true">
        <el-step title="填写转账信息"></el-step>
        <el-step title="确认转账信息"></el-step>
        <el-step title="完成"></el-step>
      </el-steps>

      <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
    </div>
    <p>1</p>
    <spark-button>123123123</spark-button>
  </div>
</template>

<script>
import { ref } from 'vue'
import bread from "../../layout/bread.vue";
export default {
  name: "stepForm",
  components: {
    bread
  },
  setup() {
    const active = ref(0)
    const next = () => {
      if (active.value++ > 2) {
        active.value = 0
      }
    }
    return { active, next }
  }
}
</script>

<style scoped>
.box-container {
  background-color: #fff;
  margin: 20px;
  padding: 20px;
}
</style>