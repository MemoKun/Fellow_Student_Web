<template>
  <div :style="backgroundStyle">
    <el-row>
      <el-col :span="14" :offset="10">
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
      </el-col>
    </el-row>
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
  margin-top:180px;
  margin-bottom:220px;
}
</style>
<script>
import axios from 'axios';
export default {
  data() {
    return {
      backgroundStyle: {
        backgroundImage:
          "url(" + require("../../assets/largestergjfpuynmi2b0h.jpg") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%"
      },
      baseUrl: "http://39.100.52.175:8080",
      loginForm: {
        account: '',
        password: ''
      },
      userToken: ''
    };
  },
  watch: {},
  computed: {
    urls: {
      get: function() {
        return this.$store.state.urls;
      },
      set: function() {}
    }
  },
  methods: {
    login() {
      console.log('login');
      if (this.loginForm.account === '' || this.loginForm.password === '') {
        this.$message.error('账号或密码不能为空');
      } else {
        if (this.$validatePhoneNum(this.loginForm.account)) {
          //判断账号格式
          console.log('手机号登录');
          this.$post(this.urls.testUrl + '/login', {
            phoneNum: this.loginForm.account,
            password: this.loginForm.password
          }).then(
            res => {
              console.log('success');
              this.userToken = res.data.token;
              console.log(res.data);
              this.$store.commit('changeLogin', userToken);
              this.$message({
                message: '登录成功',
                type: 'success'
              });
            },
            err => {
              console.log('手机号登录失败');
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
        } else if (this.$validateEmail(this.loginForm.account)) {
          console.log('邮箱登录');
          this.$post(this.urls.testUrl + '/login', {
            email: this.loginForm.account,
            password: this.loginForm.password
          }).then(
            res => {
              if (res.data.data.base.status == 200) {
                console.log('success');
                this.userToken = res.data.token;
                console.log(res.data);
                this.$store.commit('changeLogin', userToken);
                this.$message({
                  message: '登录成功',
                  type: 'success'
                });
              }
            },
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
        }
      }
    },
    register() {
      this.$router.replace('/account/register');
    }
  },
  created() {},
  mounted() {}
};
</script>
