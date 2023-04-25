const itemList = [
  { id: 'key1', value: 'superman' },
  { id: 'key2', value: 'superman2' },
  { id: 'key3', value: 'superma3' }
]

const result = itemList.reduce((itemMap, item) => {
  itemMap[item.id] = item.value
  return itemMap
}, {})

//console.log('result', result)

let people = [
  { name: 'John', age: 21 },
  { name: 'Oliver', age: 55 },
  { name: 'Michael', age: 55 },
  { name: 'Dwight', age: 19 },
  { name: 'Oscar', age: 21 },
  { name: 'Kevin', age: 55 }
]

// {
//   '19': [ { name: 'Dwight', age: 19 } ],
//   '21': [ { name: 'John', age: 21 }, { name: 'Oscar', age: 21 } ],
//   '55': [
//     { name: 'Oliver', age: 55 },
//     { name: 'Michael', age: 55 },
//     { name: 'Kevin', age: 55 }
//   ]
// }

const result1 = people.reduce((accumulator, currentObject) => {
  const key = currentObject.age
  if (!accumulator[key]) {
    accumulator[key] = []
  }
  accumulator[key].push(currentObject)
  return accumulator
}, {})

//console.log('result', result1)

let student = [
  { name: 'David', age: 23, hobby: 'fishing' },
  { name: 'Rachel', age: 25, hobby: 'cooking' },
  { name: 'Rahul', age: 22, hobby: 'fishing' }
]

const findHobby = (arr, hobby) => {
  const groupObj = arr.reduce((accumulator, currentObject) => {
    const hobbyKey = currentObject.hobby
    if (!accumulator[hobbyKey]) accumulator[hobbyKey] = []

    accumulator[hobbyKey].push({
      name: currentObject.name,
      age: currentObject.age
    })
    return accumulator
  }, {})

  return groupObj[hobby].map((item) => item.name)
}

const res = findHobby(student, 'fishing')

console.log('res', res)
