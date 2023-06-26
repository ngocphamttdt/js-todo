let student = [
    { name: 'David', age: 23, hobby: 'fishing' },
    { name: 'Rachel', age: 25, hobby: 'cooking' },
    { name: 'Rahul', age: 22, hobby: 'fishing' }
  ]

  const obj = {fishing: [1], cooking: [2] }

  const hobbies = student.reduce((res, curr)=>{
    const hobbyKey = curr.hobby
    if(!res[hobbyKey]) res[hobbyKey] = []
   
    res[curr.hobby].push(curr.name)

    return res
  }, {})

 for (const item of Object.entries(hobbies)) {
    const [key, value] = item
 
 }
//  console.log('hobbies', hobbies);

  let people = [
    { name: 'John', age: 21 },
    { name: 'Oliver', age: 55 },
    { name: 'Michael', age: 55 },
    { name: 'Dwight', age: 19 },
    { name: 'Oscar', age: 21 },
    { name: 'Kevin', age: 55 }
  ]

  const grPeople = people.reduce((res, curr) =>{
    if(!res[curr.age]) res[curr.age] = []
    res[curr.age].push(curr.name)
    return res
  }, {})


  const obj1=  { name: 'John', age: 21 }

  obj1['country'] = 'VN'

  const obj2 = {...obj1, book: 'glass'}


  const arr = [1, 4, 2, 6, 9, 3]

  const newSort = arr.sort((a, b)=> a-b)

  console.log('sort',newSort);

