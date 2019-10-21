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
  margin-top: 180px;
  margin-bottom: 220px;
}
</style>
<script>
import loginAPI from "../../api/login";
import axios from "axios";
export default {
  inject: ["reload"],
  data() {
    return {
      backgroundStyle: {
        backgroundImage:
          "url(" + require("../../assets/largestergjfpuynmi2b0h.jpg") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%"
      },
      loginForm: {
        account: "",
        password: ""
      },
      userToken: ""
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
    async login() {
      console.log("login");
      if (this.loginForm.account === "" || this.loginForm.password === "") {
        this.$message.error("账号或密码不能为空");
      } else {
        if (this.$validatePhoneNum(this.loginForm.account)) {
          //判断账号格式
          console.log("手机号登录");
          let param = new URLSearchParams();
          param.append("phoneNum", this.loginForm.account);
          param.append("password", this.loginForm.password);

          var data = await loginAPI.login(param);
          if (data != null) {
            this.userToken = data.token;
            this.$store.commit("changeLogin", this.userToken);
            this.$message.success("欢迎回来，薛俊皓6");
            this.reload();
            this.$router.push("/");
            console.log("跳转至主页");
          }
        } else if (this.$validateEmail(this.loginForm.account)) {
          console.log("邮箱登录");
          let param = new URLSearchParams();
          param.append("email", this.loginForm.account);
          param.append("password", this.loginForm.password);

          var data = await loginAPI.login(param);
          if (data != null) {
            this.userToken = data.token;
            this.$store.commit("changeLogin", this.userToken);
            this.$message.success("欢迎回来，薛俊皓6");
            this.reload();
            this.$router.push("/");
            console.log("跳转至主页");
          }
        }
      }
    },
    register() {
      this.$router.push("/account/register");
    }
  }
};
</script>
