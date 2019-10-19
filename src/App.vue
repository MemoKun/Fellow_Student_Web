<template>
  <div id="app" v-if="isRouterAlive">
    <el-container>
      <el-header>
        <router-view name="header" />
      </el-header>
      <el-main>
        <div>
          <router-view />
        </div>
      </el-main>
      <el-footer>
        <router-view name="footer" />
      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "App",
  provide(){//需要的地方用inject:['reload']即可用this.reload()调用
    return{
      reload:this.reload
    }
  },
  data(){
    return{
      isRouterAlive:true
    }
  },
  methods:{
    reload(){
      this.isRouterAlive=false
      this.$nextTick(function(){
        this.isRouterAlive=true;
      })
    }
  }
};
</script>

<style>
#app {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
