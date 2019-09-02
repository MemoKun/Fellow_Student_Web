<template>
  <div class="container" style="padding:100px">
    <el-card class="box-card" body-style="padding:40px">
      <h1>Welcome!</h1>
      <el-row :gutter="20">
        <el-col :span="12">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="12">
          <h2>最近登录的用户</h2>
          <div class="container" v-for="item in lastLoginUsers" :key="item.user_id">
            <el-col :span="6" style="padding: 20px;">
              <el-card :body-style="{ padding: '0px' }">
                <img
                  :src="item.photo"
                  class="image"
                />
                <div style="padding: 14px;">
                  <span>{{item.nickname}}</span>
                  <p>{{item.university}}</p>
                </div>
              </el-card>
            </el-col>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="8">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple"></div>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="4">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="16">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple"></div>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<style>
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>

<script>
export default {
  data() {
    return {
      fits: ["fill", "contain", "cover", "none", "scale-down"],
      url:
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
        lastLoginUsers:[
          {
            user_id:1,
            nickname:"金智媛",
            university:"清华大学",
            lastLoginAt:"",
            photo:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567416535125&di=d6f2d99ef3fcf7e7fc31dbdf443eeaf3&imgtype=0&src=http%3A%2F%2Fstatic.pig66.com%2Fuploadfile%2F2017%2F0706%2F20170706034955516.jpg",
          },
          {
            user_id:2,
            nickname:"Yonna",
            university:"北京大学",
            lastLoginAt:"",
            photo:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567416512457&di=854252c4b4be69a2537c47300bec0eef&imgtype=0&src=http%3A%2F%2Fstatic.pig66.com%2Fuploadfile%2F2017%2F0706%2F20170706035051965.jpg",
          },
          {
            user_id:3,
            nickname:"Yonna",
            university:"中南大学",
            lastLoginAt:"",
            photo:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567416535125&di=3e38867474179c9a803fc71b3ff45a7d&imgtype=0&src=http%3A%2F%2Fimg3.kuwo.cn%2Fstar%2Fuserhead%2F76%2F57%2F1486864026485_230608776.jpg",
          },
          {
            user_id:4,
            nickname:"Yonna",
            university:"中国人民大学",
            lastLoginAt:"",
            photo:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3337547610,1389828697&fm=26&gp=0.jpg",
          },
          {
            user_id:5,
            nickname:"Yonna",
            university:"中央民族大学",
            lastLoginAt:"",
            photo:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567416535125&di=896599a1ca6df02dbe3108c105696a15&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201611%2F11%2F20161111142253_KJ4kV.jpeg",
          },
          {
            user_id:6,
            nickname:"Yonna",
            university:"武汉大学",
            lastLoginAt:"",
            photo:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567416678784&di=beb67f3b7debd944b16b3697f07f54b4&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F014a7c59522cd4a8012193a3ba5a38.jpg%401280w_1l_2o_100sh.jpg",
          },
          {
            user_id:7,
            nickname:"Yonna",
            university:"延世大学",
            lastLoginAt:"",
            photo:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567416535123&di=1fa4c760e1749c6533693a12a15bac9b&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201610%2F07%2F20161007212756_W5KaS.jpeg",
          },
          {
            user_id:8,
            nickname:"Yonna",
            university:"首尔大学",
            lastLoginAt:"",
            photo:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567416718549&di=925ec025bc61d948ec8a953a78f9c790&imgtype=jpg&src=http%3A%2F%2Fimg4.imgtn.bdimg.com%2Fit%2Fu%3D2256597494%2C2632907235%26fm%3D214%26gp%3D0.jpg",
          },
        ]
    };
  }
};
</script>
