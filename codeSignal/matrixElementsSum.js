const matrix = [
  [1, 1, 1, 0],
  [0, 5, 0, 1],
  [2, 1, 3, 10]
]

const hotel = (matrixArr) => {
  const newArr = []
  for (let i = 0; i < matrixArr.length; i++) {
    for (let j = 0; j < matrixArr[i].length; j++) {
      if (i === 0) {
        newArr[j] = []
      }
      newArr[j][i] = matrixArr[i][j]
    }
  }
  let price = 0
  newArr.forEach((arr) => {
    let i = 0
    while (arr[i] > 0) {
      price += arr[i]
      i++
    }
  })
}

const res = hotel(matrix)
//console.log('newArr', res)
