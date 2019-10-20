<template>
  <div>
    <!-- 选择手机或者邮箱验证 -->
    <div>
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

            <div class="accountForm">
              <el-form ref="accountForm" v-model="accountForm" label-position="right" label-width="60px">
                <el-form-item label="手机号">
                  <el-input v-model="accountForm.account" placeholder="'请输入手机号" style="width:400px">
                  </el-input>
                </el-form-item>
                <el-form-item label="密码">
                  <el-input v-model="accountForm.password" placeholder="请输入密码" type="password" style="width:400px"
                    show-password></el-input>
                </el-form-item>
                <el-form-item label="验证码">
                  <span>
                    <el-input v-model="accountForm.code" placeholder="请输入收到的验证码" style="width:400px;">
                      <el-button slot="append" type="primary" @click="getCode" :disabled="btnDisabled">{{btntext}}
                      </el-button>
                    </el-input>
                  </span>
                </el-form-item>
              </el-form>
              <el-button type="primary" @click="registerSubmit" id="registerButton" >立即注册</el-button>
            </div>
            
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

  </div>
</template>

<script>
import options from './../../utils/country-data.js';
import registerAPI from '../../api/register';
export default {
  components: {},
  props: {},
  data() {
    return {
      checked: true,
      //获取验证码后禁用按钮
      btntext: '获取验证码',
      btnDisabled: false,
      registerDisabeledTime: 0,
      backgroundStyle: {
        backgroundImage:
          'url(' + require('../../assets/largestk8nvmsatrcy0eb4.jpg') + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%'
      },
      background: require('../../assets/501298720.jpg'),

      step: -1,
      //暂时用于表示是否通过验证码验证
      isCodeValidated: false,
      //城市级联数据
      cityOptions: options,
      accountForm: {
        account: '',
        password: '',
        code: ''
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
        this.accountType = '手机号';
        this.step = 0;
        this.typeSelected = true;
        this.timer();
      } else {
        this.$message({
          message: '请阅读相关服务条款和隐私政策',
          type: 'warning'
        });
      }
    },

    goBack() {
      //返回上一步
      this.accountType = '';
      this.step = -1;
      this.typeSelected = false;
    },
    async registerSubmit() {
      //账号注册
      if (this.accountForm.account === '' || this.accountForm.password === '') {
        this.$message.error('账号或密码不能为空');
      } else {
        if (this.isCodeValidated) {
          console.log('手机号注册');
          const json = {
            phoneNum: this.accountForm.account,
            password: this.accountForm.password
          };
          var reponse= await registerAPI.register(json);
          //注册成功后的操作
        } else {
          this.$message({
            message: '请输入验证码',
            type: 'warning'
          });
        }
      }
    },
    lastStep() {
      //返回
      if (this.step > 1 && this.step <= 2) {
        this.step--;
      }
    },
    getCode() {
      //获取验证码，目前仅验证账号格式是否正确
      if (this.$validatePhoneNum(this.accountForm.account)) {
        this.isCodeValidated = true;
        this.$message({
          message: '验证码已发送',
          type: 'success'
        });
        //更改按钮样式，禁用60s
        this.registerDisabeledTime = 0;
        this.btnDisabled = true;
        this.timer();
      } else {
        this.$message({
          message: '请输入正确的手机号',
          type: 'warning'
        });
      }
    },
    timer() {
      if (this.registerDisabeledTime > 0) {
        this.$cookies.set('registerDisabeledTime', this.registerDisabeledTime);
        this.registerDisabeledTime--;
        this.btntext = '请等待' + this.registerDisabeledTime + 's';
        this.btnDisabled = true;
        setTimeout(this.timer, 1000);
      } else {
        this.$cookies.remove('registerDisabeledTime');
        this.registerDisabeledTime = 0;
        this.btnDisabled = false;
        this.btntext = '获取验证码';
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
    this.registerDisabeledTime = this.$cookies.isKey('registerDisabeledTime')
      ? this.$cookies.get('registerDisabeledTime')
      : 0;
    this.btnDisabled = this.$cookies.isKey('registerDisabeledTime')
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
.accountForm{
  width: 500px;
  position: relative;
  margin: 100px auto;
  text-align: center;
}
#registerButton{
  width: 200px;
  position: relative;
  margin:  auto;
  text-align: center;
}
/* .registerButton{
  width: 200px;
  margin-top:-100px;
} */

</style>