<template>
<div>
  <!-- 修改邮箱 -->
  <div >
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/security' }">账号安全</el-breadcrumb-item>
      <el-breadcrumb-item >更改邮箱</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card class="checkcard">
      <h1>手机验证</h1>
      <p>若绑定的手机可用，可向已绑定的手机发送验证码以修改密码</p>
      <el-button @click="phoneCheckForEmail">立即验证</el-button>
    </el-card>
    <el-card class="checkcard">
      <h1>邮箱验证</h1>
      <p>若绑定的邮箱可用，可向已绑定的邮箱发送验证码以修改密码</p>
      <el-button @click="emailCheckForEmail">立即验证</el-button>
    </el-card>
    <el-card class="checkcard">
      <h1>以上方式均无法使用</h1>
      <p>若您绑定的手机、邮箱均无法使用，请联系我们</p>
      <el-button>联系我们</el-button>
    </el-card>
  </div>
    
</div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {
    phoneCheckForEmail(){
      this.$router.replace('/security/editEmail/phone');
    },
    emailCheckForEmail(){
      this.$router.replace('/security/editEmail/email');
    },
    help(){}
  },
  created() {},
  mounted() {}
};

</script>
<style lang='' scoped>
.checkcard{
  width: 800px;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-right: auto;
  margin-left: auto;
}
</style>