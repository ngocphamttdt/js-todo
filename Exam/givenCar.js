function givenCar(people, car) {
  let totalPeople = people.reduce((acc, curr) => acc + curr, 0)
  const sortedCars = cars.sort((a, b) => b - a)
  let numOfCar = 0
  for (let car of sortedCars) {
    if (totalPeople === 0) break
    if (totalPeople > 0) {
      totalPeople -= car
      numOfCar++
    }
  }

  return numOfCar
}

const people = [1, 4, 1]
const cars = [1, 5, 1]

console.log(givenCar(people, cars))
