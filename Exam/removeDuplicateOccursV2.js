const { forIn } = require('lodash')

function removeDuplicateOccurs(arr) {
  const numberFrequencies = {}
  arr.forEach((element) => {
    numberFrequencies[element] !== undefined
      ? (numberFrequencies[element] = numberFrequencies[element] + 1)
      : (numberFrequencies[element] = 1)
  })

  let count = 0
  const numberCountTrack = []
  for (const number of Object.keys(numberFrequencies)) {
    let valueFrequencies = numberFrequencies[number]

    while (
      valueFrequencies !== 0 &&
      numberCountTrack.includes(valueFrequencies)
    ) {
      valueFrequencies--
      count++
    }
    numberCountTrack.push(valueFrequencies)
  }
  return count
}

const arr = [5, 3, 3, 2, 5, 2, 3, 2]

console.log(removeDuplicateOccurs(arr))
