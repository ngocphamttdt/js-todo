const createSupplier = (function(){
    const name = "General Motors"
    const field = "automobile"
    
    const combine = () => name +'-' + field
    return { name, field,  getFull : ()=> combine()}

})()

const supplier = createSupplier
console.log(supplier.getFull());