<template>
  <el-menu :default-active="activeIndex" class="navmenu" mode="horizontal" @select="handleSelect">
    <el-submenu index="5" style="float:right">
      <template slot="title">Settings</template>
      <el-menu-item index="5-1"><router-link to="/expertiseCommunity">Fellow Prime</router-link></el-menu-item>
      <el-menu-item index="5-2"><router-link to="/expertiseCommunity">个人信息</router-link></el-menu-item>
      <el-menu-item index="5-3"><router-link to="/expertiseCommunity">账号密码</router-link></el-menu-item>
      <el-menu-item index="5-4"><router-link to="/expertiseCommunity">系统设置</router-link></el-menu-item>
    </el-submenu>
    <el-menu-item index="4" style="float:right"><router-link to="/receivedMessages">Messages</router-link></el-menu-item>
    <el-menu-item index="3" style="float:right"><router-link to="/friendsApproved">Friends</router-link></el-menu-item>
    <el-menu-item index="2" style="float:right"><router-link to="/expertiseCommunity">Expertise Community</router-link></el-menu-item>
    <el-menu-item index="1" style="float:right"><router-link to="/" >Home</router-link></el-menu-item>
  </el-menu>
</template>
<style >
.router-link-active{
  text-decoration-line: none;
  color:unset;
}
</style>
<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>