var userApi = require('./api/usersApi');
var fs = require('fs');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser())

// 后端api路由
app.use('/api/users', userApi);
//静态文件
app.use('/',express.static('static'));


//跨域问题
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
  });

//默认加载日系风格
  app.get('/', function(req,res){
     console.log("/ get request");
     var photos = [{
       pic:"/static/imgs/r6.jpg",
       text1:"啊喵爱吃鱼",
       text2:"摄于2019.4.2",
       height:"430",
       width:"300"
   },
   {
       pic:"/static/imgs/r5.jpg",
       text1:"乖乖の兔子",
       text2:"摄于2019.4.1",
       height:"400",
       width:"650"
   },
   {
       pic:"/static/imgs/r3.jpg",
       text1:"格公主",
       text2:"摄于2012.4.5",
       height:"400",
       width:"600"
   },
   {
       pic:"/static/imgs/r1.jpg",
       text1:"安徒生的女王",
       text2:"摄于2015.5.14",
       height:"450",
       width:"300"
   },
   {
       pic:"/static/imgs/r10.jpeg",
       text1:"ɡood゛兔そ",
       text2:"摄于2014.5.7",
       height:"400",
       width:"350"
   },
   {
       pic:"/static/imgs/r4.jpg",
       text1:"岁月如故",
       text2:"摄于2012.5.12",
       height:"240",
       width:"340"
   },
   {
       pic:"/static/imgs/r11.jpg",
       text1:"兔子急了",
       text2:"摄于2008.5.16",
       height:"240",
       width:"300"
   },
   {
       pic:"/static/imgs/r7.jpg",
       text1:"眉眼如初",
       text2:"摄于2018.3.15",
       height:"400",
       width:"650"
   },
   {
       pic:"/static/imgs/r12.jpg",
       text1:"眉眼如初",
       text2:"摄于2019.6.12",
       height:"240",
       width:"300"
   }]; 
       res.send(photos);
  });
 
  app.get('/rixis', function(req,res){
     console.log("/rixi get request");
     var photos =[{
        pic:"/static/imgs/r6.jpg",
        text1:"啊喵爱吃鱼",
        text2:"摄于2019.4.2",
        height:"430",
        width:"300"
    },
    {
        pic:"/static/imgs/r5.jpg",
        text1:"乖乖の兔子",
        text2:"摄于2019.4.1",
        height:"400",
        width:"650"
    },
    {
        pic:"/static/imgs/r3.jpg",
        text1:"格公主",
        text2:"摄于2012.4.5",
        height:"400",
        width:"600"
    },
    {
        pic:"/static/imgs/r1.jpg",
        text1:"安徒生的女王",
        text2:"摄于2015.5.14",
        height:"450",
        width:"300"
    },
    {
        pic:"/static/imgs/r10.jpeg",
        text1:"ɡood゛兔そ",
        text2:"摄于2014.5.7",
        height:"400",
        width:"350"
    },
    {
        pic:"/static/imgs/r4.jpg",
        text1:"岁月如故",
        text2:"摄于2012.5.12",
        height:"240",
        width:"340"
    },
    {
        pic:"/static/imgs/r11.jpg",
        text1:"兔子急了",
        text2:"摄于2008.5.16",
        height:"240",
        width:"300"
    },
    {
        pic:"/static/imgs/r7.jpg",
        text1:"眉眼如初",
        text2:"摄于2018.3.15",
        height:"400",
        width:"650"
    },
    {
        pic:"/static/imgs/r12.jpg",
        text1:"眉眼如初",
        text2:"摄于2019.6.12",
        height:"240",
        width:"300"
    }]; 
       res.send(photos);
  });
  app.get('/huaijius', function(req,res){
   console.log("/huaijiu get request");
   var photos = [{
     pic:"/static/imgs/h2.jpg",
     text1:"啊喵爱吃鱼",
     text2:"摄于2015.2.5",
     height:"410",
     width:"270"},
     {
     pic:"/static/imgs/h1.jpg",
     text1:"啊喵爱吃鱼",
     text2:"摄于2012.10.12",
     height:"360",
     width:"700"},
     {
     pic:"/static/imgs/h8.jpg",
     text1:"啊喵爱吃鱼",
     text2:"摄于2015.9.12",
     height:"360",
     width:"650"},
     {
     pic:"/static/imgs/h5.jpeg",
     text1:"啊喵爱吃鱼",
     text2:"摄于2012.5.21",
     height:"410",
     width:"300"},
     {
     pic:"/static/imgs/h3.jpg",
     text1:"啊喵爱吃鱼",
     text2:"摄于2019.5.25",
     height:"430",
     width:"470"},
     {
     pic:"/static/imgs/h7.jpeg",
     text1:"啊喵爱吃鱼",
     text2:"摄于2019.2.29",
     height:"430",
     width:"490"},
     ]; 
     res.send(photos);
 });
 app.get('/yishus', function(req,res){
   console.log("/yishu get request");
   var photos = [{
     pic:"/static/imgs/o2.jpg",
     text1:"啊喵爱吃鱼",
     text2:"摄于2014.10.1",
     height:"420",
     width:"650"
 },
 {
     pic:"/static/imgs/o5.jpg",
     text1:"乖乖の兔子",
     text2:"摄于2019.11.11",
     height:"350",
     width:"650"
 },
 {
     pic:"/static/imgs/o3.jpg",
     text1:"格公主",
     text2:"摄于2019.12.12",
     height:"500",
     width:"300"
 },
 {
     pic:"/static/imgs/o4.jpg",
     text1:"安徒生的女王",
     text2:"摄于2019.3.12",
     height:"250",
     width:"300"
 },
 {
     pic:"/static/imgs/o7.jpg",
     text1:"岁月如故",
     text2:"摄于2019.11.21",
     height:"400",
     width:"680"
 },
 {
     pic:"/static/imgs/o8.jpg",
     text1:"岁月如故",
     text2:"摄于2019.1.31",
     height:"400",
     width:"270"
 },
 {
     pic:"/static/imgs/o6.jpg",
     text1:"岁月如故",
     text2:"摄于2015.11.1",
     height:"450",
     width:"650"
 },
 {
     pic:"/static/imgs/o1.jpg",
     text1:"岁月如故",
     text2:"摄于2012.1.11",
     height:"450",
     width:"320"
 },]; 
     res.send(photos);
 });
 app.get('/coss', function(req,res){
   console.log("/cos get request");
   var photos = [{
     pic:"/static/imgs/c1.jpg",
     text1:"啊喵爱吃鱼",
     text2:"摄于2019.12.10",
     height:"430",
     width:"260"
 },
 {
     pic:"/static/imgs/c2.jpg",
     text1:"乖乖の兔子",
     text2:"摄于2012.11.31",
     height:"430",
     width:"700"
 },
 {
     pic:"/static/imgs/c3.jpg",
     text1:"格公主",
     text2:"摄于2011.1.13",
     height:"430",
     width:"260"
 },
 {
     pic:"/static/imgs/c4.jpg",
     text1:"格公主",
     text2:"摄于2015.12.1",
     height:"430",
     width:"700"
 },
 {
     pic:"/static/imgs/c5.jpg",
     text1:"格公主",
     text2:"摄于2002.11.1",
     height:"410",
     width:"235"
 },
 {
     pic:"/static/imgs/c6.jpg",
     text1:"格公主",
     text2:"摄于2019.12.11",
     height:"410",
     width:"235"
 },
 {
     pic:"/static/imgs/c7.jpg",
     text1:"格公主",
     text2:"摄于2012.12.11",
     height:"410",
     width:"235"
 },
 {
     pic:"/static/imgs/c8.jpg",
     text1:"格公主",
     text2:"摄于2015.1.12",
     height:"410",
     width:"235"
 },
 ]; 
     res.send(photos);
 });
 app.get('/xiaoyuans', function(req,res){
   console.log("/xiaoyuan get request");
   var photos = [{
     pic:"/static/imgs/x1.jpg",
     text1:"啊喵爱吃鱼",
     text2:"摄于2017.12.1",
     height:"430",
     width:"300"
 },
 {
     pic:"/static/imgs/x2.jpg",
     text1:"乖乖の兔子",
     text2:"摄于2019.8.13",
     height:"400",
     width:"650"
 },
 {
     pic:"/static/imgs/x3.jpg",
     text1:"格公主",
     text2:"摄于2019.1.1",
     height:"400",
     width:"600"
 },
 {
     pic:"/static/imgs/x4.jpg",
     text1:"安徒生的女王",
     text2:"摄于2019.1.1",
     height:"450",
     width:"300"
 },
 {
     pic:"/static/imgs/x5.jpg",
     text1:"ɡood゛兔そ",
     text2:"摄于2019.1.1",
     height:"700",
     width:"350"
 },
 {
     pic:"/static/imgs/x6.jpg",
     text1:"岁月如故",
     text2:"摄于2019.1.1",
     height:"240",
     width:"270"
 },
 {
     pic:"/static/imgs/x7.jpg",
     text1:"兔子急了",
     text2:"摄于2019.1.1",
     height:"240",
     width:"300"
 },
 {
     pic:"/static/imgs/x8.jpg",
     text1:"眉眼如初",
     text2:"摄于2019.1.1",
     height:"400",
     width:"650"
 }]; 
     res.send(photos);
 });

 app.get('/gufengs', function(req,res){
   console.log("/gufeng get request");
   var photos = [{
     pic:"/static/imgs/g2.jpg",
     text1:"啊喵爱吃鱼",
     text2:"摄于2019.1.1",
     height:"420",
     width:"650"
 },
 {
     pic:"/static/imgs/g10.jpg",
     text1:"乖乖の兔子",
     text2:"摄于2019.1.1",
     height:"350",
     width:"680"
 },
 {
     pic:"/static/imgs/g3.jpeg",
     text1:"格公主",
     text2:"摄于2019.1.1",
     height:"500",
     width:"300"
 },
 {
     pic:"/static/imgs/g4.jpg",
     text1:"安徒生的女王",
     text2:"摄于2019.1.1",
     height:"250",
     width:"300"
 },
 {
     pic:"/static/imgs/g6.jpg",
     text1:"岁月如故",
     text2:"摄于2019.1.1",
     height:"350",
     width:"680"
 },
 {
     pic:"/static/imgs/g5.jpg",
     text1:"岁月如故",
     text2:"摄于2019.1.1",
     height:"400",
     width:"270"
 },
 {
     pic:"/static/imgs/g7.jpeg",
     text1:"岁月如故",
     text2:"摄于2019.1.1",
     height:"400",
     width:"650"
 },
 {
     pic:"/static/imgs/g9.jpeg",
     text1:"岁月如故",
     text2:"摄于2019.1.1",
     height:"450",
     width:"320"
 },
 ]; 
     res.send(photos);
 });

//discover
// var items = [{
//     upaths:'/static/imgs/user1.png',
//     name:'一只鱼翅',
//     time:'12小时前',
//     paths:'/static/imgs/w1.jpg',
//     tip:'人物摄影技术分享'
//   },
//   {
//     upaths:'/static/imgs/user2.png',
//     name:'呦呦',
//     time:'1小时前',
//     paths:'/static/imgs/w2.jpg',
//     tip:'摄影基础之入门级单反推荐'
//   },
//   {
//     upaths:'/static/imgs/user3.png',
//     name:'卡莎',
//     time:'2小时前',
//     paths:'/static/imgs/w3.jpg',
//     tip:'人物COS摄影布景技巧分享'
//   },
//   ]
  
//   var items2 = [
//   {
//     upaths:'/static/imgs/user4.png',
//     name:'卡莎',
//     time:'2小时前',
//     paths:'/static/imgs/w6.jpg',
//     tip:'浅谈摄影构图技巧'
//   },
//   {
//     upaths:'/static/imgs/user2.png',
//     name:'卡莎',
//     time:'2小时前',
//     paths:'/static/imgs/w4.jpg',
//     tip:'边城'
//   },
//   {
//     upaths:'/static/imgs/user1.png',
//     name:'卡莎',
//     time:'2小时前',
//     paths:'/static/imgs/w5.jpg',
//     tip:'青年摄影大赛作品集'
//   }]
//    app.post('/discover', function(req,res){
//     console.log("/discover post request");
//     items.push(req.body); 
//     res.send(items);
//   });
  
//   app.get('/discover2', function(req,res){
//     console.log("/discover2 get request"); 
//       res.send(items2);
//   });
  
//    app.get('/discover', function(req,res){
//       console.log("/discover get request");
//         res.send(items);
//    });



//dis
var items = [{
    upaths:'/static/imgs/user1.png',
    name:'一只鱼翅',
    time:'12小时前',
    paths:'/static/imgs/w1.jpg',
    tip:'人物摄影技术分享',
    pic1:'/static/imgs/01.jpg',
    pic2:'/static/imgs/02.jpg',
    pic3:'/static/imgs/03.jpg',
    pic4:'/static/imgs/04.jpg ',
    text:' 我学习摄影时间不长，如果现在有人问我“你认为摄影最宝贵的是什么”，我会很小白的告诉他“是经验”。从光圈，快门和感光度的认识，到之后慢慢学习构图技巧，再到对不同摄影器材的摸索等等，这每一部分都需要很多时间去磨练、沉淀和总结，这样才会保证我们游刃有余的在不同环境、使用不同设备去拍照。下面，我总结一下我在学习人像摄影的过程中了解到的一点经验与技巧，希望可以和大家一起共同学习',
    t1:'1.适合的镜头',
    text1:'一款合适的镜头，对我们的取景和创造有至关重要的作用，善用适合的镜头，帮助你事半功倍',
    t2:'2.故事性',
    text2:'一张精彩的摄影作品，有肉也要有血，这样才能“活”过来。我们通过摄影大师的作品中不难看出它所要表现给我们看的东西，让看的人可以细细品味照片所要传达的意思。',
    t3:'3.动感',
    text3:'拍出自然且生动的人像，很好的一个办法就是让主体自然的做出不同的动作，然后等待时机去按动快门。可以只是简单的回头看，向前走，拨头髮或者触碰自己身体的某个部位。',
    t4:'4.沟通', 
    text4:'我在学习摄影的一位老师曾经说过“好的摄影师，技术占三成。”其他因素处理不好也拍不出好的照片，其中一个重要的因素就是沟通能力。如何去与模特建立相互信任，如何建立良好的摄影氛围，如何引导模特的动作，这都是需要经验和学习去掌握，跟摄影技巧没有多大的关系。 建立相互的信任有一个很简单的方法，如果你拍到很喜欢的作品，可以马上给模特儿看一看。如果这张照片取悦模特的话，他和你之间就会多一份隐隐的信任，他也可以从你的照片中去找到感觉，调整动作与表情，拍出更出彩的照片',
  },
  {
    upaths:'/static/imgs/user2.png',
    name:'呦呦',
    time:'1小时前',
    paths:'/static/imgs/w2.jpg',
    tip:'摄影基础之入门级单反推荐',
    pic1:'/static/imgs/11.jpg',
    pic2:'/static/imgs/12.jpg',
    pic3:'/static/imgs/13.jpg',
    pic4:'/static/imgs/14.jpg ',
    text:' 现在越来越多的人喜欢摄影，热爱摄影，喜欢用照片去记录生活的点滴和旅途中的风景，那么今天就给大家带来了几款入门级单反相机，“好用不贵”哟，让你的生活记录显得更为专业。此文章主要分享给喜爱摄影的小萌新们（专业机大佬请自行绕道），值得拥有的入门级单反，市面上也都好评连连的机型，有助于小白更快的熟悉单反的操作以及价格上的平民化。',
    t1:'1.佳能750D',
    text1:'用有2420万的像素，19点自动对焦，对于入门级机型还是很不错的，对小白来说也是很够用的，104万像素的高清可旋转液晶屏，方便拍摄低角度或者自拍。另外带有WIFI传输功能，方便照片的传输。操作上呢简单易懂，并且功能齐全，机身加入电池和储存卡约555g，轻便，适合爱旅行的宝宝哦，入门级单反机型的首选之一哦。',
    t2:'2.佳能200D',
    text2:'同样拥有着2420万的像素，9点对焦，拥有DIGIC 7的影像处理器，此机型另有白色款式，文艺小清新，备受广大小仙女们所喜爱。相机本身就是一件艺术品，你可以将它带入咖啡厅或是旅途中的歇脚点，无不是另一番的黯然生机。另外具有翻转屏和触摸屏功能，随时可以进行低角度拍摄以及自拍哦。另外，相机自带的WIFI传输功能更是可以将你的美照随时的上传记录，是不是棒棒哒！',
    t3:'3.尼康D5300',
    text3:'尼康向来以性价比高著称，今天小编带来的这一款机型具有2416万的有效像素，39个对焦点以及3D对焦追踪，可以抓取你画面中的每一个角落，任由你怎么拍都刻意。另具有可翻转屏幕，方便低角度拍摄，ISO提升到3200也不会出现明显噪点，保证了画面的清晰度以及画质上的锐度，可以在较暗的地方进行拍摄，此外相机自身的WIFI传输功能，方便照片的传输。',
    t4:'4.宾得K-S2', 
    text4:'拥有11点（9点十字对焦点），2012万有效像素，并带有光学防抖（机身防抖），轻松告别手残党，另外本款相机的操作性可谓是强强强，全手动操作，喜欢秀操作的宝宝首选的入门机型，在拍照的同时不忘秀造作也是帅帅哒！注释，这里虽然是全手动操作，并不代表操作难哦，毕竟属于入门机型，另外限量色白柠檬也是很有爱的哦！',
  },
  {
    upaths:'/static/imgs/user3.png',
    name:'卡莎',
    time:'2小时前',
    paths:'/static/imgs/w3.jpg',
    tip:'人物COS摄影布景技巧分享',
    pic1:'/static/imgs/31.jpg',
    pic2:'/static/imgs/32.jpg',
    pic3:'/static/imgs/33.jpg',
    pic4:'/static/imgs/34.jpg ',
    text:' Cosplay拍摄全身照或大半身照的时候，姿势及造型对coser来说及其重要。想要coser的姿势优美耐看，做到下面这几点很重要：',
    t1:'1.头部和身体忌成一条直线',
    text1:'若是在一条直线上，会有一种呆板的感觉。因此，当coser正面朝向镜头时，头部应该稍微向左或向右转一些，照片就会显既优雅又生动。',
    t2:'2.双臂和双腿忌平行',
    text2:'不管coser是持坐姿还是站姿，万万不要让其双臂或双腿呈平行状，因为这样很容易使人有僵硬、机械之感。可以是一直一曲或两者构成一定的角度。如此，就能既造成动感，姿势又富于变化。',
    t3:'3.尽量让体形曲线分明',
    text3:'对于cosplay女性来说，表现其富于魅力的曲线是很有必要的。通常的做法是让人物的一条腿实际上支撑全身的重量，另一条腿稍微抬高些并靠着那一条站立的腿，臂部要转过去，以显示其最窄的一面，胸部则通过腰部的弯曲，尽量地显示其高耸和丰腴感。同时，人物的一只手可摆在臀部，以便给画面提供必要的宽度。',
    t4:'4.坐姿忌陷', 
    text4:'表现coser坐姿时，不能让coser像平常一样将整个身体坐进椅子。可以让其将身体向前移，靠近椅边坐着，并保持挺胸收腹，这样可避免肩垂肚凸现象',
  }
  ]
  
  var items2 = [
  {
    upaths:'/static/imgs/user4.png',
      name:'卡莎',
      time:'2小时前',
      paths:'/static/imgs/w6.jpg',
      tip:'浅谈摄影构图技巧',
      pic1:'/static/imgs/41.jpg',
      pic2:'/static/imgs/42.jpg',
      pic3:'/static/imgs/43.jpg',
      pic4:'/static/imgs/44.jpg ',
      text:' 摄影师是如何用玩具相机或iPhone手机拍出精彩作品的？他们可不是通过精确控制曝光来做到的。了解光圈如何影响景深，以及如何利用快门速度创作动感照片是很重要的。只是当你无法控制这些因素时，只利用构图也能拍出好的照片。下面有4个简单的方法，可以帮助你提高自己的构图水平',
      t1:'1.知道何时使用三分法则',
      text1:'了解为何三分法则可以帮助你提高照片质量，这会让你的照片前进一大步，并有利于吸引住观众的注意力。',
      t2:'2.引导观众的视线',
      text2:'你可以利用场景的的元素来创作出吸引观众的画面。要做到这一点，就要通过视觉排列，引导观众的视线自然地进入画面。比如在画面中安排一个人物，让他的视线看向一处空间，而不是看向画面外部。观众会下意识地跟随照片中人物的视线。',
      t3:'3.清除杂物',
      text3:'在这里，我是指背景中会分散观众注意力的杂物。通常，做到这一点最简单的方法是让主体充满画面，只留较少的背景，不过有时也可以通过改变角度或重新安排被摄体来实现。',
      t4:'4.寻找独特的角度', 
      text4:'我们通过自己观察世界的方式了解世界。最常见的角度就是站立的姿势。所以当你从与普通人日常生活中不同的角度去拍摄时，这样的照片就会更加吸引人。',
  },
  {
    upaths:'/static/imgs/user2.png',
    name:'卡莎',
    time:'2小时前',
    paths:'/static/imgs/w4.jpg',
    tip:'边城',
    pic1:'/static/imgs/51.jpg',
    pic2:'/static/imgs/52.jpg',
    pic3:'/static/imgs/53.jpg',
    pic4:'/static/imgs/54.jpg ',
    text:' 我喜欢去古镇，喜欢它那安详而宁静的气息。每一次去古镇，或多或少都会带上一些故事，漫步在古镇之中，寻找着时光遗留下来的痕迹',
    t1:'1.安徽宏村',
    text1:'宏村有“画里乡村”之称，位于安徽省黄山市黟县境内。宏村阴雨天多，云雾天多，接近于海洋性气候，是一个文化气息浓厚，很好玩的一个地方。',
    t2:'2.苏州千灯古镇',
    text2:'千灯古镇位于长江三角洲，隶属江苏省昆山市，离苏州市中心35公里，距今已有2500多年的历史，是爱国学者顾炎武的故乡，又是昆曲的发源地。千灯古镇中青石长街迢迢，小桥水声涓涓，空气湿润美好，青苔覆着石瓦，行人打着伞穿过雨巷。住在这儿的人们早起享渔趣，打渔归来上茶楼。这是何等自在？',
    t3:'3.绍兴安昌古镇',
    text3:'安昌古镇是绍兴有名的四大古镇之一，是浙江省第一批公布的历史文化名镇。位于绍兴市柯桥区境内西北端，与杭州的萧山相接，南靠柯桥城区，北邻杭甬高速公路。',
    t4:'4.黄姚古镇', 
    text4:'黄姚位于广西昭平县，距桂林200公里，是一个有九百多年历史文化的明清古镇，地处漓江下游，素有"诗境家园"之称。古镇方圆1平方公里，为典型的喀斯特地貌。',
  },
  {
    upaths:'/static/imgs/user1.png',
    name:'卡莎',
    time:'2小时前',
    paths:'/static/imgs/w5.jpg',
    tip:'青年摄影大赛作品集',
    pic1:'/static/imgs/61.jpg',
    pic2:'/static/imgs/62.jpg',
    pic3:'/static/imgs/63.jpg',
    pic4:'/static/imgs/64.jpg ',
    text:' 本作品集展出目的在于大家一起共同成长，希望广大摄影者对作品无论是技巧、专业知识，还是审美，都有一定的提高和收获，并能运用于日常生活的拍摄之中。',
    t1:'1.草与露',
    text1:'图片采用了居中式构图，把摄影主体放在了图片的中心有较好的突出效果，而且图中人物主题的衣物颜色比较鲜艳，也和背景产生了一个比较突出的对比，给人一种比较强烈的视觉冲突。逆光的机位选择也营造了一个比较良好的视觉效果，整体来说是一张不错的作品，建议裁剪成1:1构图会使得画面更加简洁。',
    t2:'2.山间小溪',
    text2:'图片采用了三分法构图，在视觉上是比较符合人类视觉的一种构图方法。图片的三分之二采用了倒影的形式来反映天空，作者没有把天空放在常规构图的上三分之二之处，是一种比较有创意的做法。图片的视角选择对天空的辽阔感表现力十足，是一张佳作！',
    t3:'3.勇攀高峰',
    text3:'该图也是采用了三分法构图，在调色思路上采用了赛博朋克的风格。把城市建筑放在图中三分之二的位置上更好地显现了城市建筑的高大和冰冷，仰拍的机位选择也使整个画面营造了一种高耸冷清的现代城市感。建筑上的灯光也很好地抓住了眼球，与主题相呼应。就是画面存在畸变效果，建议可以使用镜头矫正功能来修复，使得画面更加平衡。',
    t4:'4.猫与花', 
    text4:'该作品是典型的对角线构图法，有一种十分强烈的视觉引导效果。我们不难发现，在看到该作品的时候，我们的眼睛不自觉地沿着楼梯的斜线跟着图中小朋友看着的方向看过去。整张作品的摄影主体分布有秩，人物神情生动活泼，与主题呼应良好，是一张人文佳作！',
  }]
   app.post('/discover', function(req,res){
    console.log("/discover post request");
    items.push(req.body); 
    res.send(items);
  });
  
  app.get('/discover2', function(req,res){
    console.log("/discover2 get request"); 
      res.send(items2);
  });
  
   app.get('/discover', function(req,res){
      console.log("/discover get request");
        res.send(items);
   });
// 监听端口
app.listen(3000);

 console.log('服务已启动:3000......');