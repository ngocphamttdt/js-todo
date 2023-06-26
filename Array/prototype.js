function Person(name) {
    this.name = name;
    console.log(this);
  }
  
  Person.prototype.getName = function() {
    return this.name;
  }
  
//   var mike = Person('mike'); // 1?
//   var james = new Person('james'); // 2? 
  
 //console.log(mike); //  3? 
 //console.log(mike.getName()); //  4? 
// console.log(james); //5?
//   console.log(james.getName()); // 6? 


function PersonNew(firstName, lastName){
    this.firstName = firstName
    this.lastName = lastName
    console.log(this);
}

PersonNew.prototype.getFullName =function (){
    return this.firstName + this.lastName
}

var mike = PersonNew('mike', 'tran')//global
var james = new PersonNew('james', 'pham')//{fistName: 'james', lastName: 'pham'}

console.log(mike);//undefined
console.log(james);// {fistName: 'james', lastName: 'pham'}
console.log(mike.getFullName()); // throw error
console.log(james.getFullName());//'jamse pham








  
  