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
    title: '全面啟動',
    content: '該任務看板適用對象為SG，也就是平台上的主播，目的是激勵主播多多活躍於平台上...',
    url: 'https://www.notion.so/Inception-93e2828d924748068a9dbb0f578b9197?pvs=4',
    imgUrl: 'https://file.notion.so/f/f/f37e5730-aca4-4b7a-8034-c3a06328bb7a/60b6426b-984d-44d2-9ac2-be65b8f3e8d6/Untitled.png?id=5ddcd7c6-9855-4e35-a27c-a11cff0d27a4&table=block&spaceId=f37e5730-aca4-4b7a-8034-c3a06328bb7a&expirationTimestamp=1708185600000&signature=qMBeHFghSCa6dxNujZ-vP1Aia0rAEvZDGAND1kjKMfY&downloadName=Untitled.png'
  },
  {
    title: '水鑽瓜分池',
    content: '該活動開放給所有的用戶參與，不限身份，目的是消耗用戶身上的水鑽，因此，藉由猜...',
    url: 'https://www.notion.so/GuessNumber-d2b14e47a46545aa80a0b20fdef33cc2?pvs=4',
    imgUrl: 'https://file.notion.so/f/f/f37e5730-aca4-4b7a-8034-c3a06328bb7a/fbcd6eb4-5c87-4a95-b0dc-8af081434bf0/Untitled.png?id=2536c9bc-9a16-4dc1-8956-f08b8675bd94&table=block&spaceId=f37e5730-aca4-4b7a-8034-c3a06328bb7a&expirationTimestamp=1708185600000&signature=q1-ywoH5kg-r3E_D-6xMV7t1vf9i_gtwUEcmJGtBo-k&downloadName=Untitled.png'
  },
  {
    title: '驚喜禮包',
    content: '該活動是配合App內的背包、折價券和禮物功能，用比較優惠的方式將一些小項目構成...',
    url: 'https://www.notion.so/GiftPackage-1ba43bb706f04244a9c5ccf94cd0be92?pvs=4',
    imgUrl: 'https://file.notion.so/f/f/f37e5730-aca4-4b7a-8034-c3a06328bb7a/044c137b-6a06-4fbd-bf4a-6d34f787e691/Untitled.png?id=df6457c4-1b8b-4e9f-ada8-c9542b5981fe&table=block&spaceId=f37e5730-aca4-4b7a-8034-c3a06328bb7a&expirationTimestamp=1708185600000&signature=YPGJaPimsgUp3rSRjyZB42NaaFdLHORTThmqJ_pafNk&downloadName=Untitled.png'
  },
  {
    title: '奔跑倉鼠',
    content: '此活動通過一系列與倉鼠互動並展示相關動畫，主播一開始是可以創建倉鼠的，創建完...',
    url: 'https://www.notion.so/RunningHamster-a7c3289d3a274989b9dea753a1d6511d?pvs=4',
    imgUrl: 'https://file.notion.so/f/f/f37e5730-aca4-4b7a-8034-c3a06328bb7a/dbb05577-82be-4dcc-9e72-3cebbcace1c4/Untitled.png?id=983c45d3-c019-49fc-b5dd-0fdffec64145&table=block&spaceId=f37e5730-aca4-4b7a-8034-c3a06328bb7a&expirationTimestamp=1708185600000&signature=zBJLnf_AE9RIqcJ9Kek72NHJsjo_9HoXjQ2rJAq-Osg&downloadName=Untitled.png'
  },
  {
    title: '濃情中秋',
    content: '中秋節活動，讓用戶可以玩翻牌遊戲並獲得月餅與月神點，也可以直接透過水鑽購買玉兔...',
    url: 'https://www.notion.so/EnthusiasmMoonFestival-1a150e9dc7e54ed99a85f6eab7853741?pvs=4',
    imgUrl: 'https://file.notion.so/f/f/f37e5730-aca4-4b7a-8034-c3a06328bb7a/cd5964a3-f4b8-4c26-9d67-8f5789f7bc95/Untitled.png?id=41be0695-e2b7-4c37-9971-ca88a89fc902&table=block&spaceId=f37e5730-aca4-4b7a-8034-c3a06328bb7a&expirationTimestamp=1708185600000&signature=JbUgmJTFoZtMfkx2ukmBdxMM-jIuZVgz-lyZJ-sfBAE&downloadName=Untitled.png'
  },
  {
    title: '萌鬼出沒',
    content: '萬聖節活動，讓使用者進行遊戲賺取南瓜燈，並贈送給女神，也可以贈送金南瓜，幫女神...',
    url: 'https://www.notion.so/GhostAppearances-ea0d8448da244468a0ba25f3caaa42ec?pvs=4',
    imgUrl: 'https://file.notion.so/f/f/f37e5730-aca4-4b7a-8034-c3a06328bb7a/d9b4d6fb-88d8-453c-a49d-0207718595df/Untitled.png?id=63838e8e-50a4-430f-b977-fb185f0ee540&table=block&spaceId=f37e5730-aca4-4b7a-8034-c3a06328bb7a&expirationTimestamp=1708185600000&signature=MCtghXfi-xhob2aZZPISQDl8NLbd2GDSShKE0uwTcmg&downloadName=Untitled.png'
  },
  {
    title: '撩心趁現在',
    content: '在軟體內，與女神聊天是需要支付水鑽費用的，藉此新增一個可以讓使用者與女神有不同...',
    url: 'https://www.notion.so/WinHeartNow-c269679d5bbc4d528492f0c7b0d09f04?pvs=4',
    imgUrl: 'https://file.notion.so/f/f/f37e5730-aca4-4b7a-8034-c3a06328bb7a/cf3c07fb-aa1b-4e23-934a-616d43528097/Untitled.png?id=08d14c9c-8142-4259-a22d-7e5a5a1d7ef2&table=block&spaceId=f37e5730-aca4-4b7a-8034-c3a06328bb7a&expirationTimestamp=1708185600000&signature=OaSVtyDyFvVaT5vbFUkwF-52CHMPX9ZoFvXGdthxBL4&downloadName=Untitled.png'
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
