<template>
  <div>
    <div>
      <el-steps :active="step" finish-status="success" simple style="margin-top: 20px" >
        <el-step title="手机号验证"></el-step>
        <el-step title="个人信息填写"></el-step>
        <el-step title="学生信息填写"></el-step>
      </el-steps>
    </div>
    <!--手机号注册-->
    <div v-if="step==0" class="phoneForm">
      <el-form ref="phoneForm" v-model="phoneForm" label-position="right" label-width="60px">
        <el-form-item label="手机号">
          <el-input v-model="phoneForm.phone_number" placeholder="请输入手机号" style="width:600px"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="phoneForm.password" placeholder="请输入密码" type="password" style="width:600px" show-password>
          </el-input>
        </el-form-item>
        <el-form-item label="验证码">
          <span>
            <el-input v-model="phoneForm.code" placeholder="请输入收到的短信验证码" style="width:480px;"></el-input>
            <el-button type="primary">获取验证码</el-button>
          </span>
        </el-form-item>
      </el-form>
    </div>
    <!-- 个人信息填写 -->
    <div v-if="step==1" class="userInfoForm">
      <el-form ref="userInfoForm" v-model="userInfoForm" label-position="right" label-width="90px">
        <el-form-item label="昵称">
          <div style="width:300px">
            <el-input v-model="userInfoForm.nickname" placeholder="请输入昵称" type="text" maxlength="10" clearable
              show-word-limit>
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
        <el-form-item label="照片">
          <el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card"
            :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog>
        </el-form-item>
      </el-form>
    </div>
    <!-- 学生信息填写 -->
    <div v-if="step==2" class="stuInfoForm">
      <el-form ref="stuInfoForm" v-model="stuInfoForm" label-position="right" label-width="90px">
        <el-form-item label="学生证照片">
          <div style="width:550px">
            <el-upload list-type="picture" action="https://jsonplaceholder.typicode.com/posts/"
              :on-remove="handleRemove" :on-preview="handlePreview" :file-list="fileList" :limit="1">
              <div style="margin-left:-350px">
                <el-button size="small" type="primary" style="margin-left:-120px">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过5Mb</div>
              </div>
            </el-upload>
          </div>
        </el-form-item>
        <el-form-item label="在读学位">
          <el-select v-model="stuInfoForm.education" placeholder="请选择目前在读的学位" style="margin-left:-393px"
            @change="educationSelect">
            <el-option v-for="item in stuInfoForm.educationOptions" :key="item.label" :label="item.label"
              :value="item.value"></el-option>
          </el-select>
        </el-form-item>
        <div v-if="this.stuInfoForm.education>=1">
          <el-form-item label="本科院校">
            <el-input v-model="stuInfoForm.undergraduate_university" placeholder="请输入本科院校"
              style="width:300px;margin-left:-310px"></el-input>
          </el-form-item>
          <el-form-item label="本科学院">
            <el-input v-model="stuInfoForm.undergraduate_institute" placeholder="请输入本科学院"
              style="width:300px;margin-left:-310px"></el-input>
          </el-form-item>
          <el-form-item label="本科专业">
            <el-input v-model="stuInfoForm.undergraduate_speciality" placeholder="请输入本科专业"
              style="width:300px;margin-left:-310px"></el-input>
          </el-form-item>
        </div>
        <div v-if="this.stuInfoForm.education>=2">
          <el-form-item label="硕士院校">
            <el-input v-model="stuInfoForm.graduate_university" placeholder="请输入硕士院校"
              style="width:300px;margin-left:-310px"></el-input>
          </el-form-item>
          <el-form-item label="硕士学院">
            <el-input v-model="stuInfoForm.graduate_institute" placeholder="请输入硕士学院"
              style="width:300px;margin-left:-310px"></el-input>
          </el-form-item>
          <el-form-item label="硕士专业">
            <el-input v-model="stuInfoForm.graduate_speciality" placeholder="请输入硕士专业"
              style="width:300px;margin-left:-310px"></el-input>
          </el-form-item>
        </div>
        <div v-if="this.stuInfoForm.education==3">
          <el-form-item label="博士院校">
            <el-input v-model="stuInfoForm.doctor_university" placeholder="请输入博士院校"
              style="width:300px;margin-left:-310px"></el-input>
          </el-form-item>
          <el-form-item label="博士学院">
            <el-input v-model="stuInfoForm.doctor_institute" placeholder="请输入博士学院"
              style="width:300px;margin-left:-310px"></el-input>
          </el-form-item>
          <el-form-item label="博士专业">
            <el-input v-model="stuInfoForm.doctor_speciality" placeholder="请输入博士专业"
              style="width:300px;margin-left:-310px"></el-input>
          </el-form-item>
        </div>
      </el-form>
    </div>
    <div>
      <el-button @click="lastStep" v-if="step>0">上一步</el-button>
      <el-button @click="nextStep" v-if="step<2">下一步</el-button>
      <el-button v-if="step==2">完成</el-button>
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
      step: 0,
      //城市级联数据
      cityOptions: options,
      //照片
      dialogImageUrl: '',
      dialogVisible: false,
      //学生证照片
      fileList: [],
      phoneForm: {
        phone_number: '',
        password: '',
        code: ''
      },
      userInfoForm: {
        nickname: '',
        gender: '',
        age: '',
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
        photo: ''
      },
      stuInfoForm: {
        stu_card_image: '',
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
    nextStep() {
      if (this.step < 3 && this.step >= 0) {
        this.step++;
      }
    },
    lastStep() {
      if (this.step > 0 && this.step <= 2) {
        this.step--;
      }
    },
    handleChange(value) {
      console.log(value);
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handlePreview(file) {
      console.log(file);
    },
    educationSelect() {
      console.log(this.stuInfoForm.education);
    }
  },
  created() {},
  mounted() {}
};
</script>
<style>
.phoneForm {
  width: 700px;
  position: relative;
  margin: 100px auto;
  text-align: center;
}
.userInfoForm {
  width: 810px;
  position: relative;
  margin: 100px auto;
  text-align: center;
}
.stuInfoForm {
  width: 700px;
  position: relative;
  margin: 100px auto;
  text-align: center;
}
/* .el-upload--picture-card{
margin-left: -574px
} */
/* .el-upload-list__item {
  margin-left: 100px;
} */
</style>