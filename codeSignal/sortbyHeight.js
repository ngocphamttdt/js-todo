const arr = [-1, 150, 190, 170, -1, -1, 160, 180]
function sortByHeight(arr) {
  for (var i = 0; i < arr.length; i++) {
    let first = 0
    let second = first + 1

    while (first < arr.length - i - 1) {
      while (arr[first] === -1) {
        ++first
        second = first + 1
      }
      while (arr[second] === -1) {
        ++second
      }
      if (arr[first] > arr[second]) {
        let temp = arr[first]
        arr[first] = arr[second]
        arr[second] = temp
      }
      first++
      second++
    }
  }
  return arr
}

//sortByHeight(arr)

function solution(arr) {
  let filtered = arr.filter((val) => val !== -1)

  let sorted = filtered.sort((a, b) => a - b)
  console.log('sorted', sorted.shift())
  return arr.map((val) => (val === -1 ? -1 : sorted.shift()))
}

console.log(solution(arr))
