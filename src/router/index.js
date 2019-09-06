import Vue from 'vue'
import Router from 'vue-router'

import Index from "@/views/index.vue";

import MainNavbar from "@/layout/MainNavbar.vue";
import MainFooter from "@/layout/MainFooter.vue";

import Login from "@/views/login/login.vue";
import Register from "@/views/register/register.vue";

import ReceivedMessages from "@/views/messages/receivedMessages.vue";
import SentMessages from "@/views/messages/sentMessages.vue";

import FriendsRequest from "@/views/friends/friendsRequest.vue";
import FriendsApproved from "@/views/friends/friendsApproved.vue";
import FriendsWaitingApproved from "@/views/friends/friendsWaitingApproved.vue";

import ExpertiseCommunity from "@/views/expertiseCommunity/expertiseCommunity.vue";

import SearchFriends from "@/views/searchFriends/searchFriends.vue";
import SearchFriendsResults from "@/views/searchFriends/searchFriendsResults.vue";

import Security from "@/views/settings/security.vue";
import EditPassword from "@/views/settings/editPassword.vue";
import EditPhone from "@/views/settings/editPhone.vue";
import EditEmail from "@/views/settings/editEmail.vue";
import EditPersonalInfo from "@/views/settings/editPersonalInfo.vue";
import EditSystemSetting from "@/views/settings/editSystemSetting.vue";
import VipBilling from "@/views/settings/vipBilling.vue";

Vue.use(Router)




export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      components: { default: Index, header: MainNavbar}
    },
    {
      path: "/account/login",
      name: "login",
      components: { default: Login, header: MainNavbar},
      props: {
        header: { colorOnScroll: 400 }
      }
    },
    {
      path: "/account/register",
      name: "register",
      components: { default: Register, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 }
      }
    },
    {
      path: "/expertiseCommunity",
      name: "expertiseCommunity",
      components: { default: ExpertiseCommunity, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/friendRequest",
      name: "friendRequest",
      components: { default: FriendsRequest, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/friendsApproved",
      name: "friendsApproved",
      components: { default: FriendsApproved, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/friendsWaitingApproved",
      name: "friendsWaitingApproved",
      components: { default: FriendsWaitingApproved, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/receivedMessages",
      name: "receivedMessages",
      components: { default: ReceivedMessages, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/sentMessages",
      name: "sentMessages",
      components: { default: SentMessages, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/searchFriends",
      name: "searchFriends",
      components: { default: SearchFriends, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/searchFriendsResults",
      name: "searchFriendsResults",
      components: { default: SearchFriendsResults, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/security",
      name: "security",
      components: { default: Security, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/security/editPassword",
      name: "editPassword",
      components: { default: EditPassword, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/security/editPhone",
      name: "editPhone",
      components: { default: EditPhone, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/security/editEmail",
      name: "editEmail",
      components: { default: EditEmail, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/editPersonalInfo",
      name: "editPersonalInfo",
      components: { default: EditPersonalInfo, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/editSystemSetting",
      name: "editSystemSetting",
      components: { default: EditSystemSetting, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/vipBilling",
      name: "vipBilling",
      components: { default: VipBilling, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      },
    }
  ]
})
// const originalPush = Router.prototype.push
// Router.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err)
// }
