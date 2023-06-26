const arr = [4,5,6]
const obj = {1: 'ngoc', 2: 'lap', 4: 'check'}

for (const key in obj) {
   console.log('key', key)
}

for (const element of arr) {
    console.log('element', element)   
}

const arr1 = [1, 2, 3, 2, 1, 4, 4]

const newArr =arr1.filter((item, index)=> arr1.indexOf(item)=== index)

console.log('newArr', newArr);

