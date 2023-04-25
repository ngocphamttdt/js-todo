/**
 The every() method tests whether all elements in the array pass the test implemented by the provided function. 
 It returns a Boolean value.
 */
function every1(arr1, arr2) {
  const res1 = arr1.every((item) => item > 4)
  const res2 = arr2.every((item) => arr1.includes(item))
  return [res1, res2]
}

const arr1 = [1, 2, 3, 4, 6]
const arr2 = [1, 2, 3]

console.log('every1', every1(arr1, arr2))

/**
The some() method tests whether at least one element in the array passes the test implemented 
by the provided function.
 */
function some1(arr1) {
  const res1 = arr1.some((item) => item > 4)

  return [res1]
}

console.log('some1', some1(arr1))
