const greeting = (name) => `Hello: ${name}`

const processInputUser = (gender, callback) => {
  if (gender) return callback('Mr')
  else return callback('Ms')
}

//console.log(processInputUser(true, greeting))

function makeInputVerifier(input, min, max, callback) {
  return callback(input, min, max)
}

function verify(input, min, max) {
  if (input < min) return 'less than Min'
  else if (input > max) return 'greater than Max'
  return 'input is in range'
}

console.log(makeInputVerifier(3, 5, 10, verify))
