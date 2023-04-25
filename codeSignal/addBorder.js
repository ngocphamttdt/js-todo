function solution(picture) {
  const strLength = picture[0].length
  const newPic = [
    '*'.repeat(strLength + 2),
    ...picture.map((element) => `*${element}*`),
    '*'.repeat(strLength + 2)
  ]
  return newPic
}

const picture = ['abc', 'ded']

console.log(solution(picture))
