function solution(a) {
  let first = 0,
    second = 0

  a.forEach((item, index) => {
    if (index % 2 === 0) first += item
    else second += item
  })
  return [first, second]
}

const a = [50, 60, 60, 45, 70]

console.log(solution(a))
