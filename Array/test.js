const text = '10010000101'
const arr = text.split('')
const inArr = []
let max= 0
arr.forEach((item, index)=>{
    if(item === '1'){
        inArr.push(index)
    }
})

for (let i = 0; i < inArr.length; i++) {
  if(inArr[i+1] !== undefined){
    if(inArr[i+1] - inArr[i] > max){
        max = inArr[i+1] - inArr[i]
       
    }
  }
    
}


function Person(name) {
  this.name = name;
  console.log(this);
}

Person.prototype.getName = function() {
  return this.name;
}

var mike = Person('mike'); // 1?
var james = new Person('james'); // 2? 

console.log(mike); //  3? 
console.log(mike.getName()); //  4? 
console.log(james); //5?
console.log(james.getName()); // 6? 

