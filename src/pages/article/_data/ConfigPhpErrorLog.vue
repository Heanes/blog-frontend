<template>
  <he-article-detail>
    <template slot="articleTitle">php及php-fpm输出错误日志</template>
    <template slot="articleContent">
      <h2>开发者的常见情况</h2>
      <p>常见情况下，使用php的web开发者，一般会选择apache或者nginx作为web服务器，而web服务器的日志只有对访问页面的记录，不会有php 的 error log记录。</p>
      <p>例如当使用nginx作为web服务器时，会把对php的请求发给php-fpm fastcgi进程来处理，所以我们需要通过php及php-fpm来查看日志</p>
      <h2>配置步骤</h2>
      <h3>修改php.ini</h3>
      <pre>
log_errors = On ;开启错误日志
error_log = "/usr/local/php/var/log/php_error.log" ;指定产生的错误报告写入的日志文件位置
error_reporting=E_ALL&~E_NOTICE ;PHP错误日志级别，E_ALL表示全部，~表示排除掉紧跟着的级别项，此例表示排除NOTICE级别外的全部日志。更多级别可见 <a href="http://php.net/error-reporting">http://php.net/error-reporting</a>
</pre>
      <p>修改php.ini文件中的配置</p>
      <h3>修改php-fpm.conf</h3>
      <p>修改php-fpm.conf文件中的配置</p>
      <pre>
error_log = /usr/local/php/var/log/php_fpm.log ;指定php-fpm产生的日志写入的日志文件位置
</pre>
      <p>之后即可到上述指定的位置中查看日志记录。</p>
      <h3>重启php-fpm</h3>
      <p>当PHP执行错误时就能看到错误日志在"/usr/local/php/var/log/php_error.log"中了</p>
      <div class="notice">
        <p>可以简单写一句代码进行测试是否记录错误日志，如：</p>
        <pre>
throw new Exception('Division by zero.');
</pre>
      </div>
      <div class="notice">
        <p>也可以在程序中动态修改以上配置（仅对该程序产生的日志生效）：</p>
        <pre>
ini_set("log_errors", 1);
ini_set("error_log", "日志文件名");
ini_set("error_reporting", E_ALL);
</pre>
      </div>
      <h2>注意事项</h2>
      <p>1. php-fpm.conf 中的php_admin_value[error_log] 参数 会覆盖php.ini中的 error_log 参数
        所以确保你在phpinfo()中看到的最终error_log文件具有可写权限并且没有设置php_admin_value[error_log] 参数，否则错误日志会输出到php-fpm的错误日志里。</p>
      <div class="img-wrap" style="max-width:948px;">
        <img src="https://ws4.sinaimg.cn/large/006tNbRwly1fwjaqkmosqj31go02ydgd.jpg" class="img-2x img-show" title="php_error.log_file_directory" alt="php_error.log_file_directory">
        <p class="img-desc">php_error.log</p>
      </div>
      <p>2.找不到php.ini位置，使用php的phpinfo()结果查看</p>
      <div class="img-wrap" style="max-width:826px;">
        <img src="https://ws3.sinaimg.cn/large/006tNbRwly1fwjarxyb7hj319w03awfc.jpg" class="img-2x img-show" title="php.ini_file_directory" alt="php.ini_file_directory">
        <p class="img-desc">php.ini</p>
      </div>
      <h2>参考地址</h2>
      <ul>
        <li>php运行时配置 <a href="http://php.net/manual/zh/errorfunc.configuration.php">http://php.net/manual/zh/errorfunc.configuration.php</a></li>
        <li>php-fpm慢日志：检测执行较慢的PHP脚本：<a href="http://blog.csdn.net/ty_hf/article/details/55504172">http://blog.csdn.net/ty_hf/article/details/55504172</a></li>
        <li>php错误处理预定义常量：<a href="http://php.net/manual/zh/errorfunc.constants.php">http://php.net/manual/zh/errorfunc.constants.php</a></li>
      </ul>
    </template>
  </he-article-detail>
</template>

<script>
import HeArticleDetail from '@/components/article/ArticleDetail';

export default {
  name: 'ConfigPhpErrorLog',
  components: {
    'he-article-detail': HeArticleDetail
  }
}
</script>

<style scoped>

</style>
