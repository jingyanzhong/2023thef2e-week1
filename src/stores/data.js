import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useDataStore = defineStore('data', () => {
  const newsData = ref([{
    title: '參與台北寵物論壇',
    title2: '爭取貓咪友善環境',
    content: '炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！我相信，我們的都市中，每一隻貓咪都應該有自己的 VIP 休憩空間。',
    img: '1.png',
    date: '11/11'
  }, {
    title: '掃街模式開啟！',
    title2: '帶著你的貓耳，來和我一起走！',
    content: '街上氣氛真的很棒，從小孩到大人，甚至有些狗狗朋友都帶著貓耳來找我握手，真的太可愛了！這次的活動不僅讓我看到大家的熱情，更加堅定了我推進「貓咪友善環境」政策的決心。',
    img: '2.png',
    date: '11/25'
  }, {
    title: '收容所模特兒大比拼！',
    title2: '',
    content: '今天的收容所不再是一片寂靜。為了讓更多人認識到這裡的毛孩子，我們舉辦了一場前所未有的「模特兒走秀」！',
    img: '3.png',
    date: '12/09'
  }, {
    title: '貓星登場！',
    title2: '',
    content: '炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！我相信，我們的都市中，每一隻貓咪都應該有自己的 VIP 休憩空間。',
    img: '4.png',
    date: '12/23'
  }])
  const danteData = ref([{
    title: '喵星人之友',
    content: 'NT$600',
    money: '600',
    people: '9957'
  },
  {
    title: '喵星大使',
    content: 'NT$6,000',
    money: '6000',
    people: '2000'
  }, {
    title: '喵星傳奇',
    content: 'NT$60,000',
    money: '60000',
    people: '999'
  }, {
    title: '喵星自我',
    content: '自訂',
    money: '0',
    people: '0'
  }])
  return { newsData, danteData }
})
