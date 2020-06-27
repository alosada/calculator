class Calculator {
  constructor(display) {
    this.param0 = '0';
    this.param1 = null;
    this.operator = null;
    this.allowedNumbers = ['0', '1','2', '3', '4', '5', '6', '7', '8', '9', '.'];
    this.allowedOperators = ['c', 'C', '/','*','-','+','=', 'Enter'];
    if(display){
      this.display = display;
      this.updateDisplay('0');
    }
  }

  get allowedCharacters(){
  	return this.allowedNumbers.concat(this.allowedOperators);
  }

  get number0(){
  	return this.paramToNumber(this.param0)
  }

  get number1(){
  	return this.paramToNumber(this.param1)
  }

  paramToNumber(param){
  	return Number(param)
  }

  input(value) {
  	if(!this.goodInput(value)){
      return 'bad input ' + value
  	}
    if( this.isOperator(value) ) {
      return this.handleOperator(value);
    } else {
      return this.handleValue(value);
    }
  }

  goodInput(value){
  	return this.allowedCharacters.includes(value);
  }

  isOperator(value) {
    return this.allowedOperators.includes(value);
  }

  handleOperator(operator) {
  	if(operator === '=' || operator === 'Enter') {
      return this.resolveEqual();
  	} else if(['c','C'].includes(operator)){
  	  this.updateDisplay('0');
      this.clear();
  	} else {
  	  if(this.operator && this.param1){
  	    this.param0 = String(this.calculate());
        this.param1 = '0';
        this.updateDisplay(this.param0)
  	  }
      this.operator = operator;
  	}
  	return operator;
  }

  handleValue(value) {
    let number = this.setNumberSlot()
    let nullOrZero = this[number] === '0' || this[number] === null
    if(nullOrZero && value !== '.') {
      this[number] = value;
    } else {
      this[number] += value;
    }
    this.updateDisplay(this[number]);
    return value;
  }

  setNumberSlot() {
    if(this.operator === null) {
      return 'param0';
    } else {
      return 'param1';
    }
  }

  calculate() {
    switch(this.operator) {
      case '/':
        if(this.param1 === '0'){
          this.clear();
          return "can't divide by 0";
        } else {
          return this.number0/this.number1;
        }
      case '*':
        return this.number0*this.number1;
      case '-':
        return this.number0-this.number1;
      case '+':
        return this.number0+this.number1;
      default:
        return 'Error';
    }
  }

  clear(){
  	this.param0 = '0';
    this.param1 = null;
    this.operator = null;
  }

  resolveEqual(){
  	let result = this.calculate();
  	this.updateDisplay(result);
  	this.clear();
  	return result;
  }

  updateDisplay(value){
  	if(this.display){
      this.display.value = value;
  	}
  }
}

module.exports = Calculator