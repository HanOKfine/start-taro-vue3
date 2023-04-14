export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/login/index'
  ],
  subPackages:[

  ],
  window: {
    "backgroundTextStyle": 'light',
    "navigationBarBackgroundColor": '#fff',
    "navigationBarTitleText": 'WeChat',
    "navigationBarTextStyle": 'black'
  },
  tabBar: {
    list: [
      {
        "pagePath":'pages/index/index',
        "selectedIconPath": "icons/vip.png",
        "text": '首页'
      },
      {
        "pagePath":'pages/login/index',
        "selectedIconPath": "icons/vip.png",
        "text": '注册'
      }
    ]
  }
})
