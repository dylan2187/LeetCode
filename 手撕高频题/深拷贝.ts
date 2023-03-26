function deepCopy<T>(obj: T): T {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }
  const isArray = Array.isArray(obj)
  let result: any;
  if (Array.isArray(obj)) {
    result = [];
    for (let i = 0; i < obj.length; i++) {
      result[i] = deepCopy(obj[i]);
      // result[i] = obj[i];
    }
  } else {
    result = {};
    for (let key in obj) {
      result[key] = deepCopy(obj[key]);
      // result[key] = obj[key];
    }
  }

  return result;
}




const deepClone = (obj) => {
  if (typeof obj !== 'object' || obj === null) {
    return obj
  }
  const isArray = Array.isArray(obj)
  let res = isArray ? [] : {}
  for (let key in obj) {
    const value = obj[key]
    res[key] = typeof value === 'object' && value !== null ? deepClone(obj[key]) : value
  }
  return res
}

const obj = {
  name: 'John',
  age: 30,
  friends: ['Tom', 'Jerry'],
  address: {
    city: 'New York',
    country: 'USA'
  }
};

const newobj = deepClone(obj)
console.log(newobj);


newobj === obj
newobj.address === obj.address