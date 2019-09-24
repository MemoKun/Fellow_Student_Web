<template>
  <div class="container" style="padding:100px">
    <el-card class="box-card" body-style="padding:40px">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="Friends Approved" name="first">
          <el-row :gutter="20">
            <el-col :span="18">
              <h2>我的朋友</h2>
              <div class="container" v-for="item in myFriendsApproved" :key="item.user_id">
                <el-col :span="6" style="padding: 10px;">
                  <el-card :body-style="{ padding: '0px' }">
                    <img :src="item.photo" style="width:100%" />
                    <div style="padding: 14px;" class="bottom clearfix">
                      <span>{{item.nickname}}</span>
                      <p>{{item.university}}-{{item.speciality}}-{{item.grade}}</p>
                      <p>在{{item.created_at}}成为好友</p>
                      <el-button
                        type="text"
                        class="button"
                        @click="unfriend()"
                        style="float:left"
                      >详细信息</el-button>
                      <el-button
                        type="text"
                        class="button"
                        @click="unfriend()"
                        style="float:right"
                      >删除好友</el-button>
                    </div>
                  </el-card>
                </el-col>
              </div>
            </el-col>
            <el-col :span="6">
              <h1>好友分类</h1>
              <el-card class="box-card">
                <el-tabs v-model="friendsClassifierActiveName" @tab-click="handleClick">
                  <el-tab-pane label="按学校" name="first">
                    <p>清华大学（1）</p>
                    <p>中南大学（1）</p>
                    <p>北京大学（1）</p>
                    <p>延世大学（1）</p>
                    <p>首尔大学（1）</p>
                  </el-tab-pane>
                  <el-tab-pane label="按专业" name="second">按专业</el-tab-pane>
                  <el-tab-pane label="按互动次数" name="third">按互动次数</el-tab-pane>
                </el-tabs>
              </el-card>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="Friends Waiting Approved" name="second">
          <el-row :gutter="20">
            <el-col :span="18">
              <h2>等待申请通过的朋友</h2>
              <div class="container" v-for="item in myFriendsApproved" :key="item.user_id">
                <el-col :span="6" style="padding: 10px;">
                  <el-card :body-style="{ padding: '0px' }">
                    <img :src="item.photo" style="width:100%"/>
                    <div style="padding: 14px;" class="bottom clearfix">
                      <span>{{item.nickname}}</span>
                      <p>{{item.university}}-{{item.speciality}}-{{item.grade}}</p>
                      <p>在{{item.created_at}}成为好友</p>
                      <el-button
                        type="text"
                        class="button"
                        @click="unfriend()"
                        style="float:left"
                      >详细信息</el-button>
                      <el-button
                        type="text"
                        class="button"
                        @click="unfriend()"
                        style="float:right"
                      >取消申请</el-button>
                    </div>
                  </el-card>
                </el-col>
              </div>
            </el-col>
            <el-col :span="6">
              <h1>好友分类</h1>
              <el-card class="box-card">
                <el-tabs v-model="friendsClassifierActiveName" @tab-click="handleClick">
                  <el-tab-pane label="按学校" name="first">
                    <p>清华大学（1）</p>
                    <p>中南大学（1）</p>
                    <p>北京大学（1）</p>
                    <p>延世大学（1）</p>
                    <p>首尔大学（1）</p>
                  </el-tab-pane>
                  <el-tab-pane label="按专业" name="second">按专业</el-tab-pane>
                  <el-tab-pane label="按互动次数" name="third">按互动次数</el-tab-pane>
                </el-tabs>
              </el-card>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="Follow" name="third">
          <el-row :gutter="20">
            <el-col :span="18">
              <h2>Follow</h2>
              <div class="container" v-for="item in myFriendsApproved" :key="item.user_id">
                <el-col :span="6" style="padding: 10px;">
                  <el-card :body-style="{ padding: '0px' }">
                    <img :src="item.photo" style="width:100%"/>
                    <div style="padding: 14px;" class="bottom clearfix">
                      <span>{{item.nickname}}</span>
                      <p>{{item.university}}-{{item.speciality}}-{{item.grade}}</p>
                      <p style="font-size:5px">在{{item.created_at}}成为好友</p>
                      <el-button
                        type="text"
                        class="button"
                        @click="unfriend()"
                        style="float:left"
                      >详细信息</el-button>
                      <el-button
                        type="text"
                        class="button"
                        @click="unfriend()"
                        style="float:right"
                      >取消关注</el-button>
                    </div>
                  </el-card>
                </el-col>
              </div>
            </el-col>
            <el-col :span="6">
              <h1>好友分类</h1>
              <el-card class="box-card">
                <el-tabs v-model="friendsClassifierActiveName" @tab-click="handleClick">
                  <el-tab-pane label="按学校" name="first">
                    <p>清华大学（1）</p>
                    <p>中南大学（1）</p>
                    <p>北京大学（1）</p>
                    <p>延世大学（1）</p>
                    <p>首尔大学（1）</p>
                  </el-tab-pane>
                  <el-tab-pane label="按专业" name="second">按专业</el-tab-pane>
                  <el-tab-pane label="按互动次数" name="third">按互动次数</el-tab-pane>
                </el-tabs>
              </el-card>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="Follower" name="fourth">
          <el-row :gutter="20">
            <el-col :span="18">
              <h2>Follower</h2>
              <div class="container" v-for="item in myFriendsApproved" :key="item.user_id">
                <el-col :span="6" style="padding: 10px;">
                  <el-card :body-style="{ padding: '0px' }">
                    <img :src="item.photo" style="width:100%"/>
                    <div style="padding: 14px;" class="bottom clearfix">
                      <span>{{item.nickname}}</span>
                      <p>{{item.university}}-{{item.speciality}}-{{item.grade}}</p>
                      <p font-size="5px">在{{item.created_at}}成为好友</p>
                      <el-button
                        type="text"
                        class="button"
                        @click="unfriend()"
                        style="float:left"
                      >详细信息</el-button>
                      <el-button
                        type="text"
                        class="button"
                        @click="unfriend()"
                        style="float:right"
                      >屏蔽此人</el-button>
                    </div>
                  </el-card>
                </el-col>
              </div>
            </el-col>
            <el-col :span="6">
              <h1>好友分类</h1>
              <el-card class="box-card">
                <el-tabs v-model="friendsClassifierActiveName" @tab-click="handleClick">
                  <el-tab-pane label="按学校" name="first">
                    <p>清华大学（1）</p>
                    <p>中南大学（1）</p>
                    <p>北京大学（1）</p>
                    <p>延世大学（1）</p>
                    <p>首尔大学（1）</p>
                  </el-tab-pane>
                  <el-tab-pane label="按专业" name="second">按专业</el-tab-pane>
                  <el-tab-pane label="按互动次数" name="third">按互动次数</el-tab-pane>
                </el-tabs>
              </el-card>
            </el-col>
          </el-row>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>
<style>
</style>
<script>
export default {
  data() {
    return {
      activeName: "first",
      friendsClassifierActiveName: "first",
      myFriendsApproved: [
        {
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
    unfriend() {
      console.log(1);
    }
  }
};
</script>