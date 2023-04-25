function func() {
  var test = 123
}
{
  var test1 = 321
}

function globalScope() {
  console.log('global', salary)
  if (true) {
    var salary = 10
    console.log('block', salary)
  }
}

globalScope()
