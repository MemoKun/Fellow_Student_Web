<template>
  <div>
    <!-- 选择手机或者邮箱验证 -->
    <div v-if="!typeSelected">
      <el-row>
        <el-col :span="8">
          <el-image style="width: 100%; height: 100%" :src="background" fit="fit"></el-image>
        </el-col>
        <el-col :span="11">
          <div style="margin-top:150px;height:500px;margin-left:180px">
            <el-row>
              <div style="float:left">
                <span class="title">欢迎注册Fellow</span>
              </div>
              <br />
            </el-row>
            <el-row>
              <div>
                <span class="slogan">我的故事，娓娓道来。</span>
                <span>
                  <el-link type="primary" class="contect">联系我们</el-link>
                </span>
              </div>
            </el-row>
            <el-row>
              <div class="button-group">
                <el-button @click="registerByPhone" class="selecteButton" type="primary">
                  <i class="el-icon-mobile-phone"></i>
                  <br />
                  <div style="font-size:10px;">手机号注册</div>
                </el-button>
                <el-button @click="registerByEmail" class="selecteButton">
                  <i class="el-icon-message"></i>
                  <br />
                  <div style="font-size:10px;">邮箱注册</div>
                </el-button>
              </div>
            </el-row>
            <el-row>
              <div class="agreement">
                <el-checkbox v-model="checked">
                  <el-link>我已阅读并同意相关服务条款和隐私政策</el-link>
                </el-checkbox>
              </div>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- 选择手机或邮箱验证后 -->
    <div v-else style="margin-bottom:100px">
      <div>
        <el-steps :active="step" finish-status="success" simple style="margin-top: 20px">
          <el-step :title="accountType+'验证'"></el-step>
          <el-step title="个人信息填写"></el-step>
          <el-step title="学生信息填写"></el-step>
        </el-steps>
      </div>
      <!--注册-->
      <div v-if="step==0" class="accountForm">
        <el-form ref="accountForm" v-model="accountForm" label-position="right" label-width="60px">
          <el-form-item :label="accountType">
            <el-input
              v-model="accountForm.account"
              :placeholder="'请输入'+accountType"
              style="width:600px"
            ></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input
              v-model="accountForm.password"
              placeholder="请输入密码"
              type="password"
              style="width:600px"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item label="验证码">
            <span>
              <el-input v-model="accountForm.code" placeholder="请输入收到的验证码" style="width:600px;">
                <el-button
                  slot="append"
                  type="primary"
                  @click="getCode"
                  :disabled="btnDisabled"
                >{{btntext}}</el-button>
              </el-input>
            </span>
          </el-form-item>
        </el-form>
      </div>
      <!-- 个人信息填写 -->
      <div v-if="step==1" class="userInfoForm">
        <el-form
          ref="userInfoForm"
          v-model="userInfoForm"
          label-position="right"
          label-width="90px"
        >
          <el-form-item label="昵称">
            <div style="width:300px">
              <el-input
                v-model="userInfoForm.nickname"
                placeholder="请输入昵称"
                type="text"
                maxlength="10"
                clearable
                show-word-limit
              ></el-input>
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
            <el-cascader-panel
              :options="cityOptions"
              v-model="userInfoForm.homeOptions"
              clearable
              filterable
              @change="handleChange"
              placeholder="请选择家乡所在地"
            ></el-cascader-panel>
          </el-form-item>
          <el-form-item label="现居地">
            <el-cascader-panel
              :options="cityOptions"
              v-model="userInfoForm.currentOptions"
              clearable
              filterable
              @change="handleChange"
              placeholder="请选择现居地"
            ></el-cascader-panel>
          </el-form-item>
          <el-form-item label="照片">
            <el-upload
              action="https://jsonplaceholder.typicode.com/posts/"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove"
            >
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt />
            </el-dialog>
          </el-form-item>
        </el-form>
      </div>
      <!-- 学生信息填写 -->
      <div v-if="step==2" class="stuInfoForm">
        <el-form ref="stuInfoForm" v-model="stuInfoForm" label-position="right" label-width="90px">
          <el-form-item label="学生证照片">
            <div style="width:550px">
              <el-upload
                list-type="picture"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-remove="handleRemove"
                :on-preview="handlePreview"
                :file-list="fileList"
                :limit="1"
              >
                <div style="margin-left:-350px">
                  <el-button size="small" type="primary" style="margin-left:-120px">点击上传</el-button>
                  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过5Mb</div>
                </div>
              </el-upload>
            </div>
          </el-form-item>
          <el-form-item label="在读学位">
            <el-select
              v-model="stuInfoForm.education"
              placeholder="请选择目前在读的学位"
              style="margin-left:-393px"
              @change="educationSelect"
            >
              <el-option
                v-for="item in stuInfoForm.educationOptions"
                :key="item.label"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <div v-if="this.stuInfoForm.education>=1">
            <el-form-item label="本科院校">
              <el-input
                v-model="stuInfoForm.undergraduate_university"
                placeholder="请输入本科院校"
                style="width:300px;margin-left:-310px"
              ></el-input>
            </el-form-item>
            <el-form-item label="本科学院">
              <el-input
                v-model="stuInfoForm.undergraduate_institute"
                placeholder="请输入本科学院"
                style="width:300px;margin-left:-310px"
              ></el-input>
            </el-form-item>
            <el-form-item label="本科专业">
              <el-input
                v-model="stuInfoForm.undergraduate_speciality"
                placeholder="请输入本科专业"
                style="width:300px;margin-left:-310px"
              ></el-input>
            </el-form-item>
          </div>
          <div v-if="this.stuInfoForm.education>=2">
            <el-form-item label="硕士院校">
              <el-input
                v-model="stuInfoForm.graduate_university"
                placeholder="请输入硕士院校"
                style="width:300px;margin-left:-310px"
              ></el-input>
            </el-form-item>
            <el-form-item label="硕士学院">
              <el-input
                v-model="stuInfoForm.graduate_institute"
                placeholder="请输入硕士学院"
                style="width:300px;margin-left:-310px"
              ></el-input>
            </el-form-item>
            <el-form-item label="硕士专业">
              <el-input
                v-model="stuInfoForm.graduate_speciality"
                placeholder="请输入硕士专业"
                style="width:300px;margin-left:-310px"
              ></el-input>
            </el-form-item>
          </div>
          <div v-if="this.stuInfoForm.education==3">
            <el-form-item label="博士院校">
              <el-input
                v-model="stuInfoForm.doctor_university"
                placeholder="请输入博士院校"
                style="width:300px;margin-left:-310px"
              ></el-input>
            </el-form-item>
            <el-form-item label="博士学院">
              <el-input
                v-model="stuInfoForm.doctor_institute"
                placeholder="请输入博士学院"
                style="width:300px;margin-left:-310px"
              ></el-input>
            </el-form-item>
            <el-form-item label="博士专业">
              <el-input
                v-model="stuInfoForm.doctor_speciality"
                placeholder="请输入博士专业"
                style="width:300px;margin-left:-310px"
              ></el-input>
            </el-form-item>
          </div>
        </el-form>
      </div>
      <div>
        <el-button @click="goBack" v-if="step==0">返回</el-button>
        <el-button @click="lastStep" v-if="step>1">上一步</el-button>
        <el-button @click="nextStep" v-if="step<2">下一步</el-button>
        <el-button v-if="step==2">完成</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import options from "./../../utils/country-data.js";
import registerAPI from "../../api/register"
export default {
  components: {},
  props: {},
  data() {
    return {
      checked: true,
      //获取验证码后禁用按钮
      btntext: "获取验证码",
      btnDisabled: false,
      registerDisabeledTime: 0,
      backgroundStyle: {
        backgroundImage:
          "url(" + require("../../assets/largestk8nvmsatrcy0eb4.jpg") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%"
      },
      background: require("../../assets/501298720.jpg"),
      accountType: "", //手机号或邮箱
      typeSelected: false, //是否选择账号类型
      step: -1,
      //暂时用于表示是否通过验证码验证
      isCodeValidated: false,
      //城市级联数据
      cityOptions: options,
      //照片
      dialogImageUrl: "",
      dialogVisible: false,
      //学生证照片
      fileList: [],
      accountForm: {
        account: "",
        password: "",
        code: ""
      },
      userInfoForm: {
        nickname: "",
        gender: "",
        age: "",
        homeOptions: [],
        home_country: "",
        home_province: "",
        home_city: "",
        home_district: "",
        currentOptions: [],
        current_country: "",
        current_province: "",
        current_city: "",
        current_district: "",
        photo: ""
      },
      stuInfoForm: {
        stu_card_image: "",
        education: "",
        educationOptions: [
          { label: "本科", value: 1 },
          { label: "硕士", value: 2 },
          { label: "博士", value: 3 }
        ],
        undergraduate_university: "",
        undergraduate_institute: "",
        undergraduate_speciality: "",
        graduate_university: "",
        graduate_institute: "",
        graduate_speciality: "",
        doctor_university: "",
        doctor_institute: "",
        doctor_speciality: ""
      }
    };
  },
  watch: {},
  computed: {
    urls: {
      get: function() {
        return this.$store.state.urls;
      },
      set: function() {}
    }
  },
  methods: {
    registerByPhone() {
      if (this.checked) {
        this.accountType = "手机号";
        this.step = 0;
        this.typeSelected = true;
        this.timer();
      } else {
        this.$message({
          message: "请阅读相关服务条款和隐私政策",
          type: "warning"
        });
      }
    },
    registerByEmail() {
      if (this.checked) {
        this.accountType = "邮箱";
        this.step = 0;
        this.typeSelected = true;
        this.timer();
      } else {
        this.$message({
          message: "请阅读相关服务条款和隐私政策",
          type: "warning"
        });
      }
    },
    goBack() {
      //返回上一步
      this.accountType = "";
      this.step = -1;
      this.typeSelected = false;
    },
    async nextStep() {
      //步骤跳转兼表单提交
      if (this.step == 0) {
        //账号注册
        if (
          this.accountForm.account === "" ||
          this.accountForm.password === ""
        ) {
          this.$message.error("账号或密码不能为空");
        } else {
          if (this.accountType == "手机号") {
            if (this.isCodeValidated) {
              console.log("手机号注册");
              const json = {
                phoneNum: this.accountForm.account,
                password: this.accountForm.password
              };
              await registerAPI.register(json)
              // this.$post(this.urls.testUrl + "/register/ByPhoneNum", json).then(
              //   res => {
              //     this.step++;
              //     this.$message({
              //       message: "注册成功",
              //       type: "success"
              //     });
              //   },
              //   err => {
              //     if (err.response) {
              //       let arr = err.response.data.errors;
              //       let arr1 = [];
              //       for (let i in arr) {
              //         arr1.push(arr[i]);
              //       }
              //       this.$message.error(arr1.join(","));
              //     }
              //   }
              // );
            } else {
              this.$message({
                message: "请输入验证码",
                type: "warning"
              });
            }
          } else if (this.accountType == "邮箱") {
            if (this.isCodeValidated) {
              console.log("邮箱注册");
              this.$post(this.urls.testUrl + "/register/ByPhoneNum", {
                phoneNum: this.accountForm.account,
                password: this.accountForm.password
              }).then(
                res => {
                  this.step++;
                  this.$message({
                    message: "注册成功",
                    type: "success"
                  });
                },
                err => {
                  if (err.response) {
                    let arr = err.response.data.errors;
                    let arr1 = [];
                    for (let i in arr) {
                      arr1.push(arr[i]);
                    }
                    this.$message.error(arr1.join(","));
                  }
                }
              );
            } else {
              this.$message({
                message: "请输入验证码",
                type: "warning"
              });
            }
          }
        }
      } else if (this.step == 1) {
        //个人信息填写
      } else if (this.step == 2) {
        //学生信息填写
      }
      // if (this.step < 3 && this.step >= 0) {
      //   this.step++;
      // }
    },
    lastStep() {
      //返回
      if (this.step > 1 && this.step <= 2) {
        this.step--;
      }
    },
    getCode() {
      //获取验证码，目前仅验证账号格式是否正确
      if (this.accountType == "手机号") {
        if (this.$validatePhoneNum(this.accountForm.account)) {
          this.isCodeValidated = true;
          this.$message({
            message: "验证码已发送",
            type: "success"
          });
          //更改按钮样式，禁用60s
          this.registerDisabeledTime = 0;
          this.btnDisabled = true;
          this.timer();
        } else {
          this.$message({
            message: "请输入正确的手机号",
            type: "warning"
          });
        }
      } else if (this.accountType == "邮箱") {
        if (this.$validateEmail(this.accountForm.account)) {
          this.isCodeValidated = true;
          this.$message({
            message: "验证码已发送",
            type: "success"
          });
          //更改按钮样式，禁用60s
          this.registerDisabeledTime = 60;
          this.btnDisabled = true;
          this.timer();
        } else {
          this.$message({
            message: "请输入正确的邮箱",
            type: "warning"
          });
        }
      }
    },
    timer() {
      if (this.registerDisabeledTime > 0) {
        this.$cookies.set("registerDisabeledTime", this.registerDisabeledTime);
        this.registerDisabeledTime--;
        this.btntext = "请等待" + this.registerDisabeledTime + "s";
        this.btnDisabled = true;
        setTimeout(this.timer, 1000);
      } else {
        this.$cookies.remove("registerDisabeledTime");
        this.registerDisabeledTime = 0;
        this.btnDisabled = false;
        this.btntext = "获取验证码";
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
  mounted() {
    this.registerDisabeledTime = this.$cookies.isKey("registerDisabeledTime")
      ? this.$cookies.get("registerDisabeledTime")
      : 0;
    this.btnDisabled = this.$cookies.isKey("registerDisabeledTime")
      ? true
      : false;
  }
};
</script>
<style>
.title {
  font-family: -apple-system;
  font-size: 43px;
  color: #000;
  float: left;
  text-align: left;
  margin-bottom: 0px;
  margin-right: 20px;
}
.contect {
  font-size: 20px;
  text-align: right;
  margin-top: 8px;
  padding: 2px;
  margin-left: 10px;
  float: right;
}
.slogan {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 24px;
  text-align: left;
  margin-top: 8px;
  float: left;
}
.button-group {
  float: left;
  margin: 80px;
}
.agreement {
  float: left;
}
.selecteButton {
  width: 100px;
  height: 100px;
}
.selecteButton i {
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 30px;
}
.accountForm {
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