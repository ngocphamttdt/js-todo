function thesamePosition(arr) {
  const result = []
  let isFound = false
  for (let i = 0; i < arr.length; i++) {
    const currentStr = arr[i]
    for (let j = i + 1; j < arr.length; j++) {
      const nextStr = arr[j]
      for (let p = 0; p < currentStr.length; p++) {
        if (currentStr.charAt(p) === nextStr.charAt(p)) {
          result[0] = i
          result[1] = j
          result[2] = p
          isFound = true
          break
        }
      }
      if (isFound) break
    }
    if (isFound) break
  }
  return result
}

const arr = ['abc', 'bca', 'dbe']

console.log(thesamePosition(arr))
