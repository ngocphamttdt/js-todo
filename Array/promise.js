/**
* With the following requirements, please write a function using vanilla Javascript:
1. Fetch two requests to this endpoint in the best performance way and log the response: https://jsonplaceholder.typicode.com/todos/1
https://jsonplaceholder.typicode.com/todos/2
2. Map two responses to an array and log them in sequence.
3. With the same requirement, fetch at least 20 Todo items and log only completed titles.
4. Handle all possible error cases
*/

const q1aPromise = new Promise((resolve, reject) => {
  try {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((res) => res.json())
      .then((data) => {
        resolve(data)
      })
  } catch (error) {
    reject(error)
  }
})

const q1bPromise = new Promise((resolve, reject) => {
  try {
    fetch('https://jsonplaceholder.typicode.com/todos/2')
      .then((res) => res.json())
      .then((data) => {
        resolve(data)
      })
  } catch (error) {
    reject(error)
  }
})

const exeQ1A = () => {
  return q1aPromise.then((data) => console.log(data))
}

const exeQ1B = () => {
  return q1bPromise.then((data) => console.log(data))
}

//exeQ1A()
// exeQ1B()

const exeQ2 = () => {
  Promise.all([q1aPromise, q1bPromise]).then((data) => console.log(data))
}

//exeQ2()

//'https://jsonplaceholder.typicode.com/todos/1'

const q3Promise = new Promise((resolve, reject) => {
  try {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((res) => res.json())
      .then((data) =>
        resolve(data.filter((item, indx) => item.completed && indx < 20))
      )
  } catch (error) {
    reject(error)
  }
})

const exeQ3 = (callback) => {
  q3Promise.then((data) => callback(data))
}

const fetchData = (data) => {
  console.log('data', data)
  return data
}

exeQ3(fetchData)

// function callApi() {
//   return new Promise((resolve, reject) => {
//     fetch('https://jsonplaceholder.typicode.com/todos')
//       .then((response) => response.json())
//       .then((data) => {
//         resolve(data)
//       })
//       .catch((error) => {
//         reject(error)
//       })
//   })
// }

// // Example usage
// callApi()
//   .then((result) => {
//     console.log(result)
//   })
//   .catch((error) => {
//     console.error(error)
//   })
