function solution(inputArray) {
  let max = 0
  inputArray.forEach((element, index) => {
    if (inputArray[index + 1]) {
      max = Math.max(Math.abs(element - inputArray[index + 1]) > max)
      max = Math.abs(element - inputArray[index + 1])
    }
  })
  return max
}

inputArray = [2, 4, 1, 0]
console.log(solution(inputArray))
