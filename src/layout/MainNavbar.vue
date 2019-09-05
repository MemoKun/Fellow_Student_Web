<template>
  <el-menu :default-active="activeIndex" class="navmenu" mode="horizontal" @select="handleSelect">
    <el-submenu index="6" style="float:right">
      <template slot="title">Settings</template>
      <el-menu-item index="6-1">
        <router-link to="/expertiseCommunity" class="router-link-active">Fellow Prime</router-link>
      </el-menu-item>
      <el-menu-item index="6-2">
        <router-link to="/editPersonalInfo" class="router-link-active">个人信息</router-link>
      </el-menu-item>
      <el-menu-item index="6-3">
        <router-link to="/security" class="router-link-active">账号安全</router-link>
      </el-menu-item>
      <el-menu-item index="6-4">
        <router-link to="/editSystemSetting" class="router-link-active">系统设置</router-link>
      </el-menu-item>
    </el-submenu>
    <el-menu-item index="5" style="float:right">
      <router-link to="/receivedMessages" class="router-link-active">Messages</router-link>
    </el-menu-item>
    <el-menu-item index="4" style="float:right">
      <router-link to="/friendsApproved" class="router-link-active">Friends</router-link>
    </el-menu-item>
    <el-menu-item index="3" style="float:right">
      <router-link to="/expertiseCommunity" class="router-link-active">Expertise Community</router-link>
    </el-menu-item>
    <el-menu-item index="2" style="float:right">
      <router-link to="/login" class="router-link-active">Login</router-link>
    </el-menu-item>
    <el-menu-item index="1" style="float:right">
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
      activeIndex: '1',
      activeIndex2: '1'
    };
  },
  methods: {
    handleSelect(key, keyPath) {//防止点到按钮但没点到链接导致不跳转
      console.log(key, keyPath);
      switch (key) {
        case '1':
          this.$router.replace('/');
          break;
        case '2':
          this.$router.replace('/login');
          break;
        case '3':
          this.$router.replace('/expertiseCommunity');
          break;
        case '4':
          this.$router.replace('/friendsApproved');
          break;
        case '5':
          this.$router.replace('/receivedMessages');
          break;
        case '6-1':
          this.$router.replace('/expertiseCommunity');
          break;
        case '6-2':
          this.$router.replace('/editPersonalInfo');
          break;
        case '6-3':
          this.$router.replace('/security');
          break;
        case '6-4':
          this.$router.replace('/editSystemSetting');
          break;
      }
    }
  }
};
</script>