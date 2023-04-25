function solution(inputString) {
  const strArr = inputString.replace(' ', '')
  let isPalindrome = false
  if (strArr === strArr.split('').reverse().join('')) isPalindrome = true

  // strArr.forEach((element) => {
  //   console.log(element, element.split('').reverse().join(''))
  //   if (element === element.split('').reverse().join('')) {
  //     isPalindrome = true
  //   } else false
  // })
  // return isPalindrome
  return isPalindrome
}

const str = 'aabb'

console.log(solution(str))
