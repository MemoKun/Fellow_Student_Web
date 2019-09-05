<template>
  <div class="container" style="padding:100px">
    <el-card class="box-card" style="padding:40px">
      <el-row :gutter="20">
        <h1>Expertise Community</h1>
        <h2>强劲、强大、资源丰富的学习社区</h2>
      </el-row>
      <!-- 
        <el-row>
        <el-col :span="8" style="padding: 10px;" offset="8">
          <el-card class="box-card" style="width:100%;">
            <h3>点击按钮 获取密钥</h3>
            <el-input v-model="input" :placeholder="secretCode" label="密钥"></el-input>
            <el-button type="success" round style="margin:20px">获取密钥</el-button>
          </el-card>
        </el-col>
      </el-row>
      -->

      <el-row style="margin-bottom:20px">
        <el-col :span="12">
          <div class="container" style="padding:40px">
            <h1>推荐</h1>
            <h3>强大、强劲、资源丰富的学习资料</h3>
            <p>通过社区，你可以轻松和其他一流高校的同学进行交流，同时可以轻松获取其他高校的学习资料。同样的，你也有义务帮助大家一起收集这些材料，并把他们加入到高校的共享库中来。如果您认为其中的某些资源侵犯了您的权利，请您及时联系我们，我们将删除侵权资料并赔礼道歉。</p>
            <el-card class="box-card" style="width:100%;">
              <h3>点击按钮 获取密钥</h3>
              <el-input v-model="input" :placeholder="secretCode" label="密钥"></el-input>
              <el-button type="success" round style="margin:20px">获取密钥</el-button>
            </el-card>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="container" v-for="item in expertiseGroup" :key="item.id">
            <el-col :span="6" style="padding: 3px;">
              <el-card :body-style="{ padding: '0px' }" style="padding:20px">
                <img :src="item.groupQR" class="image" />
                <div style="padding: 14px;">
                  <span>{{item.groupName}}</span>
                  <span>{{item.groupId}}</span>
                </div>
              </el-card>
            </el-col>
          </div>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>
<style>
.el-col {
  border-radius: 4px;
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
      secretCode: "密钥",
      input:"",
      expertiseGroup: [
        {
          id: 1,
          groupId: 9928131221,
          groupName: "双一流A类学习交流群",
          groupQR:
            "https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=06c6e44988025aafd33279cdc3d6cc59/4a36acaf2edda3ccab0c1aa90be93901203f924b.jpg"
        },
        {
          id: 2,
          groupId: 9928131221,
          groupName: "双一流A类学习交流群",
          groupQR:
            "https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=06c6e44988025aafd33279cdc3d6cc59/4a36acaf2edda3ccab0c1aa90be93901203f924b.jpg"
        },
        {
          id: 3,
          groupId: 9928131221,
          groupName: "双一流A类学习交流群",
          groupQR:
            "https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=06c6e44988025aafd33279cdc3d6cc59/4a36acaf2edda3ccab0c1aa90be93901203f924b.jpg"
        },
        {
          id: 4,
          groupId: 9928131221,
          groupName: "双一流A类学习交流群",
          groupQR:
            "https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=06c6e44988025aafd33279cdc3d6cc59/4a36acaf2edda3ccab0c1aa90be93901203f924b.jpg"
        },
        {
          id: 5,
          groupId: 9928131221,
          groupName: "985211学习交流群",
          groupQR:
            "https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=06c6e44988025aafd33279cdc3d6cc59/4a36acaf2edda3ccab0c1aa90be93901203f924b.jpg"
        },
        {
          id: 6,
          groupId: 9928131221,
          groupName: "985211学习交流群",
          groupQR:
            "https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=06c6e44988025aafd33279cdc3d6cc59/4a36acaf2edda3ccab0c1aa90be93901203f924b.jpg"
        },
        {
          id: 7,
          groupId: 9928131221,
          groupName: "985211学习交流群",
          groupQR:
            "https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=06c6e44988025aafd33279cdc3d6cc59/4a36acaf2edda3ccab0c1aa90be93901203f924b.jpg"
        },
        {
          id: 8,
          groupId: 9928131221,
          groupName: "985211学习交流群",
          groupQR:
            "https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=06c6e44988025aafd33279cdc3d6cc59/4a36acaf2edda3ccab0c1aa90be93901203f924b.jpg"
        }
      ]
    };
  },
  methods: {}
};
</script>