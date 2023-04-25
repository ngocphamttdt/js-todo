/**
The some() method tests whether at least one element in the array passes the test implemented 
by the provided function.
 */
function flatMap1(arr1) {
  const res1 = arr1.map((item) => (item === 2 ? [2, 2] : 1))

  return [res1]
}
const arr1 = [1, 2, 1]

console.log('flatMap1', flatMap1(arr1))
