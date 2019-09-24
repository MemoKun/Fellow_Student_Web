<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/security' }">账号安全</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/security/editPassword' }">设置密码</el-breadcrumb-item>
      <el-breadcrumb-item>邮箱验证</el-breadcrumb-item>
    </el-breadcrumb>
    <div>
      <el-steps :active="step" finish-status="success" simple style="margin-top: 20px">
        <el-step title="邮箱验证"></el-step>
        <el-step title="修改密码"></el-step>
        <el-step title="修改成功"></el-step>
      </el-steps>
    </div>
    <!-- 邮箱验证 -->
    <div v-if="step==0" class="emailForm">
      <el-form ref="emailForm" v-model="emailForm">
        <el-form-item>
          <el-input disabled v-model="emailForm.email">
            <template slot="prepend">邮箱</template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="emailForm.code">
            <el-button slot="append">获取验证码</el-button>
          </el-input>
        </el-form-item>
      </el-form>
    </div>
    <!-- 修改密码 -->
    <div v-if="step==1" class="emailForm">
      <el-form ref="passwordForm" v-model="passwordForm">
        <el-form-item>
          <el-input v-model="passwordForm.oldPassword">
            <template slot="prepend">原来密码</template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="passwordForm.newPassword">
            <template slot="prepend">新的密码</template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="passwordForm.repeatedPassword">
            <template slot="prepend">确认密码</template>
          </el-input>
        </el-form-item>
      </el-form>
    </div>
    <!-- 修改成功 -->
    <div v-if="step==2">
      <el-button @click="goBack">返回至账号安全</el-button>
    </div>
    <div>
      <el-button v-if="step<1" @click="nextStep">下一步</el-button>
      <el-button v-if="step==1" @click="finish">完成</el-button>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      step: 0,
      emailForm: {
        email: '',
        code: ''
      },
      passwordForm: {
        oldPassword: '',
        newPassword: '',
        repeatedPassword: ''
      }
    };
  },
  watch: {},
  computed: {},
  methods: {
    nextStep() {
      if (this.step < 2 && this.step >= 0) {
        this.step++;
      }
    },
    finish() {
      this.step = 2;
    },
    goBack(){
      this.$router.replace('/security');
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang='' scoped>
.emailForm {
  width: 500px;
  position: relative;
  margin: 100px auto;
  text-align: center;
}
</style>