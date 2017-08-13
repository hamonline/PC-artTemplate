页面路径
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



DAY1

问题：左侧菜单栏鼠标悬浮时样式的显示与隐藏
解决：添加额外样式，实现效果
	问题：导航条垂直居中
	解决：外边距实现
	问题：导航条ul中li当宽度变小时换行
	解决：ul{display：block；white-space：nowrap}，li{ display：inline-block }



总结：
头部导航—bootstrap 固定定位，css3的animation动画与jquery结合添加移除类
	  首页轮播用基于jquery插件jquery.flexslider-min.js实现，简单配置类名


总结：
表单验证依据jquery插件jquery.validate.js实现，简单配置
事件委托----ul中li列表悬浮事件
	 鼠标悬浮事件：jquery中hover==mouseenter和mouseleave（当鼠标离开元素时才会触发），只有在鼠标指针离开被选元素时，才会触发 mouseleave 事件
Mouseover和mouseout在父子元素之间就会不停的触发，鼠标指针离开任何子元素，同样会触发 mouseout 事件



$(window).scrollTop()滚动条滚动------方法设置或返回被选元素的垂直滚动条位置。提示：当滚动条位于最顶部时，位置是 0。
动画滚动用$(‘html,body’).animation({scrollTop:scroll},800)
获取元素高度$(xxx).height，元素距离顶部的高度$(xxx).offset().top获取匹配元素在当前视口的相对偏移。
返回的对象包含两个整型属性：top 和 left。此方法只对可见元素有效。

元素绑定事件===父元素的委托$(‘ul’).on(‘li’,’click’,function(){})


总结：
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




总结：
1.模拟数据-用data.json数据模拟API接口返回数据 服务器端注册路由，响应回调，前端通过ajax发送对应的路由请求
2.页面接受数据，动态交互用artTemplate前端模板实现 json数据的嵌套遍历实现界面效果
3.点击详情 显示对应的内容页 通过a标签的href属性中传参数 ，再在对应页面中匹配location中url的?后面查询对象值，返回该对象的内容 （id应该写唯一值，简化js代码遍历获取元素）
4.遍历对象的属性是字符串，将其拆为数组，如item.str.split(‘/’)—遇到/分割，返回的是数组，这里注意不要用一个变量去接受，变量返回是数组的长度
5.在对页面中动态加载的数据上处理的一些js代码应该写在发送ajax请求中
6.页面之间显示返回对应的点击内容 通过本地存储localStorage，页面跳转用window.location.href=’/index.html’ 存储后在index页面localStorage.getItem(key)
7.点击加载更多 用ajax请求数据，判断返回的数据的长度，限定每次加载的个数，得出总的组数，进而判断最大点击几次可显示完所有的数据；每次再次点击时，开始加载数据对象的索引是上个对象的索引+1；定义函数，创一个是起始索引，一个是总的点击次数，当总次数>组数，则按钮hide（）；页面初始时要从索引从0开始
8.短信验证 看视频





总结：
1.	提取公共部分 利用的是jquery的load方法 将公共部分提取出来，在提取的html页面中可以写style标签写样式，script标签写js逻辑，直接写标签不用写body，页面中其他的说明规范标签元素不用写
2.	注意：此时的footer.html不需要是完整的HTML（大坑），这包含标签内容即可
3.	注意：样式里面映入外部资源都要是绝对路径，否则加载不出来，如：img的本来路径src=’text.png’改为src=’/text.png’；a标签中的href属性一样，加‘/’；注意此时要用虚拟路径ip，即可用webStorm运行
$(document).ready(function(){
  $(".footerWrap").load("footer.html")
  $(".headerWrap").load("header.html")
});


1.	本地存储localStorage存储json数据，必须严格json数据规范，否则会报错：1 Uncaught SyntaxError: Unexpected token o in JSON at position 1
注：谨记json格式问题k和value都加双引号，单引号也不可以先将js对象JSON.stringify(obj)转译成json对象存入，读取本地存储的数据时，再JSON.parse(obj)字符串读取对象
2………………


