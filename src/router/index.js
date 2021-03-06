import Vue from 'vue'
import Router from 'vue-router'

import Index from "@/views/index.vue";

import MyHome from "@/views/home/myHome.vue";

import MainNavbar from "@/layout/MainNavbar.vue";
import MainFooter from "@/layout/MainFooter.vue";

import Login from "@/views/login/login.vue";
import Register from "@/views/register/register.vue";

import Profile from "@/views/user/profile.vue";

import Messages from "@/views/messages/messages.vue";
import MessageDetails from "@/views/messages/messageDetails.vue";

import FriendsRequest from "@/views/friends/friendsRequest.vue";
import FriendsApproved from "@/views/friends/friendsApproved.vue";
import FriendDetails from "@/views/friends/friendDetails.vue";

import ExpertiseCommunity from "@/views/expertiseCommunity/expertiseCommunity.vue";

import SearchFriends from "@/views/searchFriends/searchFriends.vue";
import SearchFriendsResults from "@/views/searchFriends/searchFriendsResults.vue";

import Security from "@/views/settings/security/security.vue";
import EditPassword from "@/views/settings/security/editPassword.vue";
import EditPasswordByPhone from "@/views/settings/security/editPasswordByPhone.vue";
import EditPasswordByEmail from "@/views/settings/security/editPasswordByEmail.vue";
import EditPhone from "@/views/settings/security/editPhone.vue";
import EditPhoneByPhone from "@/views/settings/security/editPhoneByPhone.vue";
import EditPhoneByEmail from "@/views/settings/security/editPhoneByEmail.vue";
import EditEmail from "@/views/settings/security/editEmail.vue";
import EditEmailByPhone from "@/views/settings/security/editEmailByPhone.vue";
import EditEmailByEmail from "@/views/settings/security/editEmailByEmail.vue";
import EditPersonalInfo from "@/views/settings/editPersonalInfo.vue";
import EditSystemSetting from "@/views/settings/editSystemSetting.vue";
import VipBilling from "@/views/settings/vipBilling.vue";

Vue.use(Router)




const router= new Router({
  routes: [{
      path: '/',
      name: 'Index',
      components: {
        default: Index,
        header: MainNavbar,
        footer: MainFooter
      }
    },
    {
      path: '/myHome',
      name: 'myHome',
      components: {
        default: MyHome,
        header: MainNavbar,
        footer: MainFooter
      }
    },
    {
      path: "/account/login",
      name: "login",
      components: {
        default: Login,
        header: MainNavbar,
        footer: MainFooter
      },
      props: {
        header: {
          colorOnScroll: 400
        }
      }
    },
    {
      path: "/account/register",
      name: "register",
      components: {
        default: Register,
        header: MainNavbar,
        footer: MainFooter
      },
      props: {
        header: {
          colorOnScroll: 400
        }
      }
    },
    {
      path: "/expertiseCommunity",
      name: "expertiseCommunity",
      components: {
        default: ExpertiseCommunity,
        header: MainNavbar,
        footer: MainFooter
      },
      props: {
        header: {
          colorOnScroll: 400
        },
        footer: {
          backgroundColor: "black"
        }
      }
    },
    {
      path: "/friendRequest",
      name: "friendRequest",
      components: {
        default: FriendsRequest,
        header: MainNavbar,
        footer: MainFooter
      },
      props: {
        header: {
          colorOnScroll: 400
        },
        footer: {
          backgroundColor: "black"
        }
      }
    },
    {
      path: "/friendsApproved",
      name: "friendsApproved",
      components: {
        default: FriendsApproved,
        header: MainNavbar,
        footer: MainFooter
      },
      props: {
        header: {
          colorOnScroll: 400
        },
        footer: {
          backgroundColor: "black"
        }
      }
    },
    {
      path: "/friendDetails",
      name: "friendDetails",
      components: {
        default: FriendDetails,
        header: MainNavbar,
        footer: MainFooter
      },
      props: {
        header: {
          colorOnScroll: 400
        },
        footer: {
          backgroundColor: "black"
        }
      }
    },
    {
      path: "/messages",
      name: "messages",
      components: {
        default: Messages,
        header: MainNavbar,
        footer: MainFooter
      },
      props: {
        header: {
          colorOnScroll: 400
        },
        footer: {
          backgroundColor: "black"
        }
      }
    },
    {
      path: "/messageDetails",
      name: "messageDetails",
      components: {
        default: MessageDetails,
        header: MainNavbar,
        footer: MainFooter
      },
      props: {
        header: {
          colorOnScroll: 400
        },
        footer: {
          backgroundColor: "black"
        }
      }
    },
    {
      path: "/searchFriends",
      name: "searchFriends",
      components: {
        default: SearchFriends,
        header: MainNavbar,
        footer: MainFooter
      },
      props: {
        header: {
          colorOnScroll: 400
        },
        footer: {
          backgroundColor: "black"
        }
      }
    },
    {
      path: "/searchFriendsResults",
      name: "searchFriendsResults",
      components: {
        default: SearchFriendsResults,
        header: MainNavbar,
        footer: MainFooter
      },
      props: {
        header: {
          colorOnScroll: 400
        },
        footer: {
          backgroundColor: "black"
        }
      }
    },
    {
      path: "/profile",
      name: "profile",
      components: {
        default: Profile,
        header: MainNavbar,
        footer: MainFooter
      },
      props: {
        header: {
          colorOnScroll: 400
        },
        footer: {
          backgroundColor: "black"
        }
      }
    },
    {
      path: "/security",
      name: "security",
      components: {
        default: Security,
        header: MainNavbar,
        footer: MainFooter
      },
      props: {
        header: {
          colorOnScroll: 400
        },
        footer: {
          backgroundColor: "black"
        }
      }
    },
    {
      path: "/security/editPassword",
      name: "editPassword",
      components: {
        default: EditPassword,
        header: MainNavbar,
        footer: MainFooter
      },
      props: {
        header: {
          colorOnScroll: 400
        },
        footer: {
          backgroundColor: "black"
        }
      }
    },
    {
      path: "/security/editPassword/phone",
      name: "editPasswordByPhone",
      components: {
        default: EditPasswordByPhone,
        header: MainNavbar,
        footer: MainFooter
      },
      props: {
        header: {
          colorOnScroll: 400
        },
        footer: {
          backgroundColor: "black"
        }
      }
    },
    {
      path: "/security/editPassword/email",
      name: "editPasswordByEmail",
      components: {
        default: EditPasswordByEmail,
        header: MainNavbar,
        footer: MainFooter
      },
      props: {
        header: {
          colorOnScroll: 400
        },
        footer: {
          backgroundColor: "black"
        }
      }
    },
    {
      path: "/security/editPhone",
      name: "editPhone",
      components: {
        default: EditPhone,
        header: MainNavbar,
        footer: MainFooter
      },
      props: {
        header: {
          colorOnScroll: 400
        },
        footer: {
          backgroundColor: "black"
        }
      }
    },
    {
      path: "/security/editPhone/phone",
      name: "editPhoneByPhone",
      components: {
        default: EditPhoneByPhone,
        header: MainNavbar,
        footer: MainFooter
      },
      props: {
        header: {
          colorOnScroll: 400
        },
        footer: {
          backgroundColor: "black"
        }
      }
    },
    {
      path: "/security/editPhone/email",
      name: "editPhoneByEmail",
      components: {
        default: EditPhoneByEmail,
        header: MainNavbar,
        footer: MainFooter
      },
      props: {
        header: {
          colorOnScroll: 400
        },
        footer: {
          backgroundColor: "black"
        }
      }
    },
    {
      path: "/security/editEmail",
      name: "editEmail",
      components: {
        default: EditEmail,
        header: MainNavbar,
        footer: MainFooter
      },
      props: {
        header: {
          colorOnScroll: 400
        },
        footer: {
          backgroundColor: "black"
        }
      }
    },
    {
      path: "/security/editEmail/phone",
      name: "editEmailByPhone",
      components: {
        default: EditEmailByPhone,
        header: MainNavbar,
        footer: MainFooter
      },
      props: {
        header: {
          colorOnScroll: 400
        },
        footer: {
          backgroundColor: "black"
        }
      }
    },
    {
      path: "/security/editEmail/email",
      name: "editEmailByEmail",
      components: {
        default: EditEmailByEmail,
        header: MainNavbar,
        footer: MainFooter
      },
      props: {
        header: {
          colorOnScroll: 400
        },
        footer: {
          backgroundColor: "black"
        }
      }
    },
    {
      path: "/editPersonalInfo",
      name: "editPersonalInfo",
      components: {
        default: EditPersonalInfo,
        header: MainNavbar,
        footer: MainFooter
      },
      props: {
        header: {
          colorOnScroll: 400
        },
        footer: {
          backgroundColor: "black"
        }
      }
    },
    {
      path: "/editSystemSetting",
      name: "editSystemSetting",
      components: {
        default: EditSystemSetting,
        header: MainNavbar,
        footer: MainFooter
      },
      props: {
        header: {
          colorOnScroll: 400
        },
        footer: {
          backgroundColor: "black"
        }
      }
    },
    {
      path: "/vipBilling",
      name: "vipBilling",
      components: {
        default: VipBilling,
        header: MainNavbar,
        footer: MainFooter
      },
      props: {
        header: {
          colorOnScroll: 400
        },
        footer: {
          backgroundColor: "black"
        }
      },
    }
  ]
})

//过滤器，判断是否登录
// router.beforeEach((to,from,next)=>{
//   if(to.path==='/account/login'){
//     next();
//   }else{
//     let token=localStorage.getItem('Authorization');
//     if(token===null||token===''){
//       next('/login');
//     }else{
//       next();
//     }
//   }
// })


export default router;

// const originalPush = Router.prototype.push
// Router.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err)
// }
