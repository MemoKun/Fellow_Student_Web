<template>
<div class="login">
    <el-form ref="loginForm" v-model="loginForm" label-width="80px">
        <el-form-item label="账号"></el-form-item>
    </el-form>
</div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
        loginForm:{
            account:"",
            password:"",
        },
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};

<style lang='' scoped>

</style>