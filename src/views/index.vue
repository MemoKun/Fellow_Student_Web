<template>
  <div class="container" style="padding:100px">
    <el-card class="box-card" body-style="padding:40px">
      <div class="container" style="margin:40px">
        <el-row :gutter="20">
          <div class="container" style="padding:40px">
            <h1>强劲、强大、资源丰富</h1>
            <h2 style="color:black">面向双一流高校（985、211工程）开放的顶尖高校社区。</h2>
            <h2 style="color:black">Expertise Community 为你提供各大高校课程、考试资源。</h2>
            <h2 style="color:black">强大的Search功能帮你轻松找到不同学校、不同专业的同学。</h2>
          </div>
        </el-row>
        <!-- <h1>寻找你的伙伴</h1> -->
        <el-divider content-position="center">开启你的Fellow之旅</el-divider>
        <el-row :gutter="20">
          <el-col :span="12">
            <div class="container" style="margin:20px">
              <el-card class="box-card" body-style="padding:40px">
                <h2>Quick Search</h2>
                <el-form v-model="searchConditions" label-position="right" label-width="100px">
                  <el-form-item label="性别">
                    <el-radio-group v-model="searchConditions.gender">
                      <el-radio label="男"></el-radio>
                      <el-radio label="女"></el-radio>
                    </el-radio-group>
                  </el-form-item>
                  <el-form-item label="年龄">
                    <el-col :span="10">
                      <el-input v-model="searchConditions.age_from"></el-input>
                    </el-col>
                    <el-col class="line" :span="4">至</el-col>
                    <el-col :span="10">
                      <el-input v-model="searchConditions.age_to"></el-input>
                    </el-col>
                  </el-form-item>
                  <el-form-item label="学校与专业">
                    <el-col :span="20">
                      <!-- <el-select></el-select> -->
                    </el-col>
                  </el-form-item>
                  <el-form-item label="用户条件">
                    <el-checkbox-group v-model="searchConditions.otherConditions">
                      <el-checkbox label="照片" name="otherConditions"></el-checkbox>
                      <el-checkbox label="个人介绍" name="otherConditions"></el-checkbox>
                      <el-checkbox label="通过学生认证" name="otherConditions"></el-checkbox>
                      <el-checkbox label="Fellow Prime会员" name="otherConditions"></el-checkbox>
                    </el-checkbox-group>
                  </el-form-item>
                  <el-form-item label="搜索结果排序">
                    <el-radio-group v-model="searchConditions.orderBy">
                      <el-radio label="上次登录时间"></el-radio>
                      <el-radio label="注册日期"></el-radio>
                    </el-radio-group>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" @click="startSearch">Find Fellow</el-button>
                  </el-form-item>
                </el-form>
              </el-card>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="container" style="margin:20px">
              <h2>最近登录的用户</h2>

              <div class="container">
                <el-row v-for="(i,index) in (Math.ceil((lastLoginUsers.length / 4)))" :key="index">
                  <el-col
                    :span="6"
                    style="padding: 3px;"
                    v-for="(item,index) in lastLoginUsers"
                    v-show="(i - 1) * 4 <= index && index < i * 4"
                    :key="index"
                  >
                    <el-card :body-style="{ padding: '0px' }">
                      <img :src="item.photo" class="image" />
                      <div style="padding: 5px;">
                        <span style="font-size:5px;">{{item.nickname}}</span>
                        <span style="font-size:5px">{{item.university}}</span>
                        <br>
                        <span style="font-size:5px">{{item.lastLoginAt}}</span>
                      </div>
                    </el-card>
                  </el-col>
                </el-row>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item title="一致性 Consistency" name="1">
              <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
              <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
            </el-collapse-item>
            <el-collapse-item title="反馈 Feedback" name="2">
              <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
              <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
            </el-collapse-item>
            <el-collapse-item title="效率 Efficiency" name="3">
              <div>简化流程：设计简洁直观的操作流程；</div>
              <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
              <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
            </el-collapse-item>
            <el-collapse-item title="可控 Controllability" name="4">
              <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
              <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
            </el-collapse-item>
          </el-collapse>
        </el-row>
      </div>
    </el-card>
  </div>
</template>

<style scoped>
.el-row {
  margin-bottom: 20px;
  /* &:last-child {
    margin-bottom: 0;
  } */
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
h1 {
  font-size: 48px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: black;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>

<script>
export default {
  data() {
    return {
      fits: ["fill", "contain", "cover", "none", "scale-down"],
      url:
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
      lastLoginUsers: [
        {
          user_id: 1,
          nickname: "金智媛",
          university: "清华大学",
          lastLoginAt: "14 sec ago",
          photo:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569063950234&di=f9e666fa5b2219e12cd1e0119b6a692d&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201406%2F03%2F20140603205522_ZirQE.thumb.600_0.jpeg"
        },
        {
          user_id: 2,
          nickname: "Yonna",
          university: "北京大学",
          lastLoginAt: "18 sec ago",
          photo:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569658749&di=d621e95842f713f897d1c9f9d14160bc&imgtype=jpg&er=1&src=http%3A%2F%2Fcdn.duitang.com%2Fuploads%2Fitem%2F201507%2F27%2F20150727151430_E5CS4.thumb.700_0.jpeg"
        },
        {
          user_id: 3,
          nickname: "Yonna",
          university: "中南大学",
          lastLoginAt: "24 sec ago",
          photo:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569218053597&di=00d61280e892d0f0fdf32eeda5ab1fcf&imgtype=0&src=http%3A%2F%2Fimg4q.duitang.com%2Fuploads%2Fitem%2F201411%2F20%2F20141120170055_cKStw.jpeg"
        },
        {
          user_id: 4,
          nickname: "Yonna",
          university: "中国人民大学",
          lastLoginAt: "31 sec ago",
          photo:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569064081142&di=50668130821b13405f195658dc4506d4&imgtype=0&src=http%3A%2F%2Fcdn.duitang.com%2Fuploads%2Fitem%2F201407%2F24%2F20140724190906_MCkXs.thumb.700_0.jpeg"
        },
        {
          user_id: 5,
          nickname: "Yonna",
          university: "中央民族大学",
          lastLoginAt: "1 min 14 sec ago",
          photo:
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3284581089,709717092&fm=26&gp=0.jpg"
        },
        {
          user_id: 6,
          nickname: "Yonna",
          university: "武汉大学",
          lastLoginAt: "1 min 26 sec ago",
          photo:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1743168392,2407869980&fm=26&gp=0.jpg"
        },
        {
          user_id: 7,
          nickname: "Yonna",
          university: "延世大学",
          lastLoginAt: "1 min 29 sec ago",
          photo:
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1392078492,1897050294&fm=26&gp=0.jpg"
        },
        {
          user_id: 8,
          nickname: "Yonna",
          university: "首尔大学",
          lastLoginAt: "1 min 34 sec ago",
          photo:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569658860&di=f4d738760b420cc3883d8253252d8e48&imgtype=jpg&er=1&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201411%2F08%2F20141108083126_QARVZ.jpeg"
        },
        {
          user_id: 9,
          nickname: "Yonna",
          university: "中央民族大学",
          lastLoginAt: "1 min 14 sec ago",
          photo:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4176040192,3002869256&fm=26&gp=0.jpg"
        },
        {
          user_id: 10,
          nickname: "Yonna",
          university: "武汉大学",
          lastLoginAt: "1 min 26 sec ago",
          photo:
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1476095006,2188158271&fm=26&gp=0.jpg"
        },
        {
          user_id: 11,
          nickname: "Yonna",
          university: "延世大学",
          lastLoginAt: "1 min 29 sec ago",
          photo:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569218725789&di=9c00b6dc70418ca1bf5bfcd6254e961c&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201806%2F21%2F20180621210646_mmltp.thumb.700_0.jpg"
        },
        {
          user_id: 12,
          nickname: "Yonna",
          university: "首尔大学",
          lastLoginAt: "1 min 34 sec ago",
          photo:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1004963647,1607232271&fm=26&gp=0.jpg"
        },
        {
          user_id: 13,
          nickname: "Yonna",
          university: "中央民族大学",
          lastLoginAt: "1 min 14 sec ago",
          photo:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569218563776&di=2f13cfde907b4f7b48ac548d274b1143&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201504%2F09%2F20150409H4542_GVEAm.jpeg"
        },
        {
          user_id: 14,
          nickname: "Yonna",
          university: "武汉大学",
          lastLoginAt: "1 min 26 sec ago",
          photo:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569218563775&di=36090be434652bfefca531cac1466004&imgtype=0&src=http%3A%2F%2Fcdn.duitang.com%2Fuploads%2Fitem%2F201410%2F16%2F20141016202155_5ycRZ.thumb.700_0.jpeg"
        },
        {
          user_id: 15,
          nickname: "Yonna",
          university: "延世大学",
          lastLoginAt: "1 min 29 sec ago",
          photo:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569218563773&di=1b3a16838aa6c10c4454944648e1d91e&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201608%2F30%2F20160830123527_ZQmWf.jpeg"
        },
        {
          user_id: 16,
          nickname: "Yonna",
          university: "首尔大学",
          lastLoginAt: "1 min 34 sec ago",
          photo:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569218725789&di=f3d2ffa1628b877d975d842a2f39a583&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201511%2F20%2F20151120171114_LkFSi.thumb.700_0.jpeg"
        },
        {
          user_id: 17,
          nickname: "Yonna",
          university: "中央民族大学",
          lastLoginAt: "1 min 14 sec ago",
          photo:
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3284581089,709717092&fm=26&gp=0.jpg"
        },
        {
          user_id: 18,
          nickname: "Yonna",
          university: "武汉大学",
          lastLoginAt: "1 min 26 sec ago",
          photo:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1743168392,2407869980&fm=26&gp=0.jpg"
        },
        {
          user_id: 19,
          nickname: "Yonna",
          university: "延世大学",
          lastLoginAt: "1 min 29 sec ago",
          photo:
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1392078492,1897050294&fm=26&gp=0.jpg"
        },
        {
          user_id: 20,
          nickname: "Yonna",
          university: "首尔大学",
          lastLoginAt: "1 min 34 sec ago",
          photo:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569658860&di=f4d738760b420cc3883d8253252d8e48&imgtype=jpg&er=1&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201411%2F08%2F20141108083126_QARVZ.jpeg"
        }
      ],
      searchConditions: {
        otherConditions: []
      },
      value: [],
      options: [
        {
          value: "zhinan",
          label: "指南",
          children: [
            {
              value: "shejiyuanze",
              label: "设计原则",
              children: [
                {
                  value: "yizhi",
                  label: "一致"
                },
                {
                  value: "fankui",
                  label: "反馈"
                },
                {
                  value: "xiaolv",
                  label: "效率"
                },
                {
                  value: "kekong",
                  label: "可控"
                }
              ]
            },
            {
              value: "daohang",
              label: "导航",
              children: [
                {
                  value: "cexiangdaohang",
                  label: "侧向导航"
                },
                {
                  value: "dingbudaohang",
                  label: "顶部导航"
                }
              ]
            }
          ]
        },
        {
          value: "zujian",
          label: "组件",
          children: [
            {
              value: "basic",
              label: "Basic",
              children: [
                {
                  value: "layout",
                  label: "Layout 布局"
                },
                {
                  value: "color",
                  label: "Color 色彩"
                },
                {
                  value: "typography",
                  label: "Typography 字体"
                },
                {
                  value: "icon",
                  label: "Icon 图标"
                },
                {
                  value: "button",
                  label: "Button 按钮"
                }
              ]
            },
            {
              value: "form",
              label: "Form",
              children: [
                {
                  value: "radio",
                  label: "Radio 单选框"
                },
                {
                  value: "checkbox",
                  label: "Checkbox 多选框"
                },
                {
                  value: "input",
                  label: "Input 输入框"
                },
                {
                  value: "input-number",
                  label: "InputNumber 计数器"
                },
                {
                  value: "select",
                  label: "Select 选择器"
                },
                {
                  value: "cascader",
                  label: "Cascader 级联选择器"
                },
                {
                  value: "switch",
                  label: "Switch 开关"
                },
                {
                  value: "slider",
                  label: "Slider 滑块"
                },
                {
                  value: "time-picker",
                  label: "TimePicker 时间选择器"
                },
                {
                  value: "date-picker",
                  label: "DatePicker 日期选择器"
                },
                {
                  value: "datetime-picker",
                  label: "DateTimePicker 日期时间选择器"
                },
                {
                  value: "upload",
                  label: "Upload 上传"
                },
                {
                  value: "rate",
                  label: "Rate 评分"
                },
                {
                  value: "form",
                  label: "Form 表单"
                }
              ]
            },
            {
              value: "data",
              label: "Data",
              children: [
                {
                  value: "table",
                  label: "Table 表格"
                },
                {
                  value: "tag",
                  label: "Tag 标签"
                },
                {
                  value: "progress",
                  label: "Progress 进度条"
                },
                {
                  value: "tree",
                  label: "Tree 树形控件"
                },
                {
                  value: "pagination",
                  label: "Pagination 分页"
                },
                {
                  value: "badge",
                  label: "Badge 标记"
                }
              ]
            },
            {
              value: "notice",
              label: "Notice",
              children: [
                {
                  value: "alert",
                  label: "Alert 警告"
                },
                {
                  value: "loading",
                  label: "Loading 加载"
                },
                {
                  value: "message",
                  label: "Message 消息提示"
                },
                {
                  value: "message-box",
                  label: "MessageBox 弹框"
                },
                {
                  value: "notification",
                  label: "Notification 通知"
                }
              ]
            },
            {
              value: "navigation",
              label: "Navigation",
              children: [
                {
                  value: "menu",
                  label: "NavMenu 导航菜单"
                },
                {
                  value: "tabs",
                  label: "Tabs 标签页"
                },
                {
                  value: "breadcrumb",
                  label: "Breadcrumb 面包屑"
                },
                {
                  value: "dropdown",
                  label: "Dropdown 下拉菜单"
                },
                {
                  value: "steps",
                  label: "Steps 步骤条"
                }
              ]
            },
            {
              value: "others",
              label: "Others",
              children: [
                {
                  value: "dialog",
                  label: "Dialog 对话框"
                },
                {
                  value: "tooltip",
                  label: "Tooltip 文字提示"
                },
                {
                  value: "popover",
                  label: "Popover 弹出框"
                },
                {
                  value: "card",
                  label: "Card 卡片"
                },
                {
                  value: "carousel",
                  label: "Carousel 走马灯"
                },
                {
                  value: "collapse",
                  label: "Collapse 折叠面板"
                }
              ]
            }
          ]
        },
        {
          value: "ziyuan",
          label: "资源",
          children: [
            {
              value: "axure",
              label: "Axure Components"
            },
            {
              value: "sketch",
              label: "Sketch Templates"
            },
            {
              value: "jiaohu",
              label: "组件交互文档"
            }
          ]
        }
      ]
    };
  },
  methods: {
    handleChange(value) {
      console.log(value);
    },
    startSearch() {
      console.log("startSearch");
    }
  }
};
</script>
