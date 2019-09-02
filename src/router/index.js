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

import EditPassword from "@/views/settings/editPassword.vue";
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
      path: "/login",
      name: "login",
      components: { default: Login, header: MainNavbar},
      props: {
        header: { colorOnScroll: 400 }
      }
    },
    {
      path: "/register",
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
      path: "/editPassword",
      name: "editPassword",
      components: { default: EditPassword, header: MainNavbar, footer: MainFooter },
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
