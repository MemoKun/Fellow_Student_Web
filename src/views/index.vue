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
                      <div style="padding: 14px;">
                        <span>{{item.nickname}}</span>
                        <p>{{item.university}}</p>
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
      activeNames:"",
      url:
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
      lastLoginUsers: [
        {
          user_id: 1,
          nickname: "金智媛",
          university: "清华大学",
          lastLoginAt: "",
          photo:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567416535125&di=d6f2d99ef3fcf7e7fc31dbdf443eeaf3&imgtype=0&src=http%3A%2F%2Fstatic.pig66.com%2Fuploadfile%2F2017%2F0706%2F20170706034955516.jpg"
        },
        {
          user_id: 2,
          nickname: "Yonna",
          university: "北京大学",
          lastLoginAt: "",
          photo:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567416512457&di=854252c4b4be69a2537c47300bec0eef&imgtype=0&src=http%3A%2F%2Fstatic.pig66.com%2Fuploadfile%2F2017%2F0706%2F20170706035051965.jpg"
        },
        {
          user_id: 3,
          nickname: "Yonna",
          university: "中南大学",
          lastLoginAt: "",
          photo:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567416535125&di=3e38867474179c9a803fc71b3ff45a7d&imgtype=0&src=http%3A%2F%2Fimg3.kuwo.cn%2Fstar%2Fuserhead%2F76%2F57%2F1486864026485_230608776.jpg"
        },
        {
          user_id: 4,
          nickname: "Yonna",
          university: "中国人民大学",
          lastLoginAt: "",
          photo:
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3337547610,1389828697&fm=26&gp=0.jpg"
        },
        {
          user_id: 5,
          nickname: "Yonna",
          university: "中央民族大学",
          lastLoginAt: "",
          photo:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567416535125&di=896599a1ca6df02dbe3108c105696a15&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201611%2F11%2F20161111142253_KJ4kV.jpeg"
        },
        {
          user_id: 6,
          nickname: "Yonna",
          university: "武汉大学",
          lastLoginAt: "",
          photo:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567416678784&di=beb67f3b7debd944b16b3697f07f54b4&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F014a7c59522cd4a8012193a3ba5a38.jpg%401280w_1l_2o_100sh.jpg"
        },
        {
          user_id: 7,
          nickname: "Yonna",
          university: "延世大学",
          lastLoginAt: "",
          photo:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567416535123&di=1fa4c760e1749c6533693a12a15bac9b&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201610%2F07%2F20161007212756_W5KaS.jpeg"
        },
        {
          user_id: 8,
          nickname: "Yonna",
          university: "首尔大学",
          lastLoginAt: "",
          photo:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567416718549&di=925ec025bc61d948ec8a953a78f9c790&imgtype=jpg&src=http%3A%2F%2Fimg4.imgtn.bdimg.com%2Fit%2Fu%3D2256597494%2C2632907235%26fm%3D214%26gp%3D0.jpg"
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
