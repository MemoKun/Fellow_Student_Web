<template>
  <el-menu
    :default-active="activeIndex"
    class="navmenu"
    mode="horizontal"
    @select="handleSelect"
    background-color="#F6C04E"
  >
    <el-submenu index="6" style="float:right">
      <template slot="title">Settings</template>
      <el-menu-item index="/vipBilling">
        <router-link to="/vipBilling" class="router-link-active">Fellow Prime</router-link>
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
    <el-menu-item index="/receivedMessages" style="float:right">
      <router-link to="/receivedMessages" class="router-link-active">Messages</router-link>
    </el-menu-item>
    <el-menu-item index="/friendsApproved" style="float:right">
      <router-link to="/friendsApproved" class="router-link-active">Friends</router-link>
    </el-menu-item>
    <el-menu-item index="/expertiseCommunity" style="float:right">
      <router-link to="/expertiseCommunity" class="router-link-active">Expertise Community</router-link>
    </el-menu-item>
    <el-menu-item index="/account" style="float:right">
      <router-link to="/account/login" class="router-link-active">Login</router-link>
    </el-menu-item>
    <el-menu-item index="/" style="float:right">
      <router-link to="/" class="router-link-active">Home</router-link>
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
        case "/account":
          this.$router.replace("/account/login");
          break;
        case "/expertiseCommunity":
          this.$router.replace("/expertiseCommunity");
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