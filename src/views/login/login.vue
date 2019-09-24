<template>
  <div class="loginCard">
    <el-card class="box-card">
      <div slot="header">
        <h1>登录</h1>
      </div>
      <div>
        <el-form ref="loginForm" v-model="loginForm" label-width="40px">
          <el-row type="flex" justify="center">
            <el-col :span="60">
              <el-form-item label="账号">
                <el-input v-model="loginForm.account" placeholder="请输入手机号或邮箱"></el-input>
              </el-form-item>
              <el-form-item label="密码">
                <el-input type="password" v-model="loginForm.password" placeholder="请输入密码"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-button type="primary" @click="login">登录</el-button>
          <el-button @click="register">注册</el-button>
        </el-form>
      </div>
    </el-card>

  </div>
</template>
<style scoped>
.box-card {
  width: 480px;
}
.loginCard {
  display: flex;
  justify-content: center;
  /* margin: 150px; */
  padding: 100px;
}
</style>
<script>
import axios from 'axios';
export default {
  data() {
    return {
      baseUrl: 'http://39.100.52.175:8080/swagger-ui.html',
      loginForm: {
        account: '',
        password: ''
      }
    };
  },
  watch: {},
  computed: {},
  methods: {
    login() {
      this.$post(this.baseUrl + '/login', {
        email: this.loginForm.account,
        phoneNum: this.loginForm.account,
        password: this.loginForm.password
      }).then(
        res => {},
        err => {
          if (err.response) {
            let arr = err.response.data.errors;
            let arr1 = [];
            for (let i in arr) {
              arr1.push(arr[i]);
            }
            this.$message.error(arr1.join(','));
          }
        }
      );
    },
    register() {
      this.$router.replace('/account/register');
    }
  },
  created() {},
  mounted() {}
};
</script>
