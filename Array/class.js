class Person{
    constructor(firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName
    }

    getFirstName(){
        return this.firstName
    }
    getLastName(){
        return this.lastName
    }
}

const person1 = new Person('ngoc', 'pham')

//console.log('person1', person1.getFirstName());

class Stack{
    constructor(items){
        this.items = items
    }
    push(item){
        this.items.push(item)
    }
    pop(){
        if(this.items.length > 0)
        this.items.pop()
    }
    values(){
        return this.items
    }
}

// const stack1 = new Stack([20])
// console.log(stack1.push(10));
// console.log(stack1.push(2));
// console.log(stack1.push(4));
// console.log(stack1.push(5));
// console.log(stack1.pop(4));
// console.log(stack1.values());

/*Closure*/ 
function stackClosure(){
    const items = []
    function push(item) {
        items.push(item)
    }
    function pop(){
        if(items.length !== 0) items.pop()
    }
    function values(){
        return items
    }
    
    return {push, pop, values}
}

const stackTest = stackClosure([12])
stackTest.push(1)
stackTest.push(2)
stackTest.push(3)
stackTest.push(4)
stackTest.pop()
console.log('value', stackTest.values());


const obj = {name: 'ngoc'}//ADEF

const obj2 = obj

const obj1 = {name: 'ngoc'} //XYZ


console.log('log', (obj2 === obj), (obj === obj1));
