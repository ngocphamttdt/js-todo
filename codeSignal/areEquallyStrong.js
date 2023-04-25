function solution(yourLeft, yourRight, friendsLeft, friendsRight) {
  const yourStrongest = Math.max(yourLeft, yourRight)
  const yourWeakest = Math.min(yourLeft, yourRight)
  const friendStrongest = Math.max(friendsLeft, friendsRight)
  const frintedWeakest = Math.min(friendsLeft, friendsRight)

  return yourStrongest === friendStrongest && yourWeakest === frintedWeakest
}
