export interface ListItem {
  title: string
  icon: string
  color?: string
}

export interface TabItem {
  key: string
  name: string
  component: string
}

export const tags: string[] = [
  '很有想法的',
  '专注设计',
  '川妹子',
  '大长腿',
  '海纳百川',
  '前端开发',
  'vue3',
]

export const teams: ListItem[] = [
  {
    icon: 'ri:alipay-fill',
    title: '科学搬砖组',
    color: '#ff4000',
  },
  {
    icon: 'emojione-monotone:letter-a',
    title: '中二少年团',
    color: '#7c51b8',
  },
  {
    icon: 'ri:alipay-fill',
    title: '高逼格设计',
    color: '#00adf7',
  },
  {
    icon: 'jam:codepen-circle',
    title: '程序员日常',
    color: '#00adf7',
  },
  {
    icon: 'fa:behance-square',
    title: '科学搬砖组',
    color: '#7c51b8',
  },
  {
    icon: 'jam:codepen-circle',
    title: '程序员日常',
    color: '#ff4000',
  },
]

export const details: ListItem[] = [
  {
    icon: 'ic:outline-contacts',
    title: '交互专家',
  },
  {
    icon: 'grommet-icons:cluster',
    title: '某某某事业群',
  },
  {
    icon: 'bx:bx-home-circle',
    title: '福建省厦门市',
  },
]

export const achieveList: TabItem[] = [
  {
    key: '1',
    name: '專案',
    component: 'Article',
  },
  {
    key: '2',
    name: '活動',
    component: 'Project',
  },
  {
    key: '3',
    name: '關於',
    component: 'Application',
  },
]

export const actions: any[] = [
  { icon: 'clarity:star-line', text: '156', color: '#018ffb' },
  { icon: 'bx:bxs-like', text: '156', color: '#459ae8' },
  { icon: 'bx:bxs-message-dots', text: '2', color: '#42d27d' },
]

export const projectList = (() => {
  const result: any[] = []
  result.push({
    title: 'SmeetH私覓',
    description: ['私密交友', '聊色軟體', '素人自拍短片', '18+'],
    content: '基於 Vue 2,vue-router, vuex 和 sass 構建完整的前台項目。',
    url: 'https://smeeth.in/',
    fullTitle: 'SmeetH私覓 - 私密交友｜聊色軟體｜素人自拍短片 | smeeth.in',
    fullDescription:
      'SmeetH私覓｜大尺度聊天交友網，眾多正妹的私密影片照片陪聊心事，水鑽解鎖素人動態永久收藏。OL、護理師、單身美人妻、女大生自拍線上看，亞洲最強聊色看片網，真人一對一親自回覆壞壞訊息。',
    imgUrl: 'https://smeeth.in/download/searchImage.png',
    docUrl: 'https://www.notion.so/Smeeth-5fe3a5a4e93941889757a84dda7937d6?pvs=4'
  })
  return result
})()

const eventList = [
  {
    title: 'Denny Admin',
    content: '基于Vue Next, TypeScript, Ant Design实现的一套完整的企业级后台管理系统。',
  },
]
export const smeethEventList = (() => {
  const result: any[] = []
  for (let i = 0; i < eventList.length; i++) {
    result.push(eventList[i])
  }
  return result
})()

export const aboutThisProject = (() => {
  const result: any[] = []
  for (let i = 0; i < 8; i++) {
    result.push({
      title: 'Denny Admin',
      icon: 'emojione-monotone:letter-a',
      color: '#1890ff',
      active: '100',
      new: '1,799',
      download: 'bx:bx-download',
    })
  }
  return result
})()
