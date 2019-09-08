<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/security' }">账号安全</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/security/editPassword' }">设置密码</el-breadcrumb-item>
      <el-breadcrumb-item>手机验证</el-breadcrumb-item>
    </el-breadcrumb>
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
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang='' scoped>
</style>