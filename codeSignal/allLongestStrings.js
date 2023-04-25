const maxLengthItem = () => {
  const arr = ['aba', 'aa', 'ad', 'vcd', 'aba']
  const maxLength = arr.reduce((accumulator, curr) => {
    return accumulator < curr.length ? curr.length : accumulator
  }, 0)

  const maxLengthArr = arr.reduce((accumulator, curr) => {
    if (curr.length === maxLength) accumulator.push(curr)
    return accumulator
  }, [])

  return maxLengthArr
}

//console.log('newArr', maxLengthItem())
