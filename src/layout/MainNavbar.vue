<template>
  <el-menu :default-active="activeIndex" class="navmenu" mode="horizontal" @select="handleSelect">
    <el-menu-item index="/">
      <router-link to="/" class="router-link-active">主页</router-link>
    </el-menu-item>
    <el-menu-item index="/friendsApproved">
      <router-link to="/friendsApproved" class="router-link-active">朋友</router-link>
    </el-menu-item>
    <el-menu-item index="/receivedMessages">
      <router-link to="/receivedMessages" class="router-link-active">来信</router-link>
    </el-menu-item>
    <el-menu-item index="/expertiseCommunity">
      <router-link to="/expertiseCommunity" class="router-link-active">专业社区</router-link>
    </el-menu-item>
    <el-menu-item index="/searchFriends">
      <router-link to="/searchFriends" class="router-link-active">
        <el-button type="primary">寻找朋友</el-button>
      </router-link>
    </el-menu-item>

    <!--右侧-->
    <el-submenu index="/settings" style="float:right">
      <template slot="title">
        <router-link to="/editSystemSetting" class="router-link-active">设置</router-link>
      </template>
      <el-menu-item index="/vipBilling">
        <router-link to="/vipBilling" class="router-link-active">Prime会员</router-link>
      </el-menu-item>
      <el-menu-item index="/editPersonalInfo">
        <router-link to="/editPersonalInfo" class="router-link-active">个人信息</router-link>
      </el-menu-item>
      <el-menu-item index="/security">
        <router-link to="/security" class="router-link-active">账号安全</router-link>
      </el-menu-item>
      <el-menu-item index="/editSystemSetting">
        <router-link to="/editSystemSetting" class="router-link-active">系统设置</router-link>
      </el-menu-item>
    </el-submenu>
    <el-menu-item index="/account/register" style="float:right">
      <router-link to="/account/register" class="router-link-active">Register</router-link>
    </el-menu-item>
    <el-menu-item index="/account/login" style="float:right">
      <router-link to="/account/login" class="router-link-active">Login</router-link>
    </el-menu-item>
  </el-menu>
</template>
<style >
.router-link-active {
  text-decoration-line: none;
  color: unset;
}
</style>
<script>
export default {
  data() {
    return {
      activeIndex: "/",
      activeIndex2: "/"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      //防止点到按钮但没点到链接导致不跳转
      console.log(key, keyPath);
      switch (key) {
        case "/":
          this.$router.replace("/");
          break;
        case "/friendsApproved":
          this.$router.replace("/friendsApproved");
          break;
        case "/receivedMessages":
          this.$router.replace("/receivedMessages");
          break;
        case "/expertiseCommunity":
          this.$router.replace("/expertiseCommunity");
          break;
        case "/searchFriends":
          this.$router.replace("/searchFriends");
          break;
        case "/account/login":
          this.$router.replace("/account/login");
          break;
        case "/account/register":
          this.$router.replace("/account/register");
          break;
        case "/settings":
          this.$router.replace("/settings");
          break;
        case "/editPersonalInfo":
          this.$router.replace("/editPersonalInfo");
          break;
        case "/security":
          this.$router.replace("/security");
          break;
        case "/editSystemSetting":
          this.$router.replace("/editSystemSetting");
          break;
      }
    },
    //刷新后获取导航栏index
    getIndex() {
      let currentPath = window.location.href; //获取整个网址
      let currentUrl = currentPath.split("#")[1]; //切割获得路由
      this.activeIndex = "/" + currentUrl.split("/")[1]; //获得类似于“/xxx"的index
    }
  },
  created() {
    this.getIndex();
  }
};
</script>