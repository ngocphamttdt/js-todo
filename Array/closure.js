function makeAdder(x) {
  return function (y) {
    return x + y
  }
}

const add5 = makeAdder(5)
const add10 = makeAdder(10)

//console.log(add5(2)) // 7
//console.log(add10(2)); // 12

function makeInputVerifier(min, max) {
  function verify(input) {
    if (input < min) return 'less than Min'
    else if (input > max) return 'greater than Max'
    return 'input is in range'
  }
  return verify
}

const testMakeInput = makeInputVerifier(10, 15)

//console.log('test', testMakeInput(8))

function counter() {
  let privateCounter = 0
  function increment() {
    return privateCounter++
  }
  function decrement() {
    return privateCounter--
  }
  return { increment, decrement }
}

const counter1 = counter()
console.log(counter1.increment())

console.log(counter1.increment())
console.log(counter1.increment())

console.log(counter1.decrement())
console.log(counter1.decrement())
