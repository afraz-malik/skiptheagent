function reverseOdds(s) {
  const array = Array.from(s)
  for (let i = 0; i < array.length / 2; i++) {
    if (i % 2 == 1) {
      let j = array.length - i - 1
      let t = array[j]
      array[j] = array[i]
      array[i] = t
    }
  }
  return array.join('')
}

console.log(reverseOdds('hello world'))
