<template>
  <div class="container" style="padding:100px">
    <el-card class="box-card" body-style="padding:60px">
      <el-row>
        <span class="profileTitle">{{user.username}}的简历</span>
        <el-link
          type="primary"
          style="font-style:italic;text-decoration:underline;float:right"
        >返回搜索列表</el-link>
      </el-row>
      <el-row>
        <p style="float:left;">(userID: {{user.userId}})</p>
      </el-row>
      <el-row>
        <el-col span="8">
          <el-card>
            <img :src="user.photo" style="width:100%;" />
            <p class="cardTitle">会员，加入于{{user.joinDate}}</p>
            <p class="cardTitle">简历被浏览了 {{user.viewTimes}} 次</p>
            <p class="cardTitle">上一次登录是在 {{user.lastLogTime}} 以前</p>
            <el-row>
              <el-button type="primary" v-if="addFlag" icon="el-icon-star-off" round>添加收藏</el-button>
              <el-button type="success" v-if="addFlag" icon="el-icon-star-off" round>申请好友</el-button>
            </el-row>
            <el-row>
              <div style="margin:20px">
                <el-collapse accordion>
                  <el-collapse-item>
                    <template slot="title">星座</template>
                    <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                    <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                  </el-collapse-item>
                  <el-collapse-item title="爱好">
                    <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                    <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
                  </el-collapse-item>
                  <el-collapse-item title="学生干部">
                    <div>简化流程：设计简洁直观的操作流程；</div>
                    <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
                    <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
                  </el-collapse-item>
                  <el-collapse-item title="获奖经历">
                    <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                    <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
                  </el-collapse-item>
                </el-collapse>
              </div>
            </el-row>
            <h4>她的朋友</h4>
            <el-row v-for="(i,index) in (Math.ceil((friends.length / 4)))" :key="index">
              <el-col
                :span="6"
                style="padding: 3px;"
                v-for="(item,index) in friends"
                v-show="(i - 1) * 4 <= index && index < i * 4"
                :key="index"
              >
                <el-card :body-style="{ padding: '0px' }" span="8">
                  <img :src="item.photo" class="image" width="100%" />
                  <div class="friendsCard-title">
                    <span>{{item.nickname}}</span>
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </el-card>
        </el-col>
        <el-col span="10">
          <div class="container" style="margin-left:40px">
            <h2 class="title">{{user.username}}</h2>
            <p class="littleTitle">年龄：{{user.age}} 岁</p>
            <p class="littleTitle">性别：{{user.sex}}</p>
            <p class="littleTitle">家乡：{{user.homeCountry}}</p>
            <p class="littleTitle">现居：{{user.birthCountry}}</p>
            <p class="littleTitle">学校：{{user.school}}</p>
            <p class="littleTitle">专业：{{user.major}}</p>
            <p class="littleTitle">寻找 {{user.lookingForSex}} 朋友</p>
            <p class="littleTitle">Between {{user.ageBetweenFrom}} and {{user.ageBetweenTo}}</p>
            <el-tabs v-model="activeName" @tab-click="handleClick">
              <el-tab-pane label="Show Time" name="first">
                <p class="introduction">“ {{user.introduction}} ”</p>
              </el-tab-pane>
              <el-tab-pane label="科研竞赛" name="second">科研竞赛</el-tab-pane>
              <el-tab-pane label="工作经历" name="third">工作经历</el-tab-pane>
            </el-tabs>
          </div>
          <h1>评论</h1>
          <div class="container" v-for="item in comments" :key="item.comment_id">
            <el-card style="margin:30px" :body-style="{ padding: '0px' }" span="8">
              <el-col span="6">
                <div style="margin:0px">
                  <img :src="item.photo" style="width:100%;margin:0px;" />
                </div>
              </el-col>
              <el-col span="18">
                <el-row style="margin:10px">
                  <p class="commentCard-title">{{item.nickname}}</p>
                  <p class="commentCard-p">{{item.comment}}</p>
                </el-row>
              </el-col>
            </el-card>
          </div>
          <div class="container" style="margin:20px">
            <h4>有什么想说的话，就留言吧</h4>
            <el-input
              type="textarea"
              :autosize="{ minRows: 4, maxRows: 8}"
              placeholder="请输入内容"
              v-model="textarea2"
              maxlength="60"
              show-word-limit
              style="margin-bottom:30px"
            ></el-input>
            <el-button type="primary" round style="float:right">留言</el-button>
          </div>
        </el-col>
        <el-col span="6">
          <div style="margin-left:20px">
            <el-row style="margin-bottom:20px">
              <h3>发一封消息吧！</h3>
            </el-row>
            <el-row>
              <el-input
                type="textarea"
                :rows="20"
                placeholder="请输入内容"
                v-model="textarea"
                style="margin-bottom:20px"
              ></el-input>
            </el-row>
            <el-row style="margin-bottom:20px">
              <el-button type="primary" icon="el-icon-chat-dot-round" round>寄信</el-button>
            </el-row>
            <el-row>
              <el-alert
                title="提示与帮助"
                type="warning"
              >You might be automatically logged out if you type for more than 20 minutes. We're working on fixing this. In the meanwhile please copy your finished text before you send it. That way, if you get logged out, you can log back in, come back to this page and paste it back. We apologize for this.</el-alert>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </el-card>
    <!--
    <el-dialog :title=""Send a Message to " + user.username" :visible.sync="dialogVisible" center>
      <el-input type="textarea" :rows="4" placeholder="请输入内容" v-model="textarea"></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>-->
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: "first",
      addFlag: true,
      dialogVisible: false,
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
      comments: [
        {
          user_id: 1,
          comment_id: 1,
          nickname: "金智媛",
          university: "清华大学",
          lastLoginAt: "14 sec ago",
          comment: "hi subeen. D hope we can be friend :)",
          photo:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569063950234&di=f9e666fa5b2219e12cd1e0119b6a692d&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201406%2F03%2F20140603205522_ZirQE.thumb.600_0.jpeg"
        },
        {
          user_id: 2,
          comment_id: 2,
          nickname: "Yonna",
          university: "北京大学",
          lastLoginAt: "18 sec ago",
          comment:
            "hi subeen. ur name remind me of korean drama at eighteen, the name of the main role is yoo soo bin :D hope we can be friend :)",
          photo:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569658749&di=d621e95842f713f897d1c9f9d14160bc&imgtype=jpg&er=1&src=http%3A%2F%2Fcdn.duitang.com%2Fuploads%2Fitem%2F201507%2F27%2F20150727151430_E5CS4.thumb.700_0.jpeg"
        },
        {
          user_id: 3,
          comment_id: 3,
          nickname: "Yonna",
          university: "中南大学",
          lastLoginAt: "24 sec ago",
          comment:
            "hi subeen. ur name remind me of korean drama at eighteen, the name of the main role is yoo soo bin :D hope we can be friend :)",
          photo:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569218053597&di=00d61280e892d0f0fdf32eeda5ab1fcf&imgtype=0&src=http%3A%2F%2Fimg4q.duitang.com%2Fuploads%2Fitem%2F201411%2F20%2F20141120170055_cKStw.jpeg"
        },
        {
          user_id: 4,
          comment_id: 4,
          nickname: "Yonna",
          university: "中国人民大学",
          lastLoginAt: "31 sec ago",
          comment:
            "hi subeen. ur name remind me of korean drama at eighteen, the name of the main role is yoo soo bin :D hope we can be friend :)",
          photo:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569064081142&di=50668130821b13405f195658dc4506d4&imgtype=0&src=http%3A%2F%2Fcdn.duitang.com%2Fuploads%2Fitem%2F201407%2F24%2F20140724190906_MCkXs.thumb.700_0.jpeg"
        },
        {
          user_id: 5,
          comment_id: 5,
          nickname: "Yonna",
          university: "中央民族大学",
          lastLoginAt: "1 min 14 sec ago",
          comment:
            "hi subeen. ur name remind me of korean drama at eighteen, the name of the main role is yoo soo bin :D hope we can be friend :)",
          photo:
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3284581089,709717092&fm=26&gp=0.jpg"
        }
      ],
      friends: [
        {
          user_id: 1,
          comment_id: 1,
          nickname: "金智媛",
          university: "清华大学",
          lastLoginAt: "14 sec ago",
          comment: "hi subeen. D hope we can be friend :)",
          photo:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569063950234&di=f9e666fa5b2219e12cd1e0119b6a692d&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201406%2F03%2F20140603205522_ZirQE.thumb.600_0.jpeg"
        },
        {
          user_id: 2,
          comment_id: 2,
          nickname: "Yonna",
          university: "北京大学",
          lastLoginAt: "18 sec ago",
          comment:
            "hi subeen. ur name remind me of korean drama at eighteen, the name of the main role is yoo soo bin :D hope we can be friend :)",
          photo:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569658749&di=d621e95842f713f897d1c9f9d14160bc&imgtype=jpg&er=1&src=http%3A%2F%2Fcdn.duitang.com%2Fuploads%2Fitem%2F201507%2F27%2F20150727151430_E5CS4.thumb.700_0.jpeg"
        },
        {
          user_id: 3,
          comment_id: 3,
          nickname: "Yonna",
          university: "中南大学",
          lastLoginAt: "24 sec ago",
          comment:
            "hi subeen. ur name remind me of korean drama at eighteen, the name of the main role is yoo soo bin :D hope we can be friend :)",
          photo:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569218053597&di=00d61280e892d0f0fdf32eeda5ab1fcf&imgtype=0&src=http%3A%2F%2Fimg4q.duitang.com%2Fuploads%2Fitem%2F201411%2F20%2F20141120170055_cKStw.jpeg"
        },
        {
          user_id: 4,
          comment_id: 4,
          nickname: "Yonna",
          university: "中国人民大学",
          lastLoginAt: "31 sec ago",
          comment:
            "hi subeen. ur name remind me of korean drama at eighteen, the name of the main role is yoo soo bin :D hope we can be friend :)",
          photo:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569064081142&di=50668130821b13405f195658dc4506d4&imgtype=0&src=http%3A%2F%2Fcdn.duitang.com%2Fuploads%2Fitem%2F201407%2F24%2F20140724190906_MCkXs.thumb.700_0.jpeg"
        },
        {
          user_id: 5,
          comment_id: 5,
          nickname: "Yonna",
          university: "中央民族大学",
          lastLoginAt: "1 min 14 sec ago",
          comment:
            "hi subeen. ur name remind me of korean drama at eighteen, the name of the main role is yoo soo bin :D hope we can be friend :)",
          photo:
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3284581089,709717092&fm=26&gp=0.jpg"
        },
        {
          user_id: 6,
          comment_id: 6,
          nickname: "Yonna",
          university: "武汉大学",
          lastLoginAt: "1 min 26 sec ago",
          comment:
            "hi subeen. ur name remind me of korean drama at eighteen, the name of the main role is yoo soo bin :D hope we can be friend :)",
          photo:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1743168392,2407869980&fm=26&gp=0.jpg"
        },
        {
          user_id: 7,
          comment_id: 7,
          nickname: "Yonna",
          university: "延世大学",
          lastLoginAt: "1 min 29 sec ago",
          comment:
            "hi subeen. ur name remind me of korean drama at eighteen, the name of the main role is yoo soo bin :D hope we can be friend :)",
          photo:
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1392078492,1897050294&fm=26&gp=0.jpg"
        },
        {
          user_id: 8,
          comment_id: 8,
          nickname: "Yonna",
          university: "首尔大学",
          lastLoginAt: "1 min 34 sec ago",
          comment:
            "hi subeen. ur name remind me of korean drama at eighteen, the name of the main role is yoo soo bin :D hope we can be friend :)",
          photo:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569658860&di=f4d738760b420cc3883d8253252d8e48&imgtype=jpg&er=1&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201411%2F08%2F20141108083126_QARVZ.jpeg"
        },
        {
          user_id: 9,
          comment_id: 9,
          nickname: "Yonna",
          university: "中央民族大学",
          lastLoginAt: "1 min 14 sec ago",
          comment:
            "hi subeen. ur name remind me of korean drama at eighteen, the name of the main role is yoo soo bin :D hope we can be friend :)",
          photo:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4176040192,3002869256&fm=26&gp=0.jpg"
        }
      ],
      textarea: "",
      user: {
        username: "金智媛",
        userId: 11638888,
        photo:
          "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569063950234&di=f9e666fa5b2219e12cd1e0119b6a692d&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201406%2F03%2F20140603205522_ZirQE.thumb.600_0.jpeg",
        homeCountry: "China",
        birthCountry: "China",
        age: "17",
        sex: "女",
        school: "中南大学",
        major: "计算机科学与技术",
        lookingForSex: "Female/Male",
        ageBetweenFrom: 16,
        ageBetweenTo: 25,
        messageCount: 0,
        introduction:
          "你好，简单介绍一下:我是一名法语专业的学生。更重要的是，散打(拳击的一种形式)是我的新爱好!我想找一个笔友，我可以和他交朋友。在中国,我们总是相信命运(缘分),我也是,因为我们遇到的命运!最后，如果你想知道更多和我聊天，你可以发邮件给我2314147149@qq.com。",
        joinDate: "Aug 14,2019",
        viewTimes: 888,
        lastLogTime: "6 minutes"
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
  font-size: 36px;
  text-align: left;
  margin: 10px 0px;
}
.littleTitle {
  text-align: left;
  margin: 10px 0;
}
.cardTitle {
  text-align: left;
  margin: 10px 20px;
}

.profileTitle {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-style: bold;
  font-size: 36px;
  text-align: left;
  float: left;
}

.introduction {
  text-align: left;
}
.commentCard {
}
.commentCard-title {
  text-align: left;
}
.commentCard-p {
  text-align: left;
}
.friendsCard-title {
  margin: 5px;
}
</style>