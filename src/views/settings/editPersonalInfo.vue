<template>
  <div>
    <h1>个人信息</h1>
    <div class="userInfoForm">
      <el-form ref="userInfoForm" v-model="userInfoForm" label-position="right" label-width="90px">
        <el-form-item label="昵称">
          <div style="width:300px">
            <el-input v-model="userInfoForm.nickname" placeholder="请输入昵称" type="text" maxlength="10" show-word-limit>
            </el-input>
          </div>
        </el-form-item>
        <el-form-item label="性别">
          <el-radio-group v-model="userInfoForm.gender" style="margin-left:-600px;">
            <el-radio label="男"></el-radio>
            <el-radio label="女"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="年龄">
          <div style="width:300px">
            <el-input v-model="userInfoForm.age" placeholder="请输入年龄" type="number"></el-input>
          </div>
        </el-form-item>
        <el-form-item label="家乡所在地">
          <el-cascader-panel :options="cityOptions" v-model="userInfoForm.homeOptions" clearable filterable
            @change="handleChange" placeholder="请选择家乡所在地"></el-cascader-panel>
        </el-form-item>
        <el-form-item label="现居地">
          <el-cascader-panel :options="cityOptions" v-model="userInfoForm.currentOptions" clearable filterable
            @change="handleChange" placeholder="请选择现居地"></el-cascader-panel>
        </el-form-item>
        <el-form-item label="在读学位">
          <el-select v-model="userInfoForm.education" placeholder="请选择目前在读的学位" style="margin-left:-503px"
            @change="educationSelect">
            <el-option v-for="item in userInfoForm.educationOptions" :key="item.label" :label="item.label"
              :value="item.value"></el-option>
          </el-select>
        </el-form-item>
        <div v-if="this.userInfoForm.education>=1">
          <el-form-item label="本科院校">
            <el-input v-model="userInfoForm.undergraduate_university" placeholder="请输入本科院校"
              style="width:300px;margin-left:-420px"></el-input>
          </el-form-item>
          <el-form-item label="本科学院">
            <el-input v-model="userInfoForm.undergraduate_institute" placeholder="请输入本科学院"
              style="width:300px;margin-left:-420px"></el-input>
          </el-form-item>
          <el-form-item label="本科专业">
            <el-input v-model="userInfoForm.undergraduate_speciality" placeholder="请输入本科专业"
              style="width:300px;margin-left:-420px"></el-input>
          </el-form-item>
        </div>
        <div v-if="this.userInfoForm.education>=2">
          <el-form-item label="硕士院校">
            <el-input v-model="userInfoForm.graduate_university" placeholder="请输入硕士院校"
              style="width:300px;margin-left:-420px"></el-input>
          </el-form-item>
          <el-form-item label="硕士学院">
            <el-input v-model="userInfoForm.graduate_institute" placeholder="请输入硕士学院"
              style="width:300px;margin-left:-420px"></el-input>
          </el-form-item>
          <el-form-item label="硕士专业">
            <el-input v-model="userInfoForm.graduate_speciality" placeholder="请输入硕士专业"
              style="width:300px;margin-left:-420px"></el-input>
          </el-form-item>
        </div>
        <div v-if="this.userInfoForm.education==3">
          <el-form-item label="博士院校">
            <el-input v-model="userInfoForm.doctor_university" placeholder="请输入博士院校"
              style="width:300px;margin-left:-420px"></el-input>
          </el-form-item>
          <el-form-item label="博士学院">
            <el-input v-model="userInfoForm.doctor_institute" placeholder="请输入博士学院"
              style="width:300px;margin-left:-420px"></el-input>
          </el-form-item>
          <el-form-item label="博士专业">
            <el-input v-model="userInfoForm.doctor_speciality" placeholder="请输入博士专业"
              style="width:300px;margin-left:-420px"></el-input>
          </el-form-item>
        </div>
        <el-form-item label="个人介绍">
            <el-input type="textarea" v-model="userInfoForm.self_introduction" placeholder="介绍下自己吧" 
            style="width:500px;margin-left:-220px" :autosize="{ minRows: 2, maxRows: 4}"></el-input>
          </el-form-item>
      </el-form>
      <div>
          <el-button type="primary" @click="saveInfo">保存</el-button>
      </div>
    </div>

  </div>
  
</template>

<script>
import options from './../../utils/country-data.js';
export default {
  components: {},
  props: {},
  data() {
    return {
      //城市级联数据
      cityOptions: options,
      userInfoForm: {
        nickname: '',
        gender: '',
        age: '',
        self_introduction: '',
        homeOptions: [],
        home_country: '',
        home_province: '',
        home_city: '',
        home_district: '',
        currentOptions: [],
        current_country: '',
        current_province: '',
        current_city: '',
        current_district: '',
        education: '',
        educationOptions: [
          { label: '本科', value: 1 },
          { label: '硕士', value: 2 },
          { label: '博士', value: 3 }
        ],
        undergraduate_university: '',
        undergraduate_institute: '',
        undergraduate_speciality: '',
        graduate_university: '',
        graduate_institute: '',
        graduate_speciality: '',
        doctor_university: '',
        doctor_institute: '',
        doctor_speciality: ''
      }
    };
  },
  watch: {},
  computed: {},
  methods: {
    handleChange(value) {
      console.log(value);
    },
    educationSelect() {
      console.log(this.userInfoForm.education);
    },
    saveInfo(){
        this.$notify({
          title: '成功',
          message: '已经成功更新个人资料',
          type: 'success'
        });
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang='' scoped>
.userInfoForm {
  width: 810px;
  position: relative;
  margin: 50px auto;
  text-align: center;
}
</style>