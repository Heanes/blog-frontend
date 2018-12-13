<template>
  <!-- S header 头部 S -->
  <div class="header" slot="header">
    <!-- S top bar S -->
    <div class="header-top-wrap">
      <div class="header-top main-width">
        <div class="top-left">
          <ul class="header-notice-list" id="headerNoticeList">
            <li class="notice-item"><a href="../article/notice.html">公告1： 公告内容公告内容公告内容公告内容公告内容</a></li>
            <li class="notice-item"><a href="../article/notice.html">公告2： 公告内容公告内容公告内容公告内容公告内容</a></li>
          </ul>
        </div>
        <div class="top-right">
          <a class="top-right-link" href="">首页</a>
          <i class="border-separate"></i>
          <a class="top-right-link" href="">加入收藏</a>
          <i class="border-separate"></i>
          <a class="top-right-link" href="">联系我们</a>
          <i class="border-separate"></i>
          <a class="top-right-link" href="">English</a>
        </div>
      </div>
    </div>
    <!-- E top bar E -->
    <div class="web-logo">
      <div class="web-header-logo">
        <img class="web-logo" src="" alt="" />
        <button class="nav-bar-toggle collapsed">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
      </div>
    </div>
    <!-- S nav bar S -->
    <div class="header-nav-wrap">
      <ul class="nav-list main-width">
        <li class="nav-item active">
          <a class="nav-link" target="_blank" href="/">首页</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" target="_blank" href="../article/detail.html">技术</a>
          <ul class="nav-sub">
            <li class="nav-item"><a class="nav-link" href="../article/detail.html">后端</a></li>
            <li class="nav-item"><a class="nav-link" href="../article/detail.html">前端</a></li>
            <li class="nav-item"><a class="nav-link" href="../article/detail.html">运维</a></li>
            <li class="nav-item"><a class="nav-link" href="../article/detail.html">客户端</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" target="_blank" href="../article/detail.html">新闻</a>
          <ul class="nav-sub">
            <li class="nav-item"><a class="nav-link" href="../article/detail.html">重大新闻</a></li>
            <li class="nav-item"><a class="nav-link" href="../article/detail.html">时事观点</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" target="_blank" href="../article/detail.html">专栏</a>
          <ul class="nav-sub">
            <li class="nav-item"><a class="nav-link" href="../article/detail.html">日记</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" target="_blank" href="../article/detail.html">阅读</a>
          <ul class="nav-sub">
            <li class="nav-item"><a class="nav-link" href="../article/detail.html">技术</a></li>
            <li class="nav-item"><a class="nav-link" href="../article/detail.html">文学</a></li>
            <li class="nav-item"><a class="nav-link" href="../article/detail.html">历史</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" target="_blank" href="../article/detail.html">关于</a>
        </li>
      </ul>
    </div>
    <!-- E nav bar E -->
  </div>
  <!-- E header 头部 E -->
</template>

<script>
import '../../static/css/layout/header.scss'

import $ from 'jquery';
export default {
  name: 'Header',
  mounted () {
    let $headerNoticeList = $('#headerNoticeList');
    this.showScrollNotice($headerNoticeList);
  },
  methods: {
    /**
     * @doc 显示动态循环显示的公告栏
     * @param $headerNoticeList
     * @param delay 展示切换间隔时间
     * @param animateDelay 切换动画时间
     * @author Heanes
     * @time 2018-10-13 20:57:38 周六
     */
    showScrollNotice($headerNoticeList, delay, animateDelay){
      if(!$headerNoticeList){
        return false;
      }
      delay = delay || 2000;
      animateDelay = animateDelay || 500;
      let $noticeList = $headerNoticeList.find('.notice-item');
      let noticeItemHeight = $noticeList.height();
      let scrollCount = 0;
      let scrollTotal = $headerNoticeList.length;
      $headerNoticeList.append($headerNoticeList.children().clone(true));
      let scrollNotice = function(){
        if(scrollCount < scrollTotal){
          $headerNoticeList.animate({'top': $headerNoticeList.position().top - noticeItemHeight}, animateDelay);
          scrollCount++;
        }else{
          $headerNoticeList.animate({'top': -noticeItemHeight}, 0);
          $headerNoticeList.animate({'top': $headerNoticeList.position().top - noticeItemHeight}, animateDelay);
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
  }
}
</script>

<style scoped>

</style>
