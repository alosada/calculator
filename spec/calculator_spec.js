describe("Calculator", function() {
  const Calculator = require('../calculator');

  it("initial values are correct", function(){
  	let calculator = new Calculator();
  	expect(calculator.param0).toEqual('0');
  	expect(calculator.param1).toEqual(null);
  	expect(calculator.operator).toEqual(null);
  })

  it("takes an input and edits param0", function(){
  	let calculator = new Calculator();
  	calculator.input('4');
  	expect(calculator.param0).toEqual('4');
  	calculator.input('2');
  	expect(calculator.param0).toEqual('42');
  })

  it("takes '.' as input and edits param0", function(){
   	let calculator = new Calculator();
  	calculator.input('.');
  	expect(calculator.param0).toEqual('0.');
  	calculator.input('1');
  	expect(calculator.param0).toEqual('0.1');
  })

  it("takes an operator input", function(){
   	let calculator = new Calculator();
  	calculator.input('4');
  	calculator.input('2');
  	expect(calculator.operator).toEqual(null);
  	calculator.input('*');
  	expect(calculator.operator).toEqual('*');
  })

  it("takes an input after operator and edits param1", function(){
  	let calculator = new Calculator();
  	calculator.input('*');
  	calculator.input('4');
  	calculator.input('2');
  	expect(calculator.param1).toEqual('42');
  })

  it("converts params to numbers", function(){
  	let calculator = new Calculator();
  	calculator.input('3');
  	calculator.input('3');
  	calculator.input('+');
  	calculator.input('9');
  	expect(calculator.number0).toEqual(33);
  	expect(calculator.number1).toEqual(9);

  })

  it("add", function(){
  	let calculator = new Calculator();
  	calculator.param0 = '21';
  	calculator.input('+');
  	calculator.param1 = '21';
  	expect(calculator.calculate()).toEqual(42);
  })

  it("substract", function(){
  	let calculator = new Calculator();
  	calculator.param0 = '63';
  	calculator.input('-');
  	calculator.param1 = '21';
  	expect(calculator.calculate()).toEqual(42);
  })

  it("multiply", function(){
  	let calculator = new Calculator();
  	calculator.param0 = '21';
  	calculator.input('*');
  	calculator.input('2');
  	expect(calculator.calculate()).toEqual(42);
  })

  it("divide", function(){
  	let calculator = new Calculator();
  	calculator.param0 = '210';
  	calculator.input('/');
  	calculator.input('5');
  	expect(calculator.calculate()).toEqual(42);
  })

  it("divide by 0 creates error", function(){
  	let calculator = new Calculator();
  	calculator.param0 = '210';
  	calculator.input('/');
  	calculator.input('0');
  	expect(calculator.calculate()).toEqual("can't divide by 0");
  })

  it("handles consecutive operations", function(){
  	let calculator = new Calculator();
  	calculator.param0 = '105';
  	calculator.input('/');
  	calculator.input('5');
  	expect(calculator.calculate()).toEqual(21);
  	calculator.input('*');
  	calculator.input('2');
  	expect(calculator.calculate()).toEqual(42);
  })

  it("changes operator if no second value has been added", function(){
  	let calculator = new Calculator();
  	calculator.input('2');
  	calculator.input('*');
  	calculator.input('+');
  	calculator.input('3');
  	expect(calculator.calculate()).toEqual(5);
  })

  it("clears", function(){
  	let calculator = new Calculator();
  	calculator.input('1');
  	calculator.input('*');
  	calculator.input('3');
  	expect(calculator.param0).toEqual('1');
  	expect(calculator.param1).toEqual('3');
  	expect(calculator.operator).toEqual('*');
  	calculator.input('c');
  	expect(calculator.param0).toEqual('0');
  	expect(calculator.param1).toEqual(null);
  	expect(calculator.operator).toEqual(null);
  })

  it("ignores irrelevant characters", function(){
  	let calculator = new Calculator();
  	calculator.input('a');
  	expect(calculator.param0).toEqual('0');
  })

  it("handles equal", function(){
  	let calculator = new Calculator();
  	calculator.input('3');
  	calculator.input('3');
  	calculator.input('+');
  	calculator.input('9');
    expect(calculator.input('=')).toEqual(42);
    expect(calculator.param0).toEqual('0');
  	expect(calculator.param1).toEqual(null);
  	expect(calculator.operator).toEqual(null);
  })

  it("handles Enter", function(){
  	let calculator = new Calculator();
  	calculator.input('3');
  	calculator.input('3');
  	calculator.input('+');
  	calculator.input('9');
    expect(calculator.input('Enter')).toEqual(42);
    expect(calculator.param0).toEqual('0');
  	expect(calculator.param1).toEqual(null);
  	expect(calculator.operator).toEqual(null);
  })

})