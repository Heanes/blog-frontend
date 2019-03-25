<template>
  <he-article-detail>
    <template slot="articleTitle">网站申请免费SSL证书</template>
    <template slot="articleContent">
      <div class="img-wrap" style="max-width:400px;">
        <img src="https://ws4.sinaimg.cn/large/006tNbRwly1fwlq2r2imlj30m80b4mxa.jpg" class="img-2x img-show" title="https" alt="https">
        <p class="img-desc">https</p>
      </div>
      <h2>概述</h2>
      <p>根据 Let’s Encrypt CA 的统计，截至 2017 年 11 月，Firefox 加载的网页中启用 HTTPS 的比例占 67%，比去年底的 45% 有巨大提升。浏览器开发商如 Mozilla, Google 准备采取下一步措施：将所有 HTTP 网站标记为不安全。</p>
      <p>随着 HTTPS 的普及，给网站加个 SSL 证书已经是大势所趋而且很有必要了。</p>
      <p>目前已经存在不少免费好用的 SSL 证书，因此，本文就来盘点一下关于免费 SSL 证书的那些事儿。</p>
      <h2>一、Let’s Encrypt</h2>
      <p>官方网站：<a href="https://letsencrypt.org/" target="_blank">https://letsencrypt.org/</a></p>
      <p>点评：毫无疑问，Let’s Encrypt 是目前使用范围最为广泛的免费 SSL 证书，而且<a href="https://letsencrypt.org/2017/12/07/looking-forward-to-2018.html" target="_blank">官方博客宣布</a>宣布，自 2018 年开始提供通配符 SSL 证书，也就是 wildcard certificates。这对于广大个人站长来说，无疑是个不错的利好消息。唯一的缺憾就是，Let’s Encrypt 发行的证书有效期只有 3 个月，虽然可以通过定时任务来自动续期。</p>
      <p>如何申请？可以通过脚本命令行创建SSL 证书。也可以通过以下在线申请网站，手动申请证书。</p>
      <p>在线申请网址1（中文）：<a href="https://freessl.org" target="_blank">https://freessl.org</a></p>
      <p>在线申请网址2（英文）：<a href="https://www.sslforfree.com" target="_blank">https://www.sslforfree.com</a></p>
      <p>在线申请网址3（英文）：<a href="https://gethttpsforfree.com" target="_blank">https://gethttpsforfree.com</a></p>
      <div class="notice">
        <p>2018 年 03 月 15 日更新：</p>
        <p>Let’s Encrypt 已经正式支持发行免费的通配符证书（Wildcard SSL），需使用 certbot 或 acme.sh 手动发行。</p>
      </div>
      <h2>二、TrustAsia</h2>
      <p>官方网站：<a href="https://www.trustasia.com" target="_blank">https://www.trustasia.com</a></p>
      <p>点评：TrustAsia 是国内一家新兴的 SSL 证书提供商，赛门铁克(Symantec)亚太区的白金合作伙伴。随着 Symantec 的 CA 业务被 DigiCert 收购完成，其证书链也从 Symantec 变为 DigiCert。现在也开始提供免费 1 年期的 DV SSL 证书。</p>
      <p>在线申请网址：<a href="https://freessl.org" target="_blank">https://freessl.org</a></p>
      <h2>三、AlwaysOnSSL</h2>
      <p>官方网站：<a href="https://alwaysonssl.com" target="_blank">https://alwaysonssl.com</a></p>
      <p>点评：AlwaysOnSSL 是一个新的免费和自动认证机构。它由 CertCenter 和 Digicert 运行，免费提供 6 个月的 DV SSL 证书。</p>
      <p>在线申请网址：<a href="https://alwaysonssl.com" target="_blank">https://alwaysonssl.com</a></p>
      <h2>四、Comodo</h2>
      <p>官方网站：<a href="https://www.comodo.com" target="_blank">https://www.comodo.com</a></p>
      <p>点评：在 Let’s Encrypt 没有问世之前，Comodo 的市场占有率是第一位。随着 Let’s Encrypt 的盛行，Comodo 在 DV SSL 市场占有率逐渐下降，但依然是 SSL 的龙头企业。目前 Comodo 也提供免费 90 天的免费 DV SSL 证书。</p>
      <p>在线申请网址1：<a href="https://secure.instantssl.com/products/SSLIdASignup1a" target="_blank">https://secure.instantssl.com/products/SSLIdASignup1a</a></p>
      <p>在线申请网址2：<a href="https://www.100tb.com" target="_blank">https://www.100tb.com</a></p>
      <p>备注：100TB 免费提供 1 年期的 Comodo 证书，前提是需要注册为会员后才能在后台申请。100TB 的规定是，发行的证书只能在他们家的产品上使用，否则会有被吊销的风险。申请时，请自备 CSR(Certificate Signing Request)，这里有 CSR 在线生成工具。参考网址：<a href="https://www.csr.sh" target="_blank">https://www.csr.sh</a></p>
      <h2>五、Cloudflare</h2>
      <p>官方网站：<a href="https://www.cloudflare.com" target="_blank">https://www.cloudflare.com</a></p>
      <p>点评：Cloudflare 很早就开始提供免费 SSL 证书，前提是你的域名要放在 Cloudflare 解析，注册为 Free Plan 就可以。</p>
      <p>备注：只要域名加入 Cloudflare Free Plan，解析 A 记录的时候，点击 Traffic to this hostname will go through Cloudflare，就可以了。一般情况下，这个免费的 Universal SSL 里会包含一大堆别人的域名（该证书也是 Comodo 发行的）。当然，如果你比较介意这个的话，可以付费购买其 Dedicated SSL Certificate ($5/month) 或 Dedicated SSL Certificate with Custom Hostnames ($10/month)。</p>
      <h2>六、AlphaSSL</h2>
      <p>官方网站：<a href="https://www.alphassl.com" target="_blank">https://www.alphassl.com</a></p>
      <p>点评：其实 AlphaSSL 并不免费提供 SSL 证书，而且价格不菲。但是 AlphaSSL 跟 SingleHop 有合作关系，免费给 SingleHop 的客户发行证书，甚至包括通配符 SSL 证书。有人根据这个规则，开发了个自动发行证书的工具。
        详见：<a href="https://github.com/Vittfarne/ASSL" target="_blank">https://github.com/Vittfarne/ASSL</a>
        也就是说，只要你有了 SingleHop 的服务，就可以使用你的帐号密码以及该工具去当个活雷锋了。但是，不可避免地，这样的活雷锋是当不了多久的。一般其下场会因为滥用被 SingleHop 给关闭账户。</p>
      <p>值得注意的是，如果你申请了这个 SSL 证书，就要有 SSL 证书随时可能被吊销的觉悟。详情始末的参考网址：<a href="https://www.lowendtalk.com/discussion/comment/2306096/#Comment_2306096" target="_blank">https://www.lowendtalk.com/discussion/comment/2306096/#Comment_2306096</a></p>
      <p>在线申请网址：<a href="https://en.assl.space" target="_blank">https://en.assl.space</a></p>
      <h2>尾声</h2>
      <p>自从 Let’s encrypt 开始提供免费DV SSL后，SSL 证书市场就已经开始洗牌了。</p>
      <p>值得一提的是 StarCom 原本是一家以色列的证书商，提供免费和收费的 SSL 证书，后被国内公司 360 收购。曾在 CA 市场也有一席之地，StartCom 的问题在于被发现允许对证书的签发日期进行倒填，从而达到规避 SHA1 证书在 2016 年 1 月 1 日之后被浏览器警告的目的。最终于 2017 年 11 月 16 日，StartCom 宣布终止业务，自 2018 年 1 月 1 日起停止颁发新证书，并于 2020 年停止 OCSP 和 CRL 服务。</p>
      <p>沃通（Wosign）也属于类似情况，被 Mozilla 认为 WoSign 最严重的问题是伪造（或者说人为设置）了证书签发日期，相继被 Mozilla 和 Chrome 不信任，最终导致出局。</p>
      <p>最后，随着 https 的广泛被适用，我们也乐于看到越来越多的 CA 开始提供免费的 DV SSL 证书。</p>
      <div class="article-reference" style="display: none">
        <p>文章参考自：<a href="https://teddysun.com/527.html">https://teddysun.com/527.html</a></p>
      </div>
    </template>
  </he-article-detail>
</template>

<script>
import HeArticleDetail from '@/components/article/ArticleDetail';

export default {
  name: 'WebsiteSslCertificate',
  components: {
    'he-article-detail': HeArticleDetail
  }
}
</script>

<style scoped>

</style>
