### 如何使用

安装:
```npm install```

运行:
```npm start```

访问:
http://localhost:3000

## 到位APP开发备忘录

### 进度 
	
- 11个静态页面；
- 首页、服务商列表、地址、商品详情等页面的数据动态获取并展示
- 很多页面交互效果
- 三个表单的前端验证(伪数据)
- 五条后台路由
- 1700余行JSON数据(团队协作的成果)
- [GitHub链接](https://github.com/wuyax/daowayWithServer)

---
###页面路径
1．1	默认主路径http://www.daoway.cn/
1．2	切换城市http://www.daoway.cn/position
1．3	下载APP http://www.daoway.cn/downloadAPP
1．4	服务商http://www.daoway.cn/service/
1.4.1服务商家服务类型 
 http://www.daoway.cn/fuwushang?serviceId=xx
1.4.2服务详情 
http://www.daoway.cn/detail?detailId=xx&CNtag=xx 
1．5	商家入驻http://www.daoway.cn/information
1．6	关于我们http://www.daoway.cn/aboutus
1．7	登录、注册http://www.daoway.com/dian/#/login---------- regist/ forgetpwd
1．8	服务http://www.daoway.cn/fuwu?category=xx&CName=xxx





####问题：左侧菜单栏鼠标悬浮时样式的显示与隐藏
解决：添加额外样式，实现效果
	问题：导航条垂直居中
	解决：外边距实现
	问题：导航条ul中li当宽度变小时换行
	解决：ul{display：block；white-space：nowrap}，li{ display：inline-block }



####总结：
头部导航—bootstrap 固定定位，css3的animation动画与jquery结合添加移除类
	  首页轮播用基于jquery插件jquery.flexslider-min.js实现，简单配置类名


####总结：
表单验证依据jquery插件jquery.validate.js实现，简单配置
事件委托----ul中li列表悬浮事件
	 鼠标悬浮事件：jquery中hover==mouseenter和mouseleave（当鼠标离开元素时才会触发），只有在鼠标指针离开被选元素时，才会触发 mouseleave 事件
Mouseover和mouseout在父子元素之间就会不停的触发，鼠标指针离开任何子元素，同样会触发 mouseout 事件



$(window).scrollTop()滚动条滚动------方法设置或返回被选元素的垂直滚动条位置。提示：当滚动条位于最顶部时，位置是 0。
动画滚动用$(‘html,body’).animation({scrollTop:scroll},800)
获取元素高度$(xxx).height，元素距离顶部的高度$(xxx).offset().top获取匹配元素在当前视口的相对偏移。
返回的对象包含两个整型属性：top 和 left。此方法只对可见元素有效。

元素绑定事件===父元素的委托$(‘ul’).on(‘li’,’click’,function(){})


####总结：
Canvas绘制img用原生js不用jquery获取canvas标签，获取不到该元素，直接原生的js获取元素
	具体绘制：if(canvas.getContext){  
        var ctx = canvas.getContext("2d");
        var img = new Image();
        // 图片加载成功onload
        img.src = "../img/shangjia/daowayApp.png";
        img.onload = function(){
// 0,0是在canvas中起始位置，115,155是img的宽高
          ctx.drawImage(img,0,0,115,115);
        };
      }
Data自定义属性：获取属性值let _id = $(this).data('to')   如data-to=‘xx’
链式调用的样式切换
$(this).addClass('slibingsclor')
$(this).siblings('li').removeClass('slibingsclor')  $(this).toggleClass('activity').siblings().removeClass('activity');




####总结：
1.模拟数据-用data.json数据模拟API接口返回数据 服务器端注册路由，响应回调，前端通过ajax发送对应的路由请求
2.页面接受数据，动态交互用artTemplate前端模板实现 json数据的嵌套遍历实现界面效果
3.点击详情 显示对应的内容页 通过a标签的href属性中传参数 ，再在对应页面中匹配location中url的?后面查询对象值，返回该对象的内容 （id应该写唯一值，简化js代码遍历获取元素）
4.遍历对象的属性是字符串，将其拆为数组，如item.str.split(‘/’)—遇到/分割，返回的是数组，这里注意不要用一个变量去接受，变量返回是数组的长度
5.在对页面中动态加载的数据上处理的一些js代码应该写在发送ajax请求中
6.页面之间显示返回对应的点击内容 通过本地存储localStorage，页面跳转用window.location.href=’/index.html’ 存储后在index页面localStorage.getItem(key)
7.点击加载更多 用ajax请求数据，判断返回的数据的长度，限定每次加载的个数，得出总的组数，进而判断最大点击几次可显示完所有的数据；每次再次点击时，开始加载数据对象的索引是上个对象的索引+1；定义函数，创一个是起始索引，一个是总的点击次数，当总次数>组数，则按钮hide（）；页面初始时要从索引从0开始
8.短信验证 看视频





####总结：
1.	提取公共部分 利用的是jquery的load方法 将公共部分提取出来，在提取的html页面中可以写style标签写样式，script标签写js逻辑，直接写标签不用写body，页面中其他的说明规范标签元素不用写
2.	注意：此时的footer.html不需要是完整的HTML（大坑），这包含标签内容即可
3.	注意：样式里面映入外部资源都要是绝对路径，否则加载不出来，如：img的本来路径src=’text.png’改为src=’/text.png’；a标签中的href属性一样，加‘/’；注意此时要用虚拟路径ip，即可用webStorm运行
$(document).ready(function(){
  $(".footerWrap").load("footer.html")
  $(".headerWrap").load("header.html")
});


####1.	本地存储localStorage存储json数据，必须严格json数据规范，否则会报错：1 Uncaught SyntaxError: Unexpected token o in JSON at position 1
注：谨记json格式问题k和value都加双引号，单引号也不可以先将js对象JSON.stringify(obj)转译成json对象存入，读取本地存储的数据时，再JSON.parse(obj)字符串读取对象
2………………




### 技术选型
1. jQuery实现页面交互效果，获取数据等，简化代码量，加快开发效率
	- jquery.vaildata.js-实现表单验证功能
	- SuperSlide-实现轮播图
2. qrcode.js 动态生成二维码
3. gVerify.js 生成图形验证码
4. 前端模板技术art-Template 写vue项目一样写jQuery项目
5. ES5 语法执行ES5标准
6. node.js搭建后台服务器
	1. express 基于 Node.js 平台，快速、开放、极简的 web 开发框架。
	2. body-parser 解析post请求的请求体
	3. EJS 后台模板技术
6. bootstrap 前端框架，简单易用的组件


### 开发流程

此处省略1W字。
![dev flow](20170813_devflow.png)

**实际流程**
1. 实现所有静态页面
2. 分析业务逻辑和页面逻辑关系
3. 设计后台JSON数据格式 **!important**
4. 搭建后台服务器
5. 配置路由，前端请求能正常返回JSON数据
6. 编写JS代码请求后台数据
7. 动态展现数据
8. 编写页面交互效果
9. 测试，修复死链

---
### 技术点
1. 大量使用过的伪类选择器
```
.conmentss ul li:nth-child(2) em{
    font-style: normal;
    margin-left: 10px;
}
```
**坑：** 这个选择器选中的是ul下的第二个元素，如果正好是li那么就选中，如果第二个元素不是li则无法选中。

2. 大量使用伪元素
	- 解决由于浮动硬气的高度塌陷问题
	- 给元素添加icon不要太方便
	- 我觉得能提高页面性能

3. JSON 数据结构
```
{
	"category":[],
	"fuwushang":[],
	"service":[],
	"comments":[]
}
```
4. art-Template
```
//输出语法，类似于VUE语法
{{value}}
{{data.key}}
{{data['key']}}
{{a ? b : c}}
{{a || b}}
{{a + b}}
```
**坑：** 传数据的时候要传对象，script标签里面能直接访问属性
```
//循环语法，极大提高开发效率
{{each target}}
    {{$index}} {{$value}}
{{/each}}
```
5. 获取URL中请求参数
```javascript
// 定义获取url中请求参数的方法
function GetQueryString(name) {
	var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if(r!=null)return  unescape(r[2]);
	return null;
}
// 获取服务商的ID
let serviceID = GetQueryString('serviceId');
```

---
### 开发中遇到的问题


**问题：**
在动态生成菜单的时候，会出现绑定的hover事件无法绑定的情况。
原因：
数据时通过ajax异步获取的，在执行hover事件绑定的时候，列表还没有生成。
解决办法：
把绑定事件的方法写在，ajax的回调函数里面。

**问题：**
修改完城市信息以后刷新页面地址信息又变成原来的了。
原因：
城市信息没有保存
解决办法：
位置信息是通过存放在localstroage,每次加载页面都会从localstroage获取最新的地址信息。


**问题：**
静态页面的时候显示正常，当使用模板以后，页面布局错误。
原因:
art_template模板会在html值占据一个位置，再用这个选择器，就无法正常的选择了。
```css
	.ulactivety li:nth-child(4n){
	    margin-right: 0;
	}
```
解决办法：
```css
.ulactivety li:nth-of-type(4n){
    margin-right: 0;
}
```
这两个方法的区别就是，区不区分类型。

**问题：**
写了一个index.js而且在index.html 和 service.html都引入了，两个页面中的逻辑都写在了一起，这个时候原本正常的页面都无法使用了。
原因:
art-Template 在渲染页面的时候在当前html中找不到响应的id,所以抛出异常。
解决办法：
每个页面专门的逻辑写在各自的文件中，公用的逻辑写在一个外部js文件中。


**问题：**(怀疑是插件问题！)
![error](20170812_error.png)
```
Uncaught SyntaxError: Invalid shorthand property initializer 
语法错误：简称的属性初始化不完整

Syntax 语法；句法
Invalid 有病的；伤残的
shorthand 简称；速记法的；速记
initializer 初始化
```


![errot](20170812_error1.png)

解决办法：
1. 清除浏览器缓存---问题依旧
1. 用别人的电脑访问---正常
2. 用Firefox访问---正常
3. 杀进程 --- bingo
4. 刷新几次问题依旧

**问题：**
jquery无法进行链式调用
```
$('.hotcity')[dataqk].xxx
```
原因：
中括号把jQuery对象转换成了DOM对象。
解决办法：
外面再套一层$就好了。
```
$($('.hotcity')[dataqk]).xxx
```

**问题及解决办法**
使用EJS模板的时候，由于我们不确定baojie是否存在，使用了一个安全的方法，typeof 来判断数据类型。
```
<% if (typeof baojie == 'string') { %>
                    <li>保洁</li>
                <% } %>
```


**问题：**(待研究)
使用```jquery.validate.js```做表单验证的时候写成内联的验证的时候无法正常验证
内联规则实在点击submit后进行验证，而写进配置文件里面是blur的时候验证。

---
### Issues
1. 表单验证部分存在不完善的部分
2. 服务列表页面排序问题
3. 分页问题
4. 懒加载问题
2. 页面性能问题
3. 开发模式问题
4. 工程化问题

---
### 参考链接
[SuperSlide](http://www.superslide2.com/index.html)
[jqueryvalidation](https://jqueryvalidation.org/)
[qrcode](http://code.ciaoca.com/javascript/qrcode/)
[art-template](http://aui.github.io/art-template/docs/syntax.html)

---
### License

[MIT](https://opensource.org/licenses/MIT)
Copyright (c) 2017-present, daowayApp group