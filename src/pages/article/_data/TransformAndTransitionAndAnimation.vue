<template>
  <he-article-detail>
    <template slot="articleTitle">多步动画和过渡</template>
    <template slot="articleContent">
      <div class="field-item even" property="content:encoded"><p><a href="//www.w3cplus.com/content/css3-animation" target="_blank">CSS animations</a> 用法简洁功能强大，一个完整的动画只需命名、<code>@keyframes</code> 关键帧定义以及绑定到元素三个步骤。虽然 <a href="//www.w3cplus.com/content/css3-animation" target="_blank">CSS animations</a> 的概念和用法比较简单，但却可以创造复杂精致的动画，比如多步过渡动画，这也是本文关注所要向您介绍的重点。</p>

        <h2>keyframe</h2>

        <p>如果我们为一个元素设置了背景色的关键帧，比如将背景从橘色变为黑色，那么橘色就会随着时间的推移渐变为黑色，可以说 CSS animations 自带了过渡效果。</p>

        <pre class="css"><code class="css"><span class="tag"><span class="tag">body</span></span> <span class="rules"><span class="rules">{
    <span class="rule"><span class="attribute"><span class="rule"><span class="attribute">background</span></span></span><span class="rule">:<span class="value"><span class="value"> black;</span></span></span><span class="value"></span></span>
    <span class="rule"><span class="attribute"><span class="rule"><span class="attribute">animation</span></span></span><span class="rule">:<span class="value"><span class="value"> color-me-in <span class="number"><span class="number">5</span></span>s;</span></span></span><span class="value"></span></span> <span class="comment"><span class="comment">/* other keywords like "infinite alternate" can be useful here */</span></span>
<span class="rule"><span class="rule">}</span></span></span><span class="rule"></span></span>

<span class="at_rule"><span class="at_rule">@keyframes color-me-in </span></span>{
    <span class="comment"><span class="comment">/* You could think of as "step 1" */</span></span>
    0% <span class="rules"><span class="rules">{
        <span class="rule"><span class="attribute"><span class="rule"><span class="attribute">background</span></span></span><span class="rule">:<span class="value"><span class="value"> orange;</span></span></span><span class="value"></span></span>
    <span class="rule"><span class="rule">}</span></span></span><span class="rule"></span></span>
    <span class="comment"><span class="comment">/* You could think of as "step 2" */</span></span>
    100% <span class="rules"><span class="rules">{
        <span class="rule"><span class="attribute"><span class="rule"><span class="attribute">background</span></span></span><span class="rule">:<span class="value"><span class="value"> black;</span></span></span><span class="value"></span></span>
    <span class="rule"><span class="rule">}</span></span></span><span class="rule"></span></span>
}
</code></pre>

        <div style="margin-bottom: 20px;"><iframe id="cp_embed_ZbePzr" src="//codepen.io/css-tricks/embed/ZbePzr?height=268&amp;theme-id=1&amp;slug-hash=ZbePzr&amp;default-tab=result&amp;user=css-tricks" scrolling="no" frameborder="0" height="268" allowtransparency="true" allowfullscreen="true" name="CodePen Embed" title="CodePen Embed" class="cp_embed_iframe undefined" style="width: 100%; overflow: hidden;"></iframe></div>

        <p>接下来我们还可以添加更多的过渡色：</p>

        <pre class="css"><code class="css"><span class="at_rule"><span class="at_rule">@keyframes color-me-in </span></span>{
    0% <span class="rules"><span class="rules">{
        <span class="rule"><span class="attribute"><span class="rule"><span class="attribute">background</span></span></span><span class="rule">:<span class="value"><span class="value"> orange;</span></span></span><span class="value"></span></span>
    <span class="rule"><span class="rule">}</span></span></span><span class="rule"></span></span>
    <span class="comment"><span class="comment">/* Adding a step in the middle */</span></span>
    50% <span class="rules"><span class="rules">{
        <span class="rule"><span class="attribute"><span class="rule"><span class="attribute">background</span></span></span><span class="rule">:<span class="value"><span class="value"> blue;</span></span></span><span class="value"></span></span>
    <span class="rule"><span class="rule">}</span></span></span><span class="rule"></span></span>
    100% <span class="rules"><span class="rules">{
        <span class="rule"><span class="attribute"><span class="rule"><span class="attribute">background</span></span></span><span class="rule">:<span class="value"><span class="value"> black;</span></span></span><span class="value"></span></span>
    <span class="rule"><span class="rule">}</span></span></span><span class="rule"></span></span>
}
</code></pre>

        <div style="margin-bottom: 20px;"><iframe id="cp_embed_meWoyy" src="//codepen.io/css-tricks/embed/meWoyy?height=268&amp;theme-id=1&amp;slug-hash=meWoyy&amp;default-tab=result&amp;user=css-tricks" scrolling="no" frameborder="0" height="268" allowtransparency="true" allowfullscreen="true" name="CodePen Embed" title="CodePen Embed" class="cp_embed_iframe undefined" style="width: 100%; overflow: hidden;"></iframe></div>
        <p>简而言之：从动画开始到结束，一直都有过渡效果在发生。</p>
        <h2>去除补间动画</h2>
        <p>从上面的示例可以看到，颜色变化之间有明显的过渡效果，这种默认行为在一般情况下都是不错的。通常来说，由于 <code>animation-timing-function</code> 的默认值是 <code>ease</code>，所以动画想过往往比 <code>linear</code> 线性渐变效果更流畅和生动。</p>
        <p>如果使用 <code>step()</code> 函数来强制关键帧在特定的时间点执行，而不再是以过渡的效果实现：</p>
        <div style="margin-bottom: 20px;"><iframe id="cp_embed_bEdKaW" src="//codepen.io/css-tricks/embed/bEdKaW?height=302&amp;theme-id=1&amp;slug-hash=bEdKaW&amp;default-tab=result&amp;user=css-tricks" scrolling="no" frameborder="0" height="302" allowtransparency="true" allowfullscreen="true" name="CodePen Embed" title="CodePen Embed" class="cp_embed_iframe undefined" style="width: 100%; overflow: hidden;"></iframe></div>
        <h2>多步动画</h2>
        <p>Apple Music 的声音均衡器就是多部动画的经典示例：多个垂直的指示条随着音乐的节奏或上升或下降。下面是一个没有动画的效果：</p>

        <div style="margin-bottom: 20px;"><iframe id="cp_embed_MapxpG" src="//codepen.io/css-tricks/embed/MapxpG?height=132&amp;theme-id=1&amp;slug-hash=MapxpG&amp;default-tab=result&amp;user=css-tricks" scrolling="no" frameborder="0" height="132" allowtransparency="true" allowfullscreen="true" name="CodePen Embed" title="CodePen Embed" class="cp_embed_iframe undefined" style="width: 100%; overflow: hidden;"></iframe></div>

        <p>接下来创建一个拥有 <code>25</code> 帧的动画，并命名为 <code>equalize</code>，每一帧占动画 <code>4%</code> 的时间，然后将该动画绑定到 <code>.bar</code> 元素上：</p>

        <div style="margin-bottom: 20px;"><iframe id="cp_embed_pjeYjd" src="//codepen.io/css-tricks/embed/pjeYjd?height=134&amp;theme-id=1&amp;slug-hash=pjeYjd&amp;default-tab=result&amp;user=css-tricks" scrolling="no" frameborder="0" height="134" allowtransparency="true" allowfullscreen="true" name="CodePen Embed" title="CodePen Embed" class="cp_embed_iframe undefined" style="width: 100%; overflow: hidden;"></iframe></div>

        <p>虽然效果动起来了，但是与我们预期的还是有些差异：每个垂直条应该是独立变化的。接下来，我们为每个 <code>.bar</code> 添加不同的 <code>animation-duration</code> 动画属性，从而设定不同的动画时间：</p>

        <div style="margin-bottom: 20px;"><iframe id="cp_embed_XmMJqj" src="//codepen.io/geoffgraham/embed/XmMJqj?height=134&amp;theme-id=1&amp;slug-hash=XmMJqj&amp;default-tab=result&amp;user=geoffgraham" scrolling="no" frameborder="0" height="134" allowtransparency="true" allowfullscreen="true" name="CodePen Embed" title="CodePen Embed" class="cp_embed_iframe undefined" style="width: 100%; overflow: hidden;"></iframe></div>

        <p>大功告成！节奏响起之时，这个动画就会随之起舞。此外还有一个可选属性：<code>animation-delay</code>。它支持负值时间，可以让动画同时动起来：</p>

        <div style="margin-bottom: 20px;"><iframe id="cp_embed_LGVryo" src="//codepen.io/css-tricks/embed/LGVryo?height=147&amp;theme-id=1&amp;slug-hash=LGVryo&amp;default-tab=result&amp;user=css-tricks" scrolling="no" frameborder="0" height="147" allowtransparency="true" allowfullscreen="true" name="CodePen Embed" title="CodePen Embed" class="cp_embed_iframe undefined" style="width: 100%; overflow: hidden;"></iframe></div>

        <h2>过渡</h2>

        <p><code>transition</code> 和 <code>animation</code> 的用法一样简单，简写形式如下：</p>

        <pre class="css"><code class="css"><span class="class"><span class="class">.move-me</span></span> <span class="rules"><span class="rules">{
    <span class="rule"><span class="attribute"><span class="rule"><span class="attribute">transition</span></span></span><span class="rule">:<span class="value"><span class="value"> [transition-property] [transition-duration] [transition-timing-function] [transition-delay];</span></span></span><span class="value"></span></span>
<span class="rule"><span class="rule">}</span></span></span><span class="rule"></span></span>
</code></pre>

        <p>下面我们给一个元素设置背景的过渡效果，当鼠标悬停在该元素上面时，改变该元素的背景色和宽度：</p>

        <pre class="css"><code class="css"><span class="class"><span class="class">.box</span></span> <span class="rules"><span class="rules">{
    <span class="rule"><span class="attribute"><span class="rule"><span class="attribute">width</span></span></span><span class="rule">:<span class="value"><span class="value"> <span class="number"><span class="number">150</span></span>px;</span></span></span><span class="value"></span></span>
    <span class="rule"><span class="attribute"><span class="rule"><span class="attribute">height</span></span></span><span class="rule">:<span class="value"><span class="value"> <span class="number"><span class="number">150</span></span>px;</span></span></span><span class="value"></span></span>
    <span class="rule"><span class="attribute"><span class="rule"><span class="attribute">background-color</span></span></span><span class="rule">:<span class="value"><span class="value"> red;</span></span></span><span class="value"></span></span>
    <span class="rule"><span class="attribute"><span class="rule"><span class="attribute">transition</span></span></span><span class="rule">:<span class="value"><span class="value"> <span class="number"><span class="number">1</span></span>s;</span></span></span><span class="value"></span></span>
<span class="rule"><span class="rule">}</span></span></span><span class="rule"></span></span>

<span class="class"><span class="class">.box</span></span><span class="pseudo"><span class="pseudo">:hover</span></span> <span class="rules"><span class="rules">{
    <span class="rule"><span class="attribute"><span class="rule"><span class="attribute">width</span></span></span><span class="rule">:<span class="value"><span class="value"> <span class="number"><span class="number">300</span></span>px;</span></span></span><span class="value"></span></span>
    <span class="rule"><span class="attribute"><span class="rule"><span class="attribute">background-color</span></span></span><span class="rule">:<span class="value"><span class="value"> orange;</span></span></span><span class="value"></span></span>
<span class="rule"><span class="rule">}</span></span></span><span class="rule"></span></span>
</code></pre>

        <div style="margin-bottom: 20px;"><iframe id="cp_embed_RrPopP" src="//codepen.io/geoffgraham/embed/RrPopP?height=268&amp;theme-id=1&amp;slug-hash=RrPopP&amp;default-tab=result&amp;user=geoffgraham" scrolling="no" frameborder="0" height="268" allowtransparency="true" allowfullscreen="true" name="CodePen Embed" title="CodePen Embed" class="cp_embed_iframe undefined" style="width: 100%; overflow: hidden;"></iframe></div>

        <p>现在过渡效果还是同时发生的，距离多步过渡还有一点距离。</p>

        <h2>多步过渡</h2>

        <p>要想模仿多步动画，我们可以通过逗号分隔为过渡属性设置多个值，其中的关键是使用 <code>duration</code> 和 <code>delay</code> 属性：</p>

        <pre class="css"><code class="css"><span class="class"><span class="class">.box</span></span> <span class="rules"><span class="rules">{
    <span class="rule"><span class="attribute"><span class="rule"><span class="attribute">transition</span></span></span><span class="rule">:<span class="value"><span class="value">
        <span class="comment"><span class="comment">/* step 1 */</span></span>
        width      <span class="number"><span class="number">1</span></span>s,
        <span class="comment"><span class="comment">/* step 2 */</span></span>
        background <span class="number"><span class="number">0.5</span></span>s <span class="number"><span class="number">1</span></span>s;</span></span></span><span class="value"></span></span>
<span class="rule"><span class="rule">}</span></span></span><span class="rule"></span></span>
</code></pre>

        <div style="margin-bottom: 20px;"><iframe id="cp_embed_mVJKgO" src="//codepen.io/css-tricks/embed/mVJKgO?height=268&amp;theme-id=1&amp;slug-hash=mVJKgO&amp;default-tab=result&amp;user=css-tricks" scrolling="no" frameborder="0" height="268" allowtransparency="true" allowfullscreen="true" name="CodePen Embed" title="CodePen Embed" class="cp_embed_iframe undefined" style="width: 100%; overflow: hidden;"></iframe></div>

        <p>在此基础上，我们还可以进一步拓展出更精致的过渡效果：</p>

        <ul>
          <li>鼠标悬停时，在 <code>1s</code> 内将 <code>width</code> 从 <code>150px</code> 拉伸到 <code>300px</code></li>
          <li>鼠标悬停时，在 <code>1s</code> 内将 <code>background-color</code> 从红色变为橘色</li>
          <li>鼠标悬停时，在 <code>1s</code> 内改变 <code>box-shadow</code> 的方向</li>
          <li>添加一行文本，当 <code>width</code> 和 <code>height</code> 改变时从左侧执行退出动画</li>
          <li>添加另一行文本，当前一行消失时从右侧移入</li>
        </ul>

        <hr>

        <pre class="css"><code class="css"><span class="comment"><span class="comment">/* Our box element */</span></span>
<span class="class"><span class="class">.box</span></span> <span class="rules"><span class="rules">{
    <span class="rule"><span class="attribute"><span class="rule"><span class="attribute">width</span></span></span><span class="rule">:<span class="value"><span class="value"> <span class="number"><span class="number">150</span></span>px;</span></span></span><span class="value"></span></span>
    <span class="rule"><span class="attribute"><span class="rule"><span class="attribute">height</span></span></span><span class="rule">:<span class="value"><span class="value"> <span class="number"><span class="number">150</span></span>px;</span></span></span><span class="value"></span></span>
    <span class="rule"><span class="attribute"><span class="rule"><span class="attribute">background-color</span></span></span><span class="rule">:<span class="value"><span class="value"> red;</span></span></span><span class="value"></span></span>
    <span class="rule"><span class="attribute"><span class="rule"><span class="attribute">box-shadow</span></span></span><span class="rule">:<span class="value"><span class="value"> <span class="number"><span class="number">5</span></span>px <span class="number"><span class="number">5</span></span>px <span class="number"><span class="number">25</span></span>px <span class="hexcolor"><span class="hexcolor">#000</span></span>;</span></span></span><span class="value"></span></span>
    <span class="rule"><span class="attribute"><span class="rule"><span class="attribute">transition</span></span></span><span class="rule">:<span class="value"><span class="value"> all <span class="number"><span class="number">1</span></span>s;</span></span></span><span class="value"></span></span>
<span class="rule"><span class="rule">}</span></span></span><span class="rule"></span></span>

<span class="comment"><span class="comment">/* On hover... */</span></span>
<span class="class"><span class="class">.box</span></span><span class="pseudo"><span class="pseudo">:hover</span></span> <span class="rules"><span class="rules">{
    <span class="comment"><span class="comment">/* Increase width */</span></span>
    <span class="rule"><span class="attribute"><span class="rule"><span class="attribute">width</span></span></span><span class="rule">:<span class="value"><span class="value"> <span class="number"><span class="number">300</span></span>px;</span></span></span><span class="value"></span></span>
    <span class="comment"><span class="comment">/* Change color */</span></span>
    <span class="rule"><span class="attribute"><span class="rule"><span class="attribute">background-color</span></span></span><span class="rule">:<span class="value"><span class="value"> orange;</span></span></span><span class="value"></span></span>
    <span class="comment"><span class="comment">/* Move the shadow */</span></span>
    <span class="rule"><span class="attribute"><span class="rule"><span class="attribute">box-shadow</span></span></span><span class="rule">:<span class="value"><span class="value"> -<span class="number"><span class="number">5</span></span>px <span class="number"><span class="number">5</span></span>px <span class="number"><span class="number">25</span></span>px <span class="hexcolor"><span class="hexcolor">#000</span></span>;</span></span></span><span class="value"></span></span>
<span class="rule"><span class="rule">}</span></span></span><span class="rule"></span></span>

<span class="comment"><span class="comment">/* The first line of text */</span></span>
<span class="class"><span class="class">.box__blurb</span></span> <span class="rules"><span class="rules">{
    <span class="comment"><span class="comment">/* Start with full opacity and centered */</span></span>
    <span class="rule"><span class="attribute"><span class="rule"><span class="attribute">opacity</span></span></span><span class="rule">:<span class="value"><span class="value"> <span class="number"><span class="number">1</span></span>;</span></span></span><span class="value"></span></span>
    <span class="rule"><span class="attribute"><span class="rule"><span class="attribute">transform</span></span></span><span class="rule">:<span class="value"><span class="value"> <span class="function"><span class="function">translateX(<span class="number"><span class="number">45</span></span>px)</span></span>;</span></span></span><span class="value"></span></span>
    <span class="comment"><span class="comment">/* Then transition these chained properties */</span></span>
    <span class="rule"><span class="attribute"><span class="rule"><span class="attribute">transition</span></span></span><span class="rule">:<span class="value"><span class="value">
        opacity <span class="number"><span class="number">0.5</span></span>s <span class="number"><span class="number">2</span></span>s,
        transform <span class="number"><span class="number">0.5</span></span>s <span class="number"><span class="number">0.5</span></span>s;</span></span></span><span class="value"></span></span>
<span class="rule"><span class="rule">}</span></span></span><span class="rule"></span></span>

<span class="comment"><span class="comment">/* On .box hover... */</span></span>
<span class="class"><span class="class">.box</span></span><span class="pseudo"><span class="pseudo">:hover</span></span> <span class="class"><span class="class">.box__blurb</span></span> <span class="rules"><span class="rules">{
    <span class="comment"><span class="comment">/* Fade out */</span></span>
    <span class="rule"><span class="attribute"><span class="rule"><span class="attribute">opacity</span></span></span><span class="rule">:<span class="value"><span class="value"> <span class="number"><span class="number">0</span></span>;</span></span></span><span class="value"></span></span>
    <span class="comment"><span class="comment">/* Move over to the right */</span></span>
    <span class="rule"><span class="attribute"><span class="rule"><span class="attribute">transform</span></span></span><span class="rule">:<span class="value"><span class="value"> <span class="function"><span class="function">translateX(-<span class="number"><span class="number">500</span></span>px)</span></span>;</span></span></span><span class="value"></span></span>
<span class="rule"><span class="rule">}</span></span></span><span class="rule"></span></span>

<span class="comment"><span class="comment">/* The second line of text */</span></span>
<span class="class"><span class="class">.rect__blurb</span></span> <span class="rules"><span class="rules">{
    <span class="comment"><span class="comment">/* Start with no opacity and pushed off the element */</span></span>
    <span class="rule"><span class="attribute"><span class="rule"><span class="attribute">opacity</span></span></span><span class="rule">:<span class="value"><span class="value"> <span class="number"><span class="number">0</span></span>;</span></span></span><span class="value"></span></span>
    <span class="rule"><span class="attribute"><span class="rule"><span class="attribute">transform</span></span></span><span class="rule">:<span class="value"><span class="value"> <span class="function"><span class="function">translateX(<span class="number"><span class="number">500</span></span>px)</span></span>;</span></span></span><span class="value"></span></span>
    <span class="comment"><span class="comment">/* Then transition these chained properties */</span></span>
    <span class="rule"><span class="attribute"><span class="rule"><span class="attribute">transition</span></span></span><span class="rule">:<span class="value"><span class="value">
        opacity <span class="number"><span class="number">0.5</span></span>s <span class="number"><span class="number">1</span></span>s,
        transform <span class="number"><span class="number">0.5</span></span>s <span class="number"><span class="number">1</span></span>s;</span></span></span><span class="value"></span></span>
<span class="rule"><span class="rule">}</span></span></span><span class="rule"></span></span>

<span class="comment"><span class="comment">/* On .box hover... */</span></span>
<span class="class"><span class="class">.box</span></span><span class="pseudo"><span class="pseudo">:hover</span></span> <span class="class"><span class="class">.rect__blurb</span></span> <span class="rules"><span class="rules">{
    <span class="comment"><span class="comment">/* Face in */</span></span>
    <span class="rule"><span class="attribute"><span class="rule"><span class="attribute">opacity</span></span></span><span class="rule">:<span class="value"><span class="value"> <span class="number"><span class="number">1</span></span>;</span></span></span><span class="value"></span></span>
    <span class="comment"><span class="comment">/* While entering from the right */</span></span>
    <span class="rule"><span class="attribute"><span class="rule"><span class="attribute">transform</span></span></span><span class="rule">:<span class="value"><span class="value"> <span class="function"><span class="function">translateX(-<span class="number"><span class="number">100</span></span>px)</span></span>;</span></span></span><span class="value"></span></span>
<span class="rule"><span class="rule">}</span></span></span><span class="rule"></span></span>
</code></pre>

        <div style="margin-bottom: 20px;"><iframe id="cp_embed_dGoOMB" src="//codepen.io/geoffgraham/embed/dGoOMB?height=268&amp;theme-id=1&amp;slug-hash=dGoOMB&amp;default-tab=result&amp;user=geoffgraham" scrolling="no" frameborder="0" height="268" allowtransparency="true" allowfullscreen="true" name="CodePen Embed" title="CodePen Embed" class="cp_embed_iframe undefined" style="width: 100%; overflow: hidden;"></iframe></div>

        <p>下面是另一个多步过渡的示例，当鼠标悬停在按钮上时，执行多步过渡：</p>

        <div style="margin-bottom: 20px;"><iframe id="cp_embed_zrGvaq" src="//codepen.io/chriscoyier/embed/zrGvaq?height=281&amp;theme-id=1&amp;slug-hash=zrGvaq&amp;default-tab=result&amp;user=chriscoyier" scrolling="no" frameborder="0" height="281" allowtransparency="true" allowfullscreen="true" name="CodePen Embed" title="CodePen Embed" class="cp_embed_iframe undefined" style="width: 100%; overflow: hidden;"></iframe></div>

        <h2>总结</h2>

        <p>多步动画和过渡是非常有富有表现力的 CSS 效果。上面的音乐均衡器是一个很实用的示例，如果你对此很感兴趣，还可以看看 Ana Tudor 的这篇文章<a href="https://css-tricks.com/how-i-live-coded-my-most-hearted-codepen-demo/" target="_blank">《How I Live-Coded My Most-Hearted Pen》</a>以及 Rémi Lacorn 的这个示例：<a href="//codepen.io/rlacorne/pen/eKfkh" target="_blank">//codepen.io/rlacorne/pen/eKfkh</a>。</p>

        <blockquote>
          <p>本文根据<a href="https://css-tricks.com/author/geoffgraham/" target="_blank">@GEOFF GRAHAM</a>的《<a href="https://css-tricks.com/using-multi-step-animations-transitions/" target="_blank">Using Multi-Step Animations and Transitions</a>》所译，整个译文带有我们自己的理解与思想，如果译得不好或有不对之处还请同行朋友指点。如需转载此译文，需注明英文出处：<a href="https://css-tricks.com/using-multi-step-animations-transitions/" target="_blank">https://css-tricks.com/using-multi-step-animations-transitions/</a>。</p>
        </blockquote>
        <p>如需转载，烦请注明出处：<a href="//www.w3cplus.com/css3/using-multi-step-animations-transitions.html" target="_blank">//www.w3cplus.com/css3/using-multi-step-animations-transitions.html</a></p>
      </div>
    </template>
  </he-article-detail>
</template>

<script>
import HeArticleDetail from '@/components/article/ArticleDetail';

export default {
  name: 'TransformAndTransitionAndAnimation',
  components: {
    'he-article-detail': HeArticleDetail
  }
}
</script>

<style scoped>

</style>
