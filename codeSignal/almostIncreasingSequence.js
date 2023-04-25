function solution(sequence) {
  let numOfDecrease = 0
  const increaseArr = []
  let isIncrease = true

  for (let i = 0; i < sequence.length; i++) {
    const nextIdx = i + 1
    if (nextIdx < sequence.length && sequence[i] >= sequence[nextIdx]) {
      ++numOfDecrease
    } else increaseArr.push(sequence[i])
  }

  for (let i = 0; i < increaseArr.length; i++) {
    for (let j = i + 1; j < increaseArr.length; j++) {
      if (increaseArr[i] >= increaseArr[j]) {
        isIncrease = false
        break
      }
    }
  }
  return numOfDecrease === 1 && isIncrease ? true : false
}

function solution(seq) {
  var bad = 0
  for (var i = 1; i < seq.length; i++)
    if (seq[i] <= seq[i - 1]) {
      bad++
      if (bad > 1) return false
      if (seq[i] <= seq[i - 2] && seq[i + 1] <= seq[i - 1]) return false
    }
  return true
}
