# jQuery Lazy Load 图片延迟加载
```
<script src="jquery.js"></script>
<script src="jquery.lazyload.js"></script>

<!--
将真实图片地址写在 data-original 属性中，而 src 属性中的图片换成占位符的图片（例如 1x1 像素的灰色图片或者 loading 的 gif 图片）
添加 class="lazy" 用于区别哪些图片需要延时加载，当然你也可以换成别的关键词，修改的同时记得修改调用时的 jQuery 选择器
添加 width 和 height 属性有助于在图片未加载时占满所需要的空间
-->
<img class="lazy" src="grey.gif" data-original="example.jpg" width="640" heigh="480">

$('img.lazy').lazyload();
```

`jQuery Lazy Load 图片延迟加载 - 前端开发仓库`
http://code.ciaoca.com/jquery/lazyload/
