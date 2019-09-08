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
                    <img :src="item.photo" class="image" />
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
                    <img :src="item.photo" class="image" />
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
                    <img :src="item.photo" class="image" />
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
                    <img :src="item.photo" class="image" />
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
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567416535125&di=d6f2d99ef3fcf7e7fc31dbdf443eeaf3&imgtype=0&src=http%3A%2F%2Fstatic.pig66.com%2Fuploadfile%2F2017%2F0706%2F20170706034955516.jpg"
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
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567416512457&di=854252c4b4be69a2537c47300bec0eef&imgtype=0&src=http%3A%2F%2Fstatic.pig66.com%2Fuploadfile%2F2017%2F0706%2F20170706035051965.jpg"
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
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567416535125&di=3e38867474179c9a803fc71b3ff45a7d&imgtype=0&src=http%3A%2F%2Fimg3.kuwo.cn%2Fstar%2Fuserhead%2F76%2F57%2F1486864026485_230608776.jpg"
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
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3337547610,1389828697&fm=26&gp=0.jpg"
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
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567416535125&di=896599a1ca6df02dbe3108c105696a15&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201611%2F11%2F20161111142253_KJ4kV.jpeg"
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
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567416535123&di=1fa4c760e1749c6533693a12a15bac9b&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201610%2F07%2F20161007212756_W5KaS.jpeg"
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
            "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2481205427,3425231638&fm=26&gp=0.jpg"
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
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567416718549&di=925ec025bc61d948ec8a953a78f9c790&imgtype=jpg&src=http%3A%2F%2Fimg4.imgtn.bdimg.com%2Fit%2Fu%3D2256597494%2C2632907235%26fm%3D214%26gp%3D0.jpg"
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