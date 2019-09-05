<template>
  <!-- 账号安全首页 -->
  <div>
    <h1>账号安全</h1>
    <!-- <div style="width:800px;margin:80px auto;">
      <el-divider></el-divider>
    </div> -->
    <el-table :data="tableData" style="width:900px;margin:80px auto;">
      <el-table-column width="350" prop="title"></el-table-column>
      <el-table-column width="450" prop="state"></el-table-column>
      <el-table-column width="100">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)" type="text">
            {{tableData[scope.$index].edit}}</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      tableData: [
        {
          title: '密码',
          state: '已设置',
          edit: '修改密码'
        },
        {
          title: '手机',
          state: '123****8910',
          edit: '更换手机'
        },
        {
          title: '邮箱',
          state: 'exmpale@xx.com',
          edit: '更换邮箱'
        }
      ]
    };
  },
  watch: {},
  computed: {},
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
      switch (index) {
        case 0:
          this.$router.replace('/security/editPassword');
          break;
        case 1:
          this.$router.replace('/security/editPhone');
          break;
        case 2:
          this.$router.replace('/security/editEmail');
          break;
      }
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang='' scoped>
</style>