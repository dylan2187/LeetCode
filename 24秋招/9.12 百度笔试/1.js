function func() {}
func.name = 'Jack'
var nick = 'Emir'
const wrapper = func.bind({
  nick: 'John',
})
console.log(wrapper.nick)
