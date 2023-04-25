function countValidAppearance(str) {
  let i = 0
  const strLength = str.length
  let countValid = 0
  const xyArr = ['x', 'y']
  while (i < strLength - 1) {
    let leftPart = str.substring(0, i + 1).split('')
    let rightPart = str.substring(i + 1).split('')

    if (
      xyArr.every((x) => leftPart.includes(x)) ||
      xyArr.every((x) => rightPart.includes(x))
    )
      countValid++
    else if (
      !xyArr.some((x) => leftPart.includes(x)) &&
      !xyArr.some((x) => rightPart.includes(x))
    )
      countValid++
    i++
  }
  return countValid
}

const str = 'apple'
console.log(countValidAppearance(str))
