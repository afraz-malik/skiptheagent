function reverseOdds(string) {
  let array = Array.from(string)
  for (let i = 0; i < array.length; i = i + 2) {
    console.log(array[i])
  }
}

// function reverseOdds(string) {
//   if (string === '') return
//   return reverseOdds(string.substr(string.length))
// }
console.log(reverseOdds('Hello world'))
