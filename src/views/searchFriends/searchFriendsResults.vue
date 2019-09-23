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
            <el-card class="box-card" style="padding:10px;">
              <el-col :span="6">
                <img style="width:100%;height:300px;" :src="item.photo" />
              </el-col>
              <el-col :span="17" :push="1">
                <el-row>
                  <h3 style="float:left">{{item.nickname}}</h3>
                  <h4 style="float:left">{{item.university}}</h4>
                  <h5 style="float:right">2019年3月23日</h5>
                </el-row>
                <el-row>
                  <div class="introduction" style="width: auto;text-align: left;text-indent: 2em;display: -webkit-box;-webkit-line-clamp: 2;overflow: hidden;text-overflow: ellipsis;-webkit-box-orient: vertical;">
                  <p style="margin:0">“{{item.self_introduction}}”</p>
                  </div>
                </el-row>
                <el-row style="margin-top:16px;">
                  <el-card style="height:60px;" :body-style="{height:'60px'}">
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
                          style="float:right;margin:0px;padding-top: 5px;"
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
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569063950234&di=f9e666fa5b2219e12cd1e0119b6a692d&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201406%2F03%2F20140603205522_ZirQE.thumb.600_0.jpeg"
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
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569658749&di=d621e95842f713f897d1c9f9d14160bc&imgtype=jpg&er=1&src=http%3A%2F%2Fcdn.duitang.com%2Fuploads%2Fitem%2F201507%2F27%2F20150727151430_E5CS4.thumb.700_0.jpeg"
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
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569218053597&di=00d61280e892d0f0fdf32eeda5ab1fcf&imgtype=0&src=http%3A%2F%2Fimg4q.duitang.com%2Fuploads%2Fitem%2F201411%2F20%2F20141120170055_cKStw.jpeg"
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
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569064081142&di=50668130821b13405f195658dc4506d4&imgtype=0&src=http%3A%2F%2Fcdn.duitang.com%2Fuploads%2Fitem%2F201407%2F24%2F20140724190906_MCkXs.thumb.700_0.jpeg"
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
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3284581089,709717092&fm=26&gp=0.jpg"
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
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1743168392,2407869980&fm=26&gp=0.jpg"
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
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1392078492,1897050294&fhttps://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1392078492,1897050294&fm=26&gp=0.jpgm=26&gp=0.jpg"
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
<style scoped>
.introducton {
overflow: hidden;
text-overflow:ellipsis;
white-space: nowrap;
}
</style>