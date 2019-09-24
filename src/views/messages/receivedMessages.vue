<template>
  <div class="container" style="padding:100px">
    <el-card class="box-card" body-style="padding:40px">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="收到的消息" name="first">
          <el-row :gutter="20">
            <el-col :span="18" style="padding:20px">
              <h1 style="float:left">你收到的消息</h1>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="18">
              <div
                class="container"
                v-for="item in messages"
                :key="item.message_id"
                style="padding:10px"
              >
                <el-card class="box-card" style="padding:10px">
                  <el-col :span="6">
                    <img style="float:left;padding:20px;width:300px;height:300px;" :src="item.photo"  />
                  </el-col>
                  <el-col :span="18">
                    <el-row>
                      <h4
                        style=""
                      >{{item.nickname}}-{{item.university}}-{{item.speciality}}-{{item.grade}}</h4>
                      <h5 style="float:right">2019年3月23日</h5>
                    </el-row>
                    <el-row>
                      <p>Hello JunhaoXue! Nice to meet you. So nice that you are engineering...</p>
                    </el-row>
                    <el-row type="flex" justify="end" align="bottom" >
                      <el-button
                        type="text"
                        class="button"
                        @click="readMessage()"
                        
                      >阅读全部</el-button>
                    </el-row>
                  </el-col>
                </el-card>
              </div>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="发出的消息" name="second">
          <el-row :gutter="20">
            <el-col :span="18" style="padding:20px">
              <h1 style="float:left">你发出的消息</h1>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="18">
              <div
                class="container"
                v-for="item in messages"
                :key="item.message_id"
                style="padding:10px"
              >
                <el-card class="box-card" style="padding:10px">
                  <el-col :span="6">
                    <img style="float:left;width:100%" :src="item.photo" />
                  </el-col>
                  <el-col :span="16" :push="2">
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
            </el-col>
          </el-row>
        </el-tab-pane>
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
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569063950234&di=f9e666fa5b2219e12cd1e0119b6a692d&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201406%2F03%2F20140603205522_ZirQE.thumb.600_0.jpeg"
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
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569658749&di=d621e95842f713f897d1c9f9d14160bc&imgtype=jpg&er=1&src=http%3A%2F%2Fcdn.duitang.com%2Fuploads%2Fitem%2F201507%2F27%2F20150727151430_E5CS4.thumb.700_0.jpeg"
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
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569218053597&di=00d61280e892d0f0fdf32eeda5ab1fcf&imgtype=0&src=http%3A%2F%2Fimg4q.duitang.com%2Fuploads%2Fitem%2F201411%2F20%2F20141120170055_cKStw.jpeg"
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
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569064081142&di=50668130821b13405f195658dc4506d4&imgtype=0&src=http%3A%2F%2Fcdn.duitang.com%2Fuploads%2Fitem%2F201407%2F24%2F20140724190906_MCkXs.thumb.700_0.jpeg"
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
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3284581089,709717092&fm=26&gp=0.jpg"
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
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1743168392,2407869980&fm=26&gp=0.jpg"
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
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1392078492,1897050294&fhttps://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1392078492,1897050294&fm=26&gp=0.jpgm=26&gp=0.jpg"
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
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569658860&di=f4d738760b420cc3883d8253252d8e48&imgtype=jpg&er=1&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201411%2F08%2F20141108083126_QARVZ.jpeg"
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