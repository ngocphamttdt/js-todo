const commonCharacterCount = (s1, s2) => {
  const s1Arr = s1.split('')
  const s2Arr = s2.split('')
  const s1Obj = {}
  const s2Obj = {}
  s1Arr.forEach((item) => {
    if (!s1Obj[item]) {
      s1Obj[item] = 1
    } else s1Obj[item] = s1Obj[item] + 1
  })

  s2Arr.forEach((item) => {
    if (!s2Obj[item]) {
      s2Obj[item] = 1
    } else s2Obj[item] = s2Obj[item] + 1
  })

  let total = 0
  Object.entries(s1Obj).forEach((entry) => {
    const [key, value] = entry
    if (s2Obj[key]) total += s2Obj[key] <= value ? s2Obj[key] : value
  })
  //using reduce
  const re1 = s1Arr.reduce((accumulator, curr) => {
    accumulator[curr] = !accumulator[curr] ? 1 : accumulator[curr] + 1

    return accumulator
  }, {})
  const re2 = s2Arr.reduce((accumulator, curr) => {
    accumulator[curr] = !accumulator[curr] ? 1 : accumulator[curr] + 1
    return accumulator
  }, {})
  const total2 = Object.entries(re1).reduce((accumulator, curr) => {
    const [key, value] = curr
    if (re2[key]) accumulator += re2[key] <= value ? re2[key] : value
    return accumulator
  }, 0)
  return total2
}

//console.log('newArr', commonCharacterCount('aabcc', 'adcaa'))
