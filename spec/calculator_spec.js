describe("Calculator", function() {
  const Calculator = require('../calculator');

  it("initial values are correct", function(){
  	let calculator = new Calculator();
  	expect(calculator.number0).toEqual('0')
  	expect(calculator.number1).toEqual('0')
  	expect(calculator.operator).toEqual(null)
  })

  it("takes an input and edits number0", function(){
  	let calculator = new Calculator();
  	calculator.input('4')
  	expect(calculator.number0).toEqual('4')
  	calculator.input('2')
  	expect(calculator.number0).toEqual('42')
  })

  it("takes '.' as input and edits number0", function(){
   	let calculator = new Calculator();
  	calculator.input('.')
  	expect(calculator.number0).toEqual('0.')
  	calculator.input('1')
  	expect(calculator.number0).toEqual('0.1')
  })

  it("takes an operator input", function(){
   	let calculator = new Calculator();
  	calculator.input('42')
  	expect(calculator.operator).toEqual(null)
  	calculator.input('*')
  	expect(calculator.operator).toEqual('*')
  })

  it("takes an input after operator and edits number1", function(){
  	let calculator = new Calculator();
  	calculator.input('*')
  	calculator.input('42')
  	expect(calculator.number1).toEqual('42')
  })

  it("add", function(){
  	let calculator = new Calculator();
  	calculator.input('21')
  	calculator.input('+')
  	calculator.input('21')
  	expect(calculator.calculate()).toEqual(42)
  })

  it("substract", function(){
  	let calculator = new Calculator();
  	calculator.input('63')
  	calculator.input('-')
  	calculator.input('21')
  	expect(calculator.calculate()).toEqual(42)
  })

  it("multiply", function(){
  	let calculator = new Calculator();
  	calculator.input('21')
  	calculator.input('*')
  	calculator.input('2')
  	expect(calculator.calculate()).toEqual(42)
  })

  it("divide", function(){
  	let calculator = new Calculator();
  	calculator.input('210')
  	calculator.input('/')
  	calculator.input('5')
  	expect(calculator.calculate()).toEqual(42)
  })

})