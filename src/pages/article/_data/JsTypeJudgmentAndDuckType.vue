<template>
  <he-article-detail>
    <template slot="articleTitle">js类型判断及鸭式辨型</template>
    <template slot="articleContent">
      <h2>数据类型</h2>

      <p>首先来谈一下JavaScript这门语言的数据类型。<br>
        可参见MDN文档</p>

      <blockquote>
        <p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Data_structures">MDN JavaScript 数据类型和数据结构<br>
        </a></p>
      </blockquote>

      <p>JavaScript中有<strong>7种</strong>数据类型，其中有<strong>6种简单数据类型</strong>，<strong>1种复杂数据类型</strong></p>

      <h3>6种简单数据类型</h3>

      <ul>
        <li>String</li>
        <li>Number</li>
        <li>Boolean</li>
        <li>Null</li>
        <li>Undefined</li>
        <li>Symbol(ECMAScript 6新定义)</li>
      </ul>

      <h3>1种复杂数据类型</h3>

      <p><code>Object</code>是唯一的复杂数据类型。<code>Object Array Function</code>这些引用类型值最终都可以归结为<code>Object</code>复杂数据类型。<br>
        简单类型也称为基本类型，由于其<strong>占用空间固定</strong>，是简单的数据段，为了便于提升变量查询速度，将其存储在栈中，即<strong>按值访问</strong>。<br>
        复杂类型也称为引用类型，由于其值会改变，所以不能将其存放在栈中，否则会降低变量查询速度，因此，其值存储在堆(heap)中，而存储在变量处的值，是一个指针，指向存储对象的内存出，即<strong>按址访问</strong>。引用类型中，Function、Array、RegExp、Date等都可以归结为Object类型。
      </p>

      <h2>类型判断</h2>

      <p>下面介绍4种常用的判断类型的方法，并对各个方法存在的问题进行简单的分析。<br>
        4中常用方法是：typeof instanceof、constructor 、构造函数名字。<br>
        用法如下:</p>

      <h2>typeof</h2>

      <blockquote>
        <p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/typeof">MDN typeof</a></p>
      </blockquote>

      <p>typeof 是一个<strong>操作符</strong>，其右跟一个一元表达式，并返回这个表达式的数据类型。返回的结果用该类型的字符串(全小写字母)形式表示，包括一下7种: number、boolean、symbol、string、object、undefined、function。</p>

      <h3>使用示例</h3>

<pre>
typeof &#39;&#39;;              // string 有效
typeof 1;               // number 有效
typeof true;            // boolean 有效
typeof undefined;       // undefined 有效
typeof null;            // object 无效
typeof [] ;             // object 无效
typeof new Function();  // function 有效
typeof new Date();      // object 无效
typeof new RegExp();    // object 无效
typeof Symbol();        // symbol 有效
</pre>

      <p>有些时候，typeof操作符会返回一些令人迷惑但技术上却正确的值：</p>

      <h3>typeof判断存在的陷阱</h3>

      <ul>
        <li>对于基本类型，除null以外，均可以返回正确的结果。</li>
        <li>对于引用类型，除function以外，一律返回object类型</li>
        <li>对于null，返回object类型。</li>
        <li>对于function返回function类型。</li>
      </ul>

      <p>其中，null有属于自己的数据类型Null，引用类型中的数组、日期、正则、也都有属于自己的具体类型，而typeof对于这些类型的处理，只返回了处于其原型链最顶端的Object类型，结果没有错误，但不是我们想要的结果。</p>

      <h2>instanceof</h2>

      <blockquote>
        <p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/instanceof">MDN instanceof</a></p>
      </blockquote>

      <p>instanceof 是用来判断a是否为A的实例，表达式为：a instanceof A，如果a是A的实例，则返回true，否则返回false。在这里需要特别注意的是：<strong>instanceof检测的是原型</strong>，我们用一段伪代码来模拟其内部执行过程：</p>

<pre>
instanceof (a, A) = {
var L = a.__proto__;
var R = A.prototype;
if(L === R){
  // a的内部属性__proto__指向A的的原型对象
  return true;
}
return false;
}
</pre>

      <p>从上述过程可以看出，当a的<strong>proto</strong>指向A的prototype时，就认为a就是A的实例，我们再来看几个例子：</p>

      <h3>使用示例</h3>

<pre>
[] instanceof Array; // true
{} instanceof Object;// true
new Date() instanceof Date;// true

function Person(){};
new Person() instanceof Person;

[] instanceof Object; // true
new Date() instanceof Object;// true
new Person instanceof Object;// true
</pre>

      <p>可以发现，虽然instanceof能够判断出[]是Array的实例，但它认为[]也是Object的实例，为什么呢？<br>
        我们来分析一下[ ]、Array、Object 三者之间的关系：<br>
        从instanceof能够判断出[].<strong>proto</strong>指向了Array.prototype，而Array.prototype.<strong>proto</strong>又指向了Object.prototype，最终Object.prototype.<strong>proto</strong>指向了null，标志着原型链的结束。因此，[]、Array、Object 就在内部形成了一条原型链：<br>
        // 图片待补充<br>
        <img src="image/arry_prototype_link.png" alt="数组示例形成的原型链"><br>
        从原型链可以看出，[]的<strong>proto</strong>直接指向Array.prototype，简介指向Object.prototype，所以按照instanceof的判断规则，[]就是Object的实例。依次类推，类似的new Date()、new Person() 也会形成一条对应的原型链 。因此，<strong>instanceof 只能判断两个对象是否属于实例关系，而不能判断一个对象实例具体属于哪种类型。</strong></p>

      <h3>instanceof判断存在的陷阱</h3>

      <h4>基本类型时的陷阱</h4>

      <ol>
        <li>首先了解一下javascript中的基本类型和包装类型。
          &gt; 《Javascript》高级程序设计 第五章第六节 基本包装类型</li>
      </ol>

      <p>javascript为了方便操作基本类型值，ECMAscript提供了3个特殊的引用类型：Boolean, Number, 和String。每当读取一个基本类型值的时候，后台就会创建一个对应的基本包装类型和对象，从而让我们能够调用这个对象的一些方法来操作这些数据。</p>

<pre>
var s1 = &#39;some text&#39;;
var s2 = s1.substring(2);
</pre>

      <p>上面的示例中，先创建了一个字符串保存在了变量 s1，字符串当然是基本类型值。但是在下一行中我们又调用了 s1 的方法。我们知道基本类型值不是对象，理论上它不应该拥有方法（但它们确实有方法）。其实，为了让我们实现这种直观的操作，后台已经帮助我们完成了一系列的操作。当我们在第二行代码中访问 s1 变量时，访问过程处于读取模式，而在读取模式中访问字符串时，后台都会自动完成下列处理。</p>

      <ul>
        <li>1. 创建 String 类型的一个实例；</li>
        <li>2. 在实例上调用指定的方法；</li>
        <li>3. 销毁这个实例。
          可以将以上步骤想象成是执行了下列代码：</li>
      </ul>

<pre>
var s1 = new String(&#39;some text&#39;);
var s2 = s1.substring(2);
s1 = null
</pre>

      <ol>
        <li>用instanceof判断基本类型值的陷阱
          上面提到基本包装类，就是为了说明instanceof这个陷阱</li>
      </ol>

<pre>
var str1 = &#39;text&#39;;
str1 instanceof String; // false，判断结果出问题
// 这里又正常了
var str2 = new String(&#39;text&#39;);
str2 instanceof String; // true，判断正确
</pre>

      <p>我们会想当然认为 str1 instanceof String会使str1变量处于读取模式，自动建立基本包装类。但是依据上述代码所体现表象来看，instanceof 运算符是直接访问的变量的原始值。</p>

      <h4>数组及其他类型的问题</h4>

      <h4>跨窗口问题</h4>

      <p>instanceof 操作符的问题在于，它假定只有一个全局执行环境。如果网页中包含多个框架，那实际上就存在两个以上不同的全局执行环境，从而存在两个以上不同版本的构造函数。如果你从一个框架向另一个框架传入一个数组，那么传入的数组与在第二个框架中原生创建的数组分别具有各自不同的构造函数。</p>

<pre>
var iframe = document.createElement(&#39;iframe&#39;);
document.body.appendChild(iframe);
var xArray = window.frames[0].Array;
var arr = new xArray(1, 2, 3); //[1, 2, 3]
arr instanceof Array; // false，判断结果让人迷惑
</pre>

      <p>针对数组的这个问题，ES5提供了Array.isArray()方法。该方法用以确认某个对象本身是否为 Array 类型，而不区分该对象在哪个环境中创建。</p>
<pre>
if (Array.isArray(value)){
   //对数组执行某些操作
}
</pre>

      <p>Array.isArray() 本质上检测的是对象的 [[Class]] 值，[[Class]] 是对象的一个内部属性，里面包含了对象的类型信息，其格式为 [object Xxx] ，Xxx 就是对应的具体类型 。对于数组而言，[[Class]] 的值就是 [object Array] 。</p>

      <h2>constructor</h2>
      <p>当一个函数 F被定义时，JS引擎会为F添加 prototype 原型，然后再在 prototype上添加一个 constructor 属性，并让其指向 F 的引用。如下所示：</p>
      <pre>
function F(){}
F.prototype
</pre>
      <p>当执行 var f = new F()时，F被当成了构造函数，f是F的实例对象，此时F原型上的constructor传递到f上，因此f.constructor === F</p>
      <pre>
var f = new F();
f.constructor === F;  // true
</pre>
      <p>可以看出，F利用原型对象上的constructor引用了自身，当F作为构造函数来创建对象时，原型上的constructor就被遗传到了新创建的对象实例上，从原型链角度讲，构造函数F就是新对象的类型。
        这样做的意义是，让新对象在诞生以后，就具有可追溯的数据类型。
      </p>
      <p>同样，JavaScript中的内置对象在内部构建时也是这样做的：</p>
      <pre>
''.constructor === String
      </pre>

      <h2>toString</h2>

      <h2>鸭式辩型</h2>

      <h2>参考链接</h2>

      <p><a href="https://www.cnblogs.com/onepixel/p/5126046.html">https://www.cnblogs.com/onepixel/p/5126046.html</a> 判断JS数据类型的四种方法</p>
    </template>
  </he-article-detail>
</template>

<script>
import HeArticleDetail from '@/components/article/ArticleDetail';

export default {
  name: '',
  components: {
    'he-article-detail': HeArticleDetail
  }
}
</script>

<style scoped>

</style>
