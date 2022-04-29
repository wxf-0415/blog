export default {
  // page1部分
  page1: {
    titleEn: 'Hello,I`m wxf', //英文标题
    title: '个人博客', //中文标题
  },
  // page2部分
  page2: {
    authorImg: 'page3.jpg', // 作者头像
    xinhui: '很荣幸有人前来观看我的个人网页', // 幸会
    qiuzhi: '读研深造', // 求职意向
    guanyuwo: '性别男！微信：17738666071' // 关于我
  },
  // page3部分
  page3: [{
    icon: 'icon-tubiao-',
    title: '网站建设',
    msg: ['这就是一个试水项目']
  },{
    icon: 'icon-diannao', // 图标
    title: '网页制作', // 标题
    msg: ['考完研再好好完善', '或者就业？',] //介绍
  }, {
    icon: 'icon-qianbi1',
    title: '算法设计',
    msg: ['C++优化', 'python优化', '算法设计']
  },  {
    icon: 'icon-shouji',
    title: '框架',
    msg: ['vue框架','UI框架、express框架、mysql',]
  }],
  // page4部分
  page4: {
    // 我的历程
    course: [{
      date: '2020/9——至今', // 时间
      desc: { // 经历
        title: '东北大学',
        list: ['东北大学优秀学生', '东北大学二等奖学金']
      }
    }, 
    {
      date: '2019/9——2022/4',
      desc: {
        title: '东北大学ACM训练队',
        list: ['学习C++算法', '辽宁省程序设计金奖', 'CCCC全国大学生程序设计竞赛三等奖']
      }
    },
     {
      date: '2020/9——2022/3/10',
      desc: {
        title: '东北大学大学生创新创业计划',
        list: ['研究关于海洋时序温度检测科研问题', '以第二作者发表一篇中文核心期刊论文《计算机系统应用》']
      }
    }
  ],
    // 我的拓展技能掌握
    singlelist: [{
      title: 'C++',
      text: '了解'
    }, {
      title: 'Python-ui',
      text: '了解'
    }, {
      title: '数据结构',
      text: '了解'
    }, {
      title: '算法',
      text: '了解'
    }],
    // 我的基本技能掌握
    proresslist: [{
      title: 'C++,HTTP,CSS',
      value: '90%'
    }, {
      title: 'JS、JQ',
      value: '90%'
    }, {
      title: 'Vue',
      value: '90%'
    }, {
      title: 'NodeJs',
      value: '80%'
    }, {
      title: 'sql',
      value: '80%'
    }]
  },
  // page5部分
  // page5: [{
  //   title: '508工作室',
  //   content: '晋城职业技术学院508工作室独立站点的维护',
  //   image: 'box1.png',
  //   href: 'https://lab508.gitee.io/'
  // }, {
  //   title: '图书管理系统',
  //   content: 'Vue,NodeJs图书管理系统前后端',
  //   image: 'box3.jpg',
  //   href: 'https://gitee.com/wttAndroid/book_admin'
  // }, {
  //   title: '校园约吧',
  //   content: 'Vue,NodeJs移动端校园项目前后端',
  //   image: 'box5.jpg',
  //   href: 'https://gitee.com/wttAndroid/xyy_server'
  // }, {
  //   title: '蘑菇街',
  //   content: 'Vue蘑菇街商城案例前端',
  //   image: 'box2.png',
  //   href: 'https://github.com/wttAndroid/MyShoppingStreet'
  // }, {
  //   title: '个人简历',
  //   content: 'html,css,jq,bootsrap搭建个人简历网站',
  //   image: 'box4.png',
  //   href: ''
  // }, {
  //   title: '二维码生成器',
  //   content: 'Android二维码生成器',
  //   image: 'box6.jpeg',
  //   href: ''
  // }],
  // page6部分
  page6: {
    github: 'https://github.com/wxf-0415',
    bili: '',
    email: 'Mailto:1457321681@qq.com?Subject=邮箱标题&Body=邮箱内容！',
    zhihu: '',
    weixin: "<img style='width:120px' src='src/img/weixin.png' alt='加载失败'>",
    qq: "<img style='width:120px' src='src/img/qq.png' alt='加载失败'>"
  }
}
