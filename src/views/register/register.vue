<template>
  <div>
    <div>
      <el-steps :active="step" finish-status="success" simple style="margin-top: 20px">
        <el-step title="手机号验证"></el-step>
        <el-step title="个人信息填写"></el-step>
        <el-step title="学生信息填写"></el-step>
      </el-steps>
    </div>
    <!--手机号注册-->
    <div v-if="step==0"></div>
    <!-- 个人信息填写 -->
    <div v-if="step==1"></div>
    <!-- 学生信息填写 -->
    <div v-if="step==2"></div>
    <div>
      <el-button @click="lastStep" v-if="step>0">上一步</el-button>
      <el-button @click="nextStep" v-if="step<2">下一步</el-button>
      <el-button v-if="step==2">完成</el-button>
    </div>
  </div>

</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      step: 0
    };
  },
  watch: {},
  computed: {},
  methods: {
    nextStep(){
      if(this.step<3&&this.step>=0){
        this.step++;
      }
    },
    lastStep(){
      if(this.step>0&&this.step<=2){
        this.step--;
      }
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang='' scoped>
</style>