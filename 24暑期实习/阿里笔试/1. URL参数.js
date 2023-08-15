/*
问题 1：给定一个 URL，输出该 URL 的参数（URL Query）Map
*/

const urlStr = 'https://pages.tmall.com/wow/hdwk/act/2020nhj-single?wh_biz=tm&disableNav=YES&disableNav=NO&disableProgress=YES&hd_from=alipay_mayifarm&hd_from_id=100085&sceneId=972&deliveryId=8945&task_type=callapp&sceneCode=FUGUO&implId=other_0_158001_8945_0&query=spm&prismFrom=alipay_mayifarm&slk_gid=gid_er_er%7Cgid_er_evoke_ui_2%7Cgid_er_af_pop%7Cgid_er_sidebar_1&_afc_link=1&utparamcnt=%7B%22_afc_link%22%3A%221%22%7D#state';

function parseUrlQuery(url) {
  let arr = url.split('?')[1]
  let params = arr.split('&')
  let paramsMap = new Map()
  for (let item of params) {
    let [k, v] = item.split('=')
    paramsMap.set(k, v)
  }
  return paramsMap
}
const res = parseUrlQuery(urlStr)
res


