<!--
 * @Author: zhengzhuang
 * @Date: 2021-05-28 15:02:05
 * @LastEditors: zhengzhuang
 * @LastEditTime: 2021-05-31 09:02:01
 * @Description: 基础表单 basicForm
 * @FilePath: /vue3-vite-template/src/views/form/basicForm.vue
-->
<template>
  <div>
    <bread desText="表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。" />
    <div class="box-container">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="form"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="活动名称" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="活动区域" prop="region">
          <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="即时配送" prop="delivery">
          <el-switch v-model="ruleForm.delivery"></el-switch>
        </el-form-item>
        <el-form-item label="活动性质" prop="type">
          <el-checkbox-group v-model="ruleForm.type">
            <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
            <el-checkbox label="地推活动" name="type"></el-checkbox>
            <el-checkbox label="线下主题活动" name="type"></el-checkbox>
            <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="特殊资源" prop="resource">
          <el-radio-group v-model="ruleForm.resource">
            <el-radio label="线上品牌商赞助"></el-radio>
            <el-radio label="线下场地免费"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="活动形式" prop="desc">
          <el-input type="textarea" v-model="ruleForm.desc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { ref, reactive, toRefs } from 'vue'
import bread from "../../layout/bread.vue";
export default {
  name: "basicForm",
  components: {
    bread
  },
  setup() {
    const form = ref(null)
    const ruleForm = reactive({
      ruleForm: {
        name: '',
        region: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    })
    const rules = reactive({
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        region: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ],
        type: [
          {
            type: 'array',
            required: true,
            message: '请至少选择一个活动性质',
            trigger: 'change'
          }
        ],
        resource: [
          { required: true, message: '请选择活动资源', trigger: 'change' }
        ],
        desc: [{ required: true, message: '请填写活动形式', trigger: 'blur' }]
      }
    })
    function submitForm() {
      form.value.validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
    function resetForm() {
      form.value.resetFields()
    }

    return {
      form,
      ...toRefs(ruleForm),
      ...toRefs(rules),
      submitForm,
      resetForm
    }
  }
}
</script>

<style lang="less" scoped>
.box-container {
  background-color: #fff;
  margin: 20px;
  padding: 20px;
}

::v-deep(.el-form-item) {
  display: flex;
  flex-direction: row;
  justify-content: center;
  justify-content: flex-start;
  width: 100%;
}

::v-deep(.el-form-item:last-child) {
  justify-content: center;
}

::v-deep(.el-form-item__label) {
  flex: 0 0 29.16666667%;
  text-align: right;
}

::v-deep(.child) { 
  margin: 0 !important;
}

</style>