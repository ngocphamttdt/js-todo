

const arrObj = [
  { key: 1, value: 'a1' },
  { key: 2, value: 'a2' },
  { key: 3, value: 'a3' },
  { key: 4, value: 'a4' },
  { key: 5, value: 'a5' },
  { key: 6, value: 'a6' }
]
const arr = [1, 2, 3]

function filter1(arrObj) {
  return arrObj.filter((item) => item.key > 4)
}

function filter2(arrObj) {
  return arrObj.filter((item) => arr.includes(item.key))
}
console.log('filter1', filter2(arrObj))
