//引入mockjs
const Mock = require('mockjs')
//使用mockjs模拟数据
Mock.mock('/mydata', (req, res) => {
  return {
    data:[{
      title:"怦然心动",
      director:"罗伯·莱纳",
      movieLanguage:"英语",
      movieYear:"2010-08-06(美国)",
      movieType:" 剧情 / 喜剧 / 爱情",
      movieScore:"8.9分"
    },{
      title:"蓝色大门",
      director:"易智言",
      movieLanguage:" 汉语普通话",
      movieYear:"2002-09-27(台湾)",
      movieType:"剧情 / 爱情 / 同性",
      movieScore:"8.3分"
    },{
      title:"花与爱丽丝",
      director:"岩井俊二",
      movieLanguage:"日语",
      movieYear:"2004-03-13(日本)",
      movieType:" 剧情 / 喜剧",
      movieScore:"8.1分"
  },{
      title:"大话西游之大圣娶亲",
      director:"刘镇伟",
      movieLanguage:"粤语 / 汉语普通话",
      movieYear:"2014-10-24(中国大陆) / 2017-04-13(中国大陆重映) / 1995-02-04(香港)",
      movieType:" 剧情 / 喜剧",
      movieScore:"9.2分"
    },{
      title:"千与千寻 ",
      director:"宫崎骏",
      movieLanguage:"日语",
      movieYear:"2001-07-20(日本)",
      movieType:"剧情 / 动画 / 奇幻",
      movieScore:"9.2分"
    }],
    total:1
  }
})
