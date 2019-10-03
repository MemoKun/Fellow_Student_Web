<template>
  <div :style="backgroundStyle">
    <el-row>
      <el-col :span="20" :offset="2">
        <div>
          <el-row>
            <el-card style="margin-top:50px;margin-bottom:50px">
              <el-row>
                <el-col :span="7">
                  <div class="container" style="margin:20px">
                    <div>
                      <el-row>
                        <el-row>
                          <span class="welcomeTitle">Hi，{{currentUser.nickname}}</span>
                        </el-row>
                        <el-row>
                          <span class="welcomeTitle2">欢迎回到Fellow社区~</span>
                        </el-row>
                        <el-row>
                          <span class="todoTitle">你可以做以下事情：</span>
                        </el-row>
                        <el-row>
                          <div>
                            <el-row>
                              <el-link class="todoContent">
                                <i class="el-icon-message"></i>检查一下自己的信箱
                              </el-link>
                            </el-row>
                            <el-row>
                              <el-link class="todoContent">
                                <i class="el-icon-chat-dot-round"></i>看看别人给你的留言
                              </el-link>
                            </el-row>
                            <el-row>
                              <el-link class="todoContent">
                                <i class="el-icon-view"></i>看看谁看过你的简历
                              </el-link>
                            </el-row>
                            <el-row>
                              <el-link class="todoContent">
                                <i class="el-icon-folder-opened"></i>浏览一下你收藏的简历
                              </el-link>
                            </el-row>
                            <el-row>
                              <el-link class="todoContent">
                                <i class="el-icon-search"></i>找寻其他的Fellow好友
                              </el-link>
                            </el-row>
                          </div>
                        </el-row>
                        <el-row>
                          <span class="todoTitle">我们推荐你：</span>
                        </el-row>
                        <el-row>
                          <div>
                            <el-row>
                              <el-link class="todoContent">
                                <i class="el-icon-star-off"></i>写一份漂亮的自我介绍
                              </el-link>
                            </el-row>
                            <el-row>
                              <el-link class="todoContent">
                                <i class="el-icon-star-off"></i>完善自己的竞赛、科研、工作经历
                              </el-link>
                            </el-row>
                            <el-row>
                              <el-link class="todoContent">
                                <i class="el-icon-star-off"></i>上传一张你的真人照片
                              </el-link>
                            </el-row>
                            <el-row>
                              <el-link class="todoContent">
                                <i class="el-icon-star-off"></i>加入一个理想的组织
                              </el-link>
                            </el-row>
                            <el-row>
                              <el-link class="todoContent">
                                <i class="el-icon-user"></i>写清楚你的名字或者昵称
                              </el-link>
                            </el-row>
                            <el-row>
                              <el-link class="todoContent">
                                <i class="el-icon-s-home"></i>告诉大家你的家乡或现居的城市
                              </el-link>
                            </el-row>
                            <el-row>
                              <el-link class="todoContent">
                                <i class="el-icon-setting"></i>定期修改密码
                              </el-link>
                            </el-row>
                          </div>
                        </el-row>
                        <el-row>
                          <span class="todoTitle">成为Prime会员：</span>
                        </el-row>
                        <el-row>
                          <div>
                            <el-row>
                              <el-link class="todoContent">
                                <i class="el-icon-star-off"></i>每天多达30张邮票
                              </el-link>
                            </el-row>
                            <el-row>
                              <el-link class="todoContent">
                                <i class="el-icon-star-off"></i>更大的收藏夹空间
                              </el-link>
                            </el-row>
                            <el-row>
                              <el-link class="todoContent">
                                <i class="el-icon-star-off"></i>尊贵的FellowPrime标志
                              </el-link>
                            </el-row>
                            <el-row>
                              <el-link class="todoContent">
                                <i class="el-icon-star-off"></i>都有谁看过你的资料
                              </el-link>
                            </el-row>
                            <el-row>
                              <el-link class="todoContent">
                                <i class="el-icon-star-off"></i>信件永久保存
                              </el-link>
                            </el-row>
                            <el-row>
                              <el-link class="todoContent">
                                <i class="el-icon-star-off"></i>过滤某些用户和学校
                              </el-link>
                            </el-row>
                            <el-row>
                              <el-link class="todoContent">
                                <i class="el-icon-star-off"></i>只需60RMB，永久Prime身份
                              </el-link>
                            </el-row>
                            <el-row>
                              <el-button type="primary" style="margin-top:20px">成为Prime会员</el-button>
                            </el-row>
                          </div>
                        </el-row>
                      </el-row>
                    </div>
                  </div>
                </el-col>
                <el-col :span="7">
                  <div class="container" style="margin:20px">
                    <h2>我们有这些进行中的活动</h2>
                    <div>
                      <el-row>
                        <el-card :body-style="{ padding: '0px' }" style="margin:10px">
                          <img
                            src="https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/pic/item/b3119313b07eca800e79e2779f2397dda1448326.jpg"
                            class="image"
                          />
                          <div style="padding: 14px;">
                            <span>中华人民共和国成立70周年主题活动</span>
                            <div class="bottom clearfix">
                              <time class="time">{{ currentDate }}</time>
                              <el-button type="text" class="button">加入我们，现在！</el-button>
                            </div>
                          </div>
                        </el-card>
                      </el-row>
                      <el-row>
                        <el-card :body-style="{ padding: '0px' }" style="margin:10px">
                          <img
                            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570100805380&di=37d29405a701b7f305ffa3358bff8b53&imgtype=0&src=http%3A%2F%2Fwww.juimg.com%2Ftuku%2Fyulantu%2F140402%2F330580-14040211215869.jpg"
                            class="image"
                          />
                          <div style="padding: 14px;">
                            <span>每天运动一小时，健康工作50年活动</span>
                            <div class="bottom clearfix">
                              <time class="time">{{ currentDate }}</time>
                              <el-button type="text" class="button">加入我们，现在！</el-button>
                            </div>
                          </div>
                        </el-card>
                      </el-row>
                    </div>
                  </div>
                </el-col>
                <el-col :span="10">
                  <div class="container" style="margin:20px">
                    <h2>这些人，可能成为你的朋友</h2>
                    <div>
                      <el-row
                        v-for="(i,index) in (Math.ceil((recommendFriends.length / 4)))"
                        :key="index"
                      >
                        <el-col
                          :span="6"
                          style="padding: 3px;"
                          v-for="(item,index) in recommendFriends"
                          v-show="(i - 1) * 4 <= index && index < i * 4"
                          :key="index"
                        >
                          <el-card :body-style="{ padding: '0px' }">
                            <img :src="item.photo" class="image" />
                            <div style="padding: 2px;">
                              <span style="font-size:62.5%;">{{item.nickname}}</span>
                              <br />
                              <span style="font-size:62.5%">{{item.university}}</span>
                              <br />
                              <el-link type="primary" style="font-size:40%;">详细信息</el-link>
                            </div>
                          </el-card>
                        </el-col>
                      </el-row>
                    </div>
                  </div>
                  <div class="container" style="margin:20px">
                    <h2>尝试加入这些组织</h2>
                    <div>
                      <el-row
                        v-for="(i,index) in (Math.ceil((recommendOrganization.length / 4)))"
                        :key="index"
                      >
                        <el-col
                          :span="6"
                          style="padding: 3px;"
                          v-for="(item,index) in recommendOrganization"
                          v-show="(i - 1) * 4 <= index && index < i * 4"
                          :key="index"
                        >
                          <el-card :body-style="{ padding: '0px' }">
                            <img :src="item.photo" class="image" />
                            <div style="padding: 2px;">
                              <span style="font-size:62.5%;">{{item.name}}</span>
                              <br />
                              <el-link type="primary" style="font-size:40%;">尝试加入</el-link>
                            </div>
                          </el-card>
                        </el-col>
                      </el-row>
                    </div>
                    <div>
                      <el-row>
                        <h2>每日诗句</h2>
                      </el-row>
                      <el-row>
                        <span class="recommendSentenceTitle">俱怀逸兴壮思飞，欲上青天览明月。</span>
                      </el-row>
                    </div>
                  </div>
                </el-col>
              </el-row>
            </el-card>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<style scoped>
.el-col {
  border-radius: 4px;
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

.image {
  width: 100%;
  display: block;
}

h1 {
  font-size: 48px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: black;
}
.welcomeTitle {
  font-size: 36px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: black;
  text-align: left;
  float: left;
  margin-bottom: 20px;
}
.welcomeTitle2 {
  font-size: 24px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: black;
  text-align: left;
  float: left;
  margin-bottom: 20px;
}
.todoTitle {
  font-size: 20px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: black;
  text-align: left;
  float: left;
  margin-bottom: 15px;
}
.todoContent {
  font-size: 15px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  text-align: left;
  float: left;
  margin-bottom: 5px;
  margin-left: 40px;
}
.container {
  margin: 20px;
}
.recommendSentenceTitle {
  font-size: 20px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: black;
  text-align: left;
  margin-bottom: 15px;
}
</style>

<script>
export default {
  data() {
    return {
      currentUser: {
        user_id: 1,
        nickname: "金智媛",
        university: "清华大学",
        lastLoginAt: "14 sec ago",
        photo:
          "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569063950234&di=f9e666fa5b2219e12cd1e0119b6a692d&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201406%2F03%2F20140603205522_ZirQE.thumb.600_0.jpeg"
      },
      backgroundStyle: {
        backgroundImage:
          "url(" + require("../../assets/largestiusl8x7a5f0krpg.jpg") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%"
      },
      fits: ["fill", "contain", "cover", "none", "scale-down"],
      activeNames: "",
      url:
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
      recommendFriends: [
        {
          user_id: 1,
          nickname: "金智媛",
          university: "清华大学",
          lastLoginAt: "14 sec ago",
          photo:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569063950234&di=f9e666fa5b2219e12cd1e0119b6a692d&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201406%2F03%2F20140603205522_ZirQE.thumb.600_0.jpeg"
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
          user_id: 6,
          nickname: "Yonna",
          university: "武汉大学",
          lastLoginAt: "1 min 26 sec ago",
          photo:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1743168392,2407869980&fm=26&gp=0.jpg"
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
          user_id: 12,
          nickname: "Yonna",
          university: "首尔大学",
          lastLoginAt: "1 min 34 sec ago",
          photo:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1004963647,1607232271&fm=26&gp=0.jpg"
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
        }
      ],
      recommendOrganization: [
        {
          group_id: 1,
          name: "中国共产党",
          photo:
            "https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/pic/item/dbb44aed2e738bd4ee2f2e66aa8b87d6277ff95f.jpg"
        },
        {
          group_id: 4,
          name: "中国红十字基金会",
          photo:
            "https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/crop%3D0%2C149%2C1024%2C676%3Bc0%3Dbaike116%2C5%2C5%2C116%2C38/sign=17f0bac29b8fa0ec6b883e4d1ba775df/c9fcc3cec3fdfc03e7659b49de3f8794a4c22625.jpg"
        },
        {
          group_id: 6,
          name: "联合国儿童基金会",
          photo:
            "https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=af8df6b4e2dde711f3df4ba4c686a57e/a50f4bfbfbedab6479a00b71f036afc378311eb4.jpg"
        },
        {
          group_id: 8,
          name: "中国共青团",
          photo:
            "https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/pic/item/3812b31bb051f819b19cf0e7d4b44aed2f73e7e6.jpg"
        }
      ],
      searchConditions: {
        otherConditions: []
      },
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
    },
    register() {
      this.$router.replace("/account/register");
    }
  }
};
</script>
