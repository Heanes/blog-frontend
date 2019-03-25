<template>
  <!-- S footer 脚部 S -->
  <div class="footer footer-wrap" slot="footer">
    <!-- S 页脚装饰 S -->
    <!--<div class="footer-decorate">
      <div class="footer-animal main-width">
        <div class="footer-footprint"></div>
        <div class="footer-cat">
          <img src="../../static/image/footer/other/little-cat.png" alt="">
        </div>
      </div>
    </div>-->
    <!-- E 页脚装饰 E -->
    <div class="footer-content footer-top-border">
      <div class="footer-top-wrap main-width">
        <!--页脚logo-->
        <!--<div class="footer-website-logo">
          <a href="" class="footer-website-home-link">
            <img class="logo-img" :src="logoImgSrc" alt="">
          </a>
        </div>-->
        <!-- 页脚链接 -->
        <!--<div class="add-link">
          <ul class="link-group">
            <li>
              <h3 class="link-category">分类一</h3>
              <ul class="link-list">
                <li>
                  <a href="javascript:;">链接1</a>
                </li>
                <li>
                  <a href="javascript:;">链接2</a>
                </li>
                <li>
                  <a href="javascript:;">链接3</a>
                </li>
                <li>
                  <a href="javascript:;">链接4</a>
                </li>
                <li>
                  <a href="javascript:;">链接5</a>
                </li>
              </ul>
            </li>
            <li>
              <h3 class="link-category">分类一</h3>
              <ul class="link-list">
                <li>
                  <a href="javascript:;">链接1</a>
                </li>
                <li>
                  <a href="javascript:;">链接2</a>
                </li>
                <li>
                  <a href="javascript:;">链接3</a>
                </li>
                <li>
                  <a href="javascript:;">链接4</a>
                </li>
                <li>
                  <a href="javascript:;">链接5</a>
                </li>
              </ul>
            </li>
            <li>
              <h3 class="link-category">分类一</h3>
              <ul class="link-list">
                <li>
                  <a href="javascript:;">链接1</a>
                </li>
                <li>
                  <a href="javascript:;">链接2</a>
                </li>
                <li>
                  <a href="javascript:;">链接3</a>
                </li>
                <li>
                  <a href="javascript:;">链接4</a>
                </li>
                <li>
                  <a href="javascript:;">链接5</a>
                </li>
              </ul>
            </li>
            <li>
              <h3 class="link-category">分类一</h3>
              <ul class="link-list">
                <li>
                  <a href="javascript:;">链接1</a>
                </li>
                <li>
                  <a href="javascript:;">链接2</a>
                </li>
                <li>
                  <a href="javascript:;">链接3</a>
                </li>
                <li>
                  <a href="javascript:;">链接4</a>
                </li>
                <li>
                  <a href="javascript:;">链接5</a>
                </li>
              </ul>
            </li>
            <li>
              <h3 class="link-category">分类一</h3>
              <ul class="link-list">
                <li>
                  <a href="javascript:;">链接1</a>
                </li>
                <li>
                  <a href="javascript:;">链接2</a>
                </li>
                <li>
                  <a href="javascript:;">链接3</a>
                </li>
                <li>
                  <a href="javascript:;">链接4</a>
                </li>
                <li>
                  <a href="javascript:;">链接5</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>-->
        <!-- S 关于站长 S -->
        <div class="about-web-owner"></div>
        <!-- E 关于站长 E -->
        <!-- S 社会化链接 S -->
        <div class="link-social main-width">
          <div class="social-icon qq"><a class="link" href="http://wpa.qq.com/msgrd?v=3&uin=137845848" target="_blank"></a></div>
          <div class="social-icon wechat">
            <a class="link" href="javascript:;" target="_blank"></a>
            <span class="focused-show wechat-qrcode"><img class="img" :src="wechatImgSrc" alt=""></span>
          </div>
          <div class="social-icon weibo"><a class="link" href="http://weibo.com/heanes" target="_blank"></a></div>
          <div class="social-icon github"><a class="link" href="https://github.com/Heanes" target="_blank"></a></div>
          <div class="social-icon zhihu"><a class="link" href="https://www.zhihu.com/people/heanes/" target="_blank"></a></div>
        </div>
        <!-- E 社会化链接 E -->
      </div>
      <div class="footer-bottom-wrap">
        <!-- 版权声明区域 -->
        <div class="copyright">
          <p class="p"><span class="span">本站基于腾讯云服务器构建</span></p>
          <p class="p"><span class="span">京 ICP 证 09002463 号 | Copyright &copy; 2012-2018, <a href="javascript:void(0);">heanes.com</a>, All Rights Reserved</span></p>
        </div>
      </div>
    </div>
  </div>
  <!-- E footer 脚部 E -->
</template>

<script>
import '../../static/css/common/animation.scss'
import '../../static/css/layout/footer.scss'

export default {
  name: 'Footer',
  props: {
    // 页脚logo
    logoImgSrc: {
      type: String,
      require: true,
      default: require('~/public/upload/image/common/logo/logo.svg')
    },
    // 微信二维码
    wechatImgSrc: {
      type: String,
      require: true,
      default: require('~/public/upload/image/common/social/wechat/heanes-wechat-qrcode-style1.jpg')
    }
  }
}
</script>

<style scoped>

</style>
