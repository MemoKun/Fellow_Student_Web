<template>
  <div class="container" style="padding:100px">
    <el-card class="box-card" body-style="padding:40px">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="收到的消息" name="first">
          <el-row gutter="20">
            <el-col :span="18" style="padding:20px">
              <h1 style="float:left">你发出的消息</h1>
            </el-col>
          </el-row>
          <el-row>
            <div
              class="container"
              v-for="item in messages"
              :key="item.message_id"
              style="padding:10px"
            >
              <el-card class="box-card" style="padding:10px">
                <el-col :span="4">
                  <el-image style="float:left;padding:20px" :src="item.photo" :fit="fill"></el-image>
                </el-col>
                <el-col :span="20">
                  <el-row>
                    <h4
                      style="float:left"
                    >{{item.nickname}}-{{item.university}}-{{item.speciality}}-{{item.grade}}</h4>
                    <h5 style="float:right">2019年3月23日</h5>
                  </el-row>
                  <el-row>
                    <p>Hello JunhaoXue! Nice to meet you. So nice that you are engineering...</p>
                  </el-row>
                  <el-row>
                    <el-button
                      type="text"
                      class="button"
                      @click="readMessage()"
                      style="float:right;"
                    >阅读全部</el-button>
                  </el-row>
                </el-col>
              </el-card>
            </div>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="发出的消息" name="second">发出的消息</el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: "first",
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
      ]
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