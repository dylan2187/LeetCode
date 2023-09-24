function underscoreToCamelCase(str) {
  return str
    .split('_')
    .map((word, index) => {
      if (index === 0) {
        return word
      }
      return word.charAt(0).toUpperCase() + word.slice(1)
    })
    .join('')
}

const str = 'hello_world'
console.log(underscoreToCamelCase(str))
