function reverseInParentheses(inputString) {
  const strArr = inputString.split('')
  const obj = {}
  let breakOpen = false
  strArr.map((item, idx) => {
    if (item === '(' && !breakOpen) {
      obj['('] = idx
      breakOpen = true
    }
    if (item === ')') {
      obj[')'] = idx
    }
  })

  const nestedStr = inputString.substring(obj['('], obj[')'] + 1)

  const strReverse = nestedStr
    .replace(/[(]/g, '')
    .replace(/[)]/g, '')
    .split('')
    .reverse()
    .join('')

  const res = inputString.replace(nestedStr, strReverse)
  return res
}

console.log(reverseInParentheses('f(an(bar))e'))

//(an(bar)
