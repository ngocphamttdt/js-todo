function solution(inputString) {
  const arrIP = inputString.split('.')

  if (arrIP.length !== 4) return false
  else
    for (let i = 0; i < arrIP.length; i++) {
      const element = arrIP[i]
      if (
        element === '' ||
        +element > 255 ||
        element === '' ||
        isNaN(element) ||
        (element.length > 1 && element.split('')[0] === 0 + '')
      )
        return false
    }
  return true
}

const str = '64.233.161.1'

console.log(solution(str))

//console.log(isNaN('123'))
