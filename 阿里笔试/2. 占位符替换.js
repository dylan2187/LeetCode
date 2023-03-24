// 使用js实现下面这道题：
/*
问题 2:：给定一组存在 ${a.b.c} 形式占位符的字符串和一组数据，将字符串中的占位替换成真实的数据并输出;
*/

const data = { date: '2022年9月', model: 'iPhone 14', price: { startPrice: 5999 } };

const tpl = '苹果公司在 ${date} 发布了全新的 ${model} 系列手机，起售价格 ${price.startPrice} 元';



function parse(tpl, data) {
  // const regExp = /\$\{([\w.]+)\}/g;
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

parse(tpl, data)


typeof [];
typeof null;
typeof undefined;

1 + '2';
'2' - 1;

// Map Set