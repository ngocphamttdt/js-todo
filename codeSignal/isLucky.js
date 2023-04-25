function isLucky(num) {
  const arr = (num + '').split('')
  let firstPart = 0
  let secondPart = 0
  for (let index = 0; index < arr.length / 2; index++) {
    firstPart += +arr[index]
  }
  for (let index = arr.length / 2; index < arr.length; index++) {
    secondPart += +arr[index]
  }
  return firstPart === secondPart ? true : false
}

console.log('res', isLucky(123456))
