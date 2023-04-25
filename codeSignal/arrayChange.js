function solution(inputArray) {
  let distance = 0
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] > inputArray[i + 1]) {
      distance += inputArray[i] - inputArray[i + 1] + 1
      inputArray[i + 1] = inputArray[i] + 1
    }
  }
  return distance
}

const arr = [-1000, 0, -2, 0]

console.log(solution(arr))
