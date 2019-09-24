<template>
  <div class="container" style="padding:100px">
    <el-card class="box-card" body-style="padding:40px">
      <el-row>
        <h1
          style="font-style:bold;float:left;font-size:48px;margin:auto;"
        >{{user.username}}'s PROFILE</h1>
        <h2 style="font-style:italic;text-decoration:underline;float:right">返回搜索列表</h2>
      </el-row>
      <el-row>
        <p style="float:left;font-size:20px;margin-bottom:50px;">(userID: {{user.userId}})</p>
      </el-row>
      <!-- <el-divider content-position="right">
        <i class="el-icon-user-solid"></i>
      </el-divider> -->
      <el-row :gutter="100">
        <el-col :span="12">
          <img :src="user.photo" style="width:100%;" />
        </el-col>
        <el-col :span="12">
          <h1
            class="title"
          >{{user.username}}</h1>
          <div style="background-color:#99CCFF;width:400px;height:400px;float:right">
              <h1 class="cardTitle">Member since {{user.joinDate}}</h1>
              <h1 class="cardTitle">Profile viewed {{user.viewTimes}} times</h1>
              <h1 class="cardTitle">Last logged in {{user.lastLogTime}} ago</h1>
              <br />
          <br />
              <h1 class="littleTitle"></h1>
              <h1 class="littleTitle"></h1>
              <h1 class="littleTitle"></h1>
              <h1 class="littleTitle"></h1>
          </div>
          <h1 class="littleTitle">HOME COUNTRY: {{user.homeCountry}}</h1>
          <h1 class="littleTitle">BIRTH COUNTRY: {{user.birthCountry}}</h1>
          <h1 class="littleTitle">{{user.age}} years old {{user.sex}}</h1>
          <br />
          <br />
          <br />
          <h1 class="littleTitle">Looking for {{user.lookingForSex}} Penpals</h1>
          <h1 class="littleTitle">Between {{user.ageBetweenFrom}} and {{user.ageBetweenTo}}</h1>
         <br />
          <br />
          <br />
          <h1 class="littleTitle">You have sent {{user.messageCount}} messages to this member</h1>
          <br />
          <br />
          <h1 class="littleTitle" style="font-style:italic;">“ {{user.introduction}} ”</h1>
           <br />
          <br />
          <el-row>
            <el-col :span="8">
            <el-button type="success" @click="addFlag = !addFlag" v-if="addFlag" style="font-size:36px;" icon="el-icon-star-off" round>Add as Friend</el-button>
            <el-button type="success" @click="addFlag = !addFlag" v-if="!addFlag" style="font-size:36px;" icon="el-icon-star-on" round>Friend</el-button>
            </el-col>
        
            <el-col :span="8" :push="7">
            <el-button type="success" style="font-size:36px;" icon="el-icon-share" round>Report this profile</el-button>
            </el-col>
          </el-row>
             <br />
          <br />
          <el-button type="primary" style="width:100%;height:100px;font-size:50px;" icon="el-icon-chat-dot-round" @click="dialogVisible = true" round>Send a Message</el-button>

        </el-col>
      </el-row>
    </el-card>
    <el-dialog :title='"Send a Message to " + user.username' :visible.sync="dialogVisible" center>
      <el-input type="textarea" :rows="4" placeholder="请输入内容" v-model="textarea"></el-input>
        <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: "first",
      addFlag:true,
      dialogVisible:false,
      messages: [
        {
          message_id: 1,
          user_id: 1,
          nickname: "金智媛",
          university: "清华大学",
          speciality: "计算机科学",
          grade: "大三",
          //lastLoginAt: "20min ago",
          created_at: "2018-09-12 6:12",
          photo:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567416535125&di=d6f2d99ef3fcf7e7fc31dbdf443eeaf3&imgtype=0&src=http%3A%2F%2Fstatic.pig66.com%2Fuploadfile%2F2017%2F0706%2F20170706034955516.jpg"
        },
        {
          message_id: 2,
          user_id: 2,
          nickname: "Yonna",
          university: "北京大学",
          speciality: "计算机科学",
          grade: "大三",
          //lastLoginAt: "20min ago",
          created_at: "2018-09-12 6:12",
          photo:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567416512457&di=854252c4b4be69a2537c47300bec0eef&imgtype=0&src=http%3A%2F%2Fstatic.pig66.com%2Fuploadfile%2F2017%2F0706%2F20170706035051965.jpg"
        },
        {
          message_id: 3,
          user_id: 3,
          nickname: "Yonna",
          university: "中南大学",
          speciality: "计算机科学",
          grade: "大三",
          //lastLoginAt: "20min ago",
          created_at: "2018-09-12 6:12",
          photo:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567416535125&di=3e38867474179c9a803fc71b3ff45a7d&imgtype=0&src=http%3A%2F%2Fimg3.kuwo.cn%2Fstar%2Fuserhead%2F76%2F57%2F1486864026485_230608776.jpg"
        },
        {
          message_id: 4,
          user_id: 4,
          nickname: "Yonna",
          university: "中国人民大学",
          speciality: "计算机科学",
          grade: "大三",
          //lastLoginAt: "20min ago",
          created_at: "2018-09-12 6:12",
          photo:
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3337547610,1389828697&fm=26&gp=0.jpg"
        },
        {
          message_id: 5,
          user_id: 5,
          nickname: "Yonna",
          university: "中央民族大学",
          speciality: "计算机科学",
          grade: "大三",
          //lastLoginAt: "20min ago",
          created_at: "2018-09-12 6:12",
          photo:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567416535125&di=896599a1ca6df02dbe3108c105696a15&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201611%2F11%2F20161111142253_KJ4kV.jpeg"
        },
        {
          message_id: 6,
          user_id: 6,
          nickname: "Yonna",
          university: "武汉大学",
          speciality: "计算机科学",
          grade: "大三",
          //lastLoginAt: "20min ago",
          created_at: "2018-09-12 6:12",
          photo:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567416535123&di=1fa4c760e1749c6533693a12a15bac9b&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201610%2F07%2F20161007212756_W5KaS.jpeg"
        },
        {
          message_id: 7,
          user_id: 7,
          nickname: "Yonna",
          university: "延世大学",
          speciality: "计算机科学",
          grade: "大三",
          //lastLoginAt: "20min ago",
          created_at: "2018-09-12 6:12",
          photo:
            "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2481205427,3425231638&fm=26&gp=0.jpg"
        },
        {
          message_id: 8,
          user_id: 8,
          nickname: "Yonna",
          university: "首尔大学",
          speciality: "计算机科学",
          grade: "大三",
          //lastLoginAt: "20min ago",
          created_at: "2018-09-12 6:12",
          photo:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567416718549&di=925ec025bc61d948ec8a953a78f9c790&imgtype=jpg&src=http%3A%2F%2Fimg4.imgtn.bdimg.com%2Fit%2Fu%3D2256597494%2C2632907235%26fm%3D214%26gp%3D0.jpg"
        }
      ],
      textarea:"",
      user: {
        username: "Yonna",
        userId: 11638888,
        photo:
          "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567416535125&di=896599a1ca6df02dbe3108c105696a15&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201611%2F11%2F20161111142253_KJ4kV.jpeg",
          homeCountry:"China",
          birthCountry:"China",
          age:"17",
          sex:"女",
          lookingForSex:"Female/Male",
          ageBetweenFrom:16,
          ageBetweenTo:25,
          messageCount:0,
        introduction:"你好，简单介绍一下:我是一名法语专业的学生。更重要的是，散打(拳击的一种形式)是我的新爱好!我想找一个笔友，我可以和他交朋友。在中国,我们总是相信命运(缘分),我也是,因为我们遇到的命运!最后，如果你想知道更多和我聊天，你可以发邮件给我2314147149@qq.com。",
        joinDate:"Aug 14,2019",
        viewTimes:888,
        lastLogTime:"6 minutes"
      }
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    readMessage() {
      console.log(1);
    }
  }
};
</script>
<style scoped>
.title {
  font-style: bold;
  font-size: 48px;
  text-align: left;
  margin: 10px 0px;
}
.littleTitle{
    text-align: left;
    margin: 40px 0;
}
.cardTitle{
    text-align: left;
    margin: 40px 20px;
}
</style>