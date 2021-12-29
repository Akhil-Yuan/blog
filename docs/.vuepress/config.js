module.exports = {
  title: 'Akhil 学习笔记',
  description: '记录前端学习所思所想',
  theme: 'reco',
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      {
        text: 'Akhil',
        items: [
          { text: 'GitHub', link: 'https://github.com/Akhil-Yuan' },
          { text: '掘金', link: 'https://juejin.cn/user/3307770132836766/posts' }
        ]
      }
    ],
    sidebar: [
      {
        title: '欢迎学习',
        path: '/',
        collapsable: false // 不折叠
      },
      {
        title: 'TypeScript',
        children: [
          {
            title: '基础',
            children: [
              { title: '数据类型', path: '/handbook/typescript/basic/DataType' }
            ]
          }, {
            title: '进阶',
            children: [
              { title: '类', path: './handbook/typescript/advanced/Class'}
            ]
          }, {
            title: '思维导图'
          }
        ]
      }
    ]
  }
}