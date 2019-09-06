<template>
  <div class="container" style="padding:100px">
    <el-card class="box-card" body-style="padding:40px">
      <el-row :gutter="20">
        <el-col :span="18" style="padding:20px">
          <h1 style="float:left">搜索结果</h1>
        </el-col>
      </el-row>
      <el-row>
        <div class="container" v-for="item in messages" :key="item.message_id" style="padding:10px">
          <el-col :span="18" style="padding:10px">
            <el-card class="box-card" style="padding:10px">
              <el-col :span="6">
                <img style="float:left;padding:20px" :src="item.photo" />
              </el-col>
              <el-col :span="18">
                <el-row>
                  <h3 style="float:left">{{item.nickname}}</h3>
                  <h4 style="float:left">{{item.university}}</h4>
                  <h5 style="float:right">2019年3月23日</h5>
                </el-row>
                <el-row>
                  <p>“{{item.self_introduction}}”</p>
                </el-row>
                <el-row>
                  <el-card style="box-card">
                    <el-row>
                      <el-col :span="8">
                        <p style="float:left;margin:0px">上次登录： {{item.last_login_at}}</p>
                      </el-col>
                      <el-col :span="8">
                        <p style="margin:0px">加入时间： {{item.created_at}}</p>
                      </el-col>
                      <el-col :span="8">
                        <el-button
                          type="text"
                          @click="readMessage()"
                          style="float:right;margin:0px"
                          round
                        >查看简历</el-button>
                      </el-col>
                    </el-row>
                  </el-card>
                </el-row>
              </el-col>
            </el-card>
          </el-col>
        </div>
      </el-row>
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
          last_login_at: "20分钟以前",
          self_introduction:
            "你好，简单介绍一下:我是一名法语专业的学生。更重要的是，散打(拳击的一种形式)是我的新爱好!我想找一个笔友，我可以和他交朋友。在中国,我们总是相信命运(缘分),我也是,因为我们遇到的命运!最后，如果你想知道更多和我聊天，你可以发邮件给我2314147149@qq.com。",
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
          self_introduction:
            "你好，我是Suby，一名中国大学生。我想在这个网站上交朋友或者找一些笔友来帮助我提高我的英语口语。我喜欢跳舞，听音乐，尤其是Kpop音乐。我喜欢Kpop偶像组合，我是BTS的超级粉丝。",
          last_login_at: "20min ago",
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
          self_introduction:
            "你好!我是唐娜。我一直在尝试新事物，游泳、滑板、网球、瑜伽……我知道我是一个情绪化的人，我真的希望有人倾听我，给我一些来自其他文化的全新想法。当然，我也很高兴能成为一个倾听者。你可以分享任何你想说的话，快乐或悲伤。我想有时陌生人会给我们一些惊人的帮助，我们很难找到从我们熟悉的人。这些天我的英语口语很差。我喜欢不同的语言，我正在准备学习西班牙语和韩语。但是我很高兴和你交朋友，不管你的母语是什么。我想帮助你学习普通话。我喜欢文学，电影，旅游。也许有一天我会访问你的国家，如果我有一个朋友在世界的另一个角落，那一定是一件很棒的事情。快乐!如果你想和我说话，请随时和我联系电子邮件:dongge@bfsu.edu.cnInstagram: dongge842facebook:董歌",
          last_login_at: "20min ago",
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
          self_introduction:
            "你好，简单介绍一下:我是一名法语专业的学生。更重要的是，散打(拳击的一种形式)是我的新爱好!我想找一个笔友，我可以和他交朋友。在中国,我们总是相信命运(缘分),我也是,因为我们遇到的命运!最后，如果你想知道更多和我聊天，你可以发邮件给我2314147149@qq.com。",
          last_login_at: "20min ago",
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
          self_introduction:
            "你好，简单介绍一下:我是一名法语专业的学生。更重要的是，散打(拳击的一种形式)是我的新爱好!我想找一个笔友，我可以和他交朋友。在中国,我们总是相信命运(缘分),我也是,因为我们遇到的命运!最后，如果你想知道更多和我聊天，你可以发邮件给我2314147149@qq.com。",
          last_login_at: "20min ago",
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
          self_introduction:
            "你好，简单介绍一下:我是一名法语专业的学生。更重要的是，散打(拳击的一种形式)是我的新爱好!我想找一个笔友，我可以和他交朋友。在中国,我们总是相信命运(缘分),我也是,因为我们遇到的命运!最后，如果你想知道更多和我聊天，你可以发邮件给我2314147149@qq.com。",
          last_login_at: "20min ago",
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
          self_introduction:
            "你好，简单介绍一下:我是一名法语专业的学生。更重要的是，散打(拳击的一种形式)是我的新爱好!我想找一个笔友，我可以和他交朋友。在中国,我们总是相信命运(缘分),我也是,因为我们遇到的命运!最后，如果你想知道更多和我聊天，你可以发邮件给我2314147149@qq.com。",
          last_login_at: "20min ago",
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
          self_introduction:
            "你好，简单介绍一下:我是一名法语专业的学生。更重要的是，散打(拳击的一种形式)是我的新爱好!我想找一个笔友，我可以和他交朋友。在中国,我们总是相信命运(缘分),我也是,因为我们遇到的命运!最后，如果你想知道更多和我聊天，你可以发邮件给我2314147149@qq.com。",
          last_login_at: "20min ago",
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