// 面试官：锦狸
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

/*
问题 2:：给定一组存在 ${a.b.c} 形式占位符的字符串和一组数据，将字符串中的占位替换成真实的数据并输出;
*/

const data = { date: '2022年9月', model: 'iPhone 14', price: { startPrice: 5999 } };

const tpl = '苹果公司在 ${date} 发布了全新的 ${model} 系列手机，起售价格 ${price.startPrice} 元';

function parse(tpl, data) {
  const regExp = /\${(.*?)}/g
  const res = tpl.replace(regExp, (match, key) => {
    const keys = key.split('.');
    let value = data;
    for (let i = 0; i < keys.length; i++) {
      value = value[keys[i]];
    }
    return value;
  });
  return res
}

/*
问题 3： 写个Monkey函数，返回的对象提供eat和sleep两个函数，支持链式调用。具体调用方式如下所示：
Monkey('Alan').eat('Banana').sleep(4).eat('Apple').sleep(5).eat('Pear')
代码执行后输出:
my name is Alan
I eat Banana
等待 4 s
I eat Apple
等待 5 s
I eat Pear
*/

class Monkey {
  constructor(name) {
    this.name = name;
    this.actions = [`my name is ${this.name}`];
  }
  eat(food) {
    this.actions.push(`I eat ${food}`);
    return this;
  }
  sleep(time) {
    this.actions.push(`等待 ${time} s`);
    return this;
  }
  execute() {
    for (let item of this.actions) {
      console.log(item);
    }
  }
}

typeof [];
typeof null;
typeof undefined;

1 + '2';
'2' - 1;

// Map Set


