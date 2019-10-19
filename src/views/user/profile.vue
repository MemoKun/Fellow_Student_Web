<template>
  <div class="container" style="padding:100px">
    <el-card class="box-card" body-style="padding:60px">
      <el-row>
        <span class="profileTitle">{{user.username}}的简历</span>
        <el-link type="primary" style="font-style:italic;float:right;font-size:16px;">返回搜索列表</el-link>
      </el-row>
      <el-row class="infoCardRow">
        <p style="float:left;">(userID: {{user.userId}})</p>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-card>
            <img :src="user.photo" style="width:100%;" />
            <el-row>
              <span class="infoCardTitle1">{{user.username}}</span>
            </el-row>
            <el-row class="infoCardRow">
              <el-col :span="12">
                <span class="infoCardTitle2">年龄：{{user.age}} 岁</span>
              </el-col>
              <el-col :span="12">
                <span class="infoCardTitle2">性别：{{user.sex}}</span>
              </el-col>
            </el-row>
            <el-row class="infoCardRow">
              <el-col :span="12">
                <span class="infoCardTitle2">家乡：</span>
                <el-button
                  size="mini"
                  style="float:left;text-align:center"
                  type="primary"
                  plain
                >{{user.homeCity}}</el-button>
              </el-col>
              <el-col :span="12">
                <span class="infoCardTitle2">现居：</span>
                <el-button
                  size="mini"
                  style="float:left;text-align:center"
                  type="primary"
                  plain
                >{{user.livingCity}}</el-button>
              </el-col>
            </el-row>
            <el-row class="infoCardRow">
              <el-col :span="12">
                <span class="infoCardTitle2">学校：</span>
                <el-button
                  size="mini"
                  style="float:left;text-align:center"
                  type="primary"
                  plain
                >{{user.school}}</el-button>
              </el-col>
              <el-col :span="12">
                <span class="infoCardTitle2">专业：</span>
                <el-button
                  size="mini"
                  style="float:left;text-align:center"
                  type="primary"
                  plain
                >{{user.major}}</el-button>
              </el-col>
            </el-row>
            <el-row class="infoCardRow">
              <span class="infoCardTitle2">简历被浏览了 {{user.viewTimes}} 次</span>
            </el-row>
            <el-row class="infoCardRow">
              <span class="infoCardTitle2">上一次登录是在 {{user.lastLogTime}} 以前</span>
            </el-row>
            <el-row class="infoCardRow">
              <el-button type="primary" v-if="addFlag" icon="el-icon-star-off" round>添加收藏</el-button>
              <el-button type="success" v-if="addFlag" icon="el-icon-star-off" round>申请好友</el-button>
            </el-row>
          </el-card>
        </el-col>
        <el-col :span="10">
          <div class="container" style="margin-left:40px">
            <el-tabs v-model="activeName" @tab-click="handleClick">
              <el-tab-pane label="关于自己" name="first">
                <p class="introduction">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;“{{user.introduction}} ”</p>
              </el-tab-pane>
              <el-tab-pane label="科研竞赛" name="second">
                <el-table :data="researchAndCompetition" stripe style="width: 100%">
                  <el-table-column prop="date" label="时间"></el-table-column>
                  <el-table-column prop="name" label="比赛名称"></el-table-column>
                  <el-table-column prop="prize" label="奖项或名次"></el-table-column>
                </el-table>
              </el-tab-pane>

              <el-tab-pane label="学生干部" name="third">
                <el-table :data="studentCadre" stripe style="width: 100%">
                  <el-table-column prop="dateStart" label="开始"></el-table-column>
                  <el-table-column prop="dateEnd" label="结束"></el-table-column>
                  <el-table-column prop="organization" label="单位"></el-table-column>
                  <el-table-column prop="position" label="职务"></el-table-column>
                </el-table>
              </el-tab-pane>
              <el-tab-pane label="工作经历" name="forth">
                <el-table :data="workExperience" stripe style="width: 100%">
                  <el-table-column prop="dateStart" label="开始"></el-table-column>
                  <el-table-column prop="dateEnd" label="结束"></el-table-column>
                  <el-table-column prop="organization" label="单位"></el-table-column>
                  <el-table-column prop="position" label="职务"></el-table-column>
                </el-table>
              </el-tab-pane>
            </el-tabs>
          </div>
        </el-col>
        <el-col :span="6">
          <div style="margin-left:20px">
            <el-row style="margin-bottom:20px">
              <h3>发一封消息吧！</h3>
            </el-row>
            <el-row>
              <el-input
                type="textarea"
                :rows="12"
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
      <el-row>
        <el-col :span="8">
          <h1>她的朋友</h1>
          <div class="container">
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
          </div>
        </el-col>
        <el-col :span="10">
          <h1>留言</h1>
          <div class="container" v-for="item in comments" :key="item.comment_id">
            <el-card style="margin:20px" :body-style="{ padding: '0px' }" span="8">
              <el-col :span="6">
                <div style="margin:0px">
                  <img :src="item.photo" style="width:100%;margin:0px;" />
                </div>
              </el-col>
              <el-col :span="18">
                <el-row style="margin:10px">
                  <el-link type="primary" style="float:left">
                    <span class="commentCard-title">{{item.nickname}}</span>
                  </el-link>
                  <br />
                  <span class="commentCard-p">&nbsp;&nbsp;&nbsp;&nbsp;{{item.comment}}</span>
                </el-row>
              </el-col>
            </el-card>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="container" style="margin:20px">
            <h4>有什么想说的话，就留言吧</h4>
            <el-input
              type="textarea"
              :autosize="{ minRows: 8, maxRows: 12}"
              placeholder="请输入内容"
              v-model="textarea2"
              maxlength="60"
              show-word-limit
              style="margin-bottom:20px"
            ></el-input>
            <el-button
              type="primary"
              icon="el-icon-chat-dot-round"
              round
              style="margin-bottom:20px"
            >留言</el-button>
            <el-alert
              title="提示与帮助"
              type="warning"
            >You might be automatically logged out if you type for more than 20 minutes. We're working on fixing this. In the meanwhile please copy your finished text before you send it. That way, if you get logged out, you can log back in, come back to this page and paste it back. We apologize for this.</el-alert>
          </div>
        </el-col>
      </el-row>
    </el-card>
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
          comment:
            "Hi,subeen. ur name remind me of korean drama at eighteen, the name of the main role is yoo soo bin :D hope we can be friend :)",
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
            "Hi,subeen. ur name remind me of korean drama at eighteen, the name of the main role is yoo soo bin :D hope we can be friend :)",
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
        homeCity: "山东省日照市",
        livingCity: "湖南省长沙市",
        age: "17",
        sex: "女",
        school: "中南大学",
        major: "计算机科学与技术",
        lookingForSex: "Female/Male",
        ageBetweenFrom: 16,
        ageBetweenTo: 25,
        messageCount: 0,
        introduction:
          "你好，简单介绍一下:我是一名法语专业的学生。更重要的是，散打(拳击的一种形式)是我的新爱好!我想找一个笔友，我可以和他交朋友。在中国,我们总是相信命运(缘分),我也是,因为我们遇到的命运!最后，如果你想知道更多和我聊天，你可以发邮件给我2314147149@qq.com。Holle,I am Winnie,nice to meet you.I am Cantonese and I am studying in a unniversity of Shanghai now.Please forgive my poor English.I will try my best to express myself accurately.I would like to learn about cultures around the world.I also want to know about the lives of people in other countries.I am curious.Is your life the same as ours?If you are willing to share your life or any idea with me,please write me a message.I will get back to you as soon as possible.",
        joinDate: "Aug 14,2019",
        viewTimes: 888,
        lastLogTime: "6 minutes"
      },
      workExperience: [
        {
          dateStart: "2016-05-02",
          dateEnd: "2016-05-02",
          position: "产品经理",
          organization: "深圳市腾讯计算机系统有限公司"
        },
        {
          dateStart: "2016-05-02",
          dateEnd: "2016-05-02",
          position: "投资银行部经理",
          organization: "高盛投资亚洲分部"
        },
        {
          dateStart: "2016-05-02",
          dateEnd: "2016-05-02",
          position: "咨询顾问",
          organization: "麦肯锡咨询公司"
        },
        {
          dateStart: "2016-05-02",
          dateEnd: "2016-05-02",
          position: "副总裁",
          organization: "IBM"
        }
      ],
      studentCadre: [
        {
          dateStart: "2016-05-02",
          dateEnd: "2016-05-02",
          position: "年级长",
          organization: "中南大学计算机学院"
        },
        {
          dateStart: "2016-05-02",
          dateEnd: "2016-05-02",
          position: "班长",
          organization: "中南大学计算机学院软件1702班"
        },
        {
          dateStart: "2016-05-02",
          dateEnd: "2016-05-02",
          position: "副主席",
          organization: "中南大学计算机学院科协"
        },
        {
          dateStart: "2016-05-02",
          dateEnd: "2016-05-02",
          position: "主席",
          organization: "中南大学计算机学院科协"
        }
      ],
      researchAndCompetition: [
        {
          date: "2016-05-02",
          name: "互联网+全国大学生创新创业大赛",
          prize: "金奖"
        },
        {
          date: "2016-05-02",
          name: "Kaggle",
          prize: "金奖"
        },
        {
          date: "2016-05-02",
          name: "阿里云天池赛",
          prize: "第一名"
        },
        {
          date: "2016-05-02",
          name: "CCF大数据竞赛",
          prize: "第一名"
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
<style scoped>
.profileTitle {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-style: bold;
  font-size: 36px;
  text-align: left;
  float: left;
  margin-bottom: 10px;
}
.infoCardTitle1 {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 22px;
  text-align: center;
  float: center;
}
.infoCardTitle2 {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 16px;
  text-align: left;
  float: left;
}
.infoCardRow {
  margin: 8px;
}
.introduction {
  text-align: left;
  margin: 16px;
  font-size: 18px;
}
.commentCard {
}
.commentCard-title {
  font-size: 18px;
  float: left;
  text-align: left;
}
.commentCard-p {
  text-align: left;
  float: left;
}
.friendsCard-title {
  margin: 2px;
  font-size: 12px;
}
</style>