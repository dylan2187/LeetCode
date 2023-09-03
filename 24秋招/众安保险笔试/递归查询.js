function searchPerson(data, name) {
  if (data.person) {
    for (let item of data.person) {
      if (item.name === name) {
        return item.job
      }
    }
  }
  if (data.childPartment) {
    for (let item of data.childPartment) {
      let res = searchPerson(item, name)
      if (res) return res
    }
  }
  return '未找到此人'
}
let organization = {
  name: '总部',
  person: [{ name: 'Alice', job: 'niuma' }, 'Bob'],
  childPartment: [
    {
      name: '子部门1',
      person: [{ name: 'Charlie', job: 'dagongren' }, 'David'],
      childPartment: [],
    },
    {
      name: '子部门2',
      person: ['Eve'],
      childPartment: [],
    },
  ],
}
console.log(searchPerson(organization, 'dagongren'))
