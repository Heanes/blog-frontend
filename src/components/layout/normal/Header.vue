<template>
  <!-- S header 头部 S -->
  <div class="header">
    <!-- S top bar S -->
    <!--<div class="header-top-wrap">
      <div class="header-top main-width">
        <div class="top-left">
          &lt;!&ndash; 顶部功能滚动栏 &ndash;&gt;
          <ul class="header-notice-list" id="headerNoticeList">
            <li class="notice-item"><a href="/notice/1.html">公告1： 公告内容公告内容公告内容公告内容公告内容</a></li>
            <li class="notice-item"><a href="/notice/2.html">公告2： 公告内容公告内容公告内容公告内容公告内容</a></li>
          </ul>
        </div>
        <div class="top-right">
          &lt;!&ndash; 快捷链接 &ndash;&gt;
          <span class="nav-link-wrap">
            <a class="top-right-link" href="">首页</a>
            <i class="border-separate"></i>
            <a class="top-right-link" href="">加入收藏</a>
            <i class="border-separate"></i>
            <a class="top-right-link" href="">联系我们</a>
            <i class="border-separate"></i>
            <a class="top-right-link" href="">English</a>
          </span>
        </div>
      </div>
    </div>-->
    <!-- E top bar E -->
    <!-- S nav bar S -->
    <div class="header-main-wrap">
      <div class="header-web-logo" style="display: none;">
        <img class="web-logo" src="" alt=""/>
        <button class="nav-bar-toggle collapsed">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
      </div>
      <div class="header-nav-list">
        <hec-navigation :nav-list="navList" :styleClass="'main-width'"></hec-navigation>
      </div>
    </div>
    <!-- E nav bar E -->
  </div>
  <!-- E header 头部 E -->
</template>

<script>
import '@/assets/css/layout/header.scss'

import http from '@/api/index.js';
import HecNavigation from '@/components/common/navigation/Navigation';
// import $ from 'jquery';

export default {
  name: 'Header',
  components: {
    'hec-navigation': HecNavigation
  },
  data () {
    return {
      navList: []
    }
  },
  methods: {
    getNavList (param) {
      http.common.queryNavList(param)
        .then(response => {
          this.navList = response.data;
        });
    },
    /**
     * @doc 显示动态循环显示的公告栏
     * @param $headerNoticeList
     * @param delay 展示切换间隔时间
     * @param animateDelay 切换动画时间
     * @author Heanes
     * @time 2018-10-13 20:57:38 周六
     */
    showScrollNotice ($headerNoticeList, delay, animateDelay) {
      if (!$headerNoticeList) {
        return false;
      }
      delay = delay || 2000;
      animateDelay = animateDelay || 500;
      const $noticeList = $headerNoticeList.find('.notice-item');
      const noticeItemHeight = $noticeList.height();
      let scrollCount = 0;
      const scrollTotal = $headerNoticeList.length;
      $headerNoticeList.append($headerNoticeList.children().clone(true));
      const scrollNotice = function () {
        if (scrollCount < scrollTotal) {
          $headerNoticeList.animate({top: $headerNoticeList.position().top - noticeItemHeight}, animateDelay);
          scrollCount++;
        } else {
          $headerNoticeList.animate({top: -noticeItemHeight}, 0);
          $headerNoticeList.animate({top: $headerNoticeList.position().top - noticeItemHeight}, animateDelay);
          scrollCount = 0;
        }
      };
      let scrollInterval = setInterval(scrollNotice, delay);
      // 鼠标浮上时停止滚动
      $headerNoticeList.on('mouseenter', function () {
        clearInterval(scrollInterval);
      });
      // 鼠标离开后继续滚动
      $headerNoticeList.on('mouseleave', function () {
        scrollInterval = setInterval(scrollNotice, delay);
      });
    }
  },
  created () {
  },
  mounted () {
    /* let $headerNoticeList = $('#headerNoticeList');
     this.showScrollNotice($headerNoticeList); */
    this.getNavList();
  }
}
</script>

<style scoped>

</style>
