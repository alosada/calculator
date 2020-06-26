class Calculator {
  constructor() {
    this.number0 = '0';
    this.number1 = '0';
    this.operator = null;
  }

  input(value) {
    if( this.isOperator(value) ) {
      return this.handleOperator(value);
    } else {
      return this.handleValue(value);
    }
  }

  isOperator(value) {
    return ['/','*','-','+', '='].includes(value);
  }

  handleOperator(value) {
  	if(value === '=') {
      this.resolveEqual();
  	} else {
      this.operator = value;
  	}
  }

  handleValue(value) {
    let number = this.setNumberSlot()
    if(this[number] === '0' && value !== '.') {
      this[number] = value;
    } else {
      this[number] += value;
    }
  }

  setNumberSlot() {
    if(this.operator === null) {
            return 'number0';
    } else {
            return 'number1';
    }
  }

  calculate() {
    switch(this.operator) {
      case '/':
        if(this.number1 === '0'){
          return "can't divide by 0";
        } else {
          return Number(this.number0)/Number(this.number1);
        }
      case '*':
        return Number(this.number0)*Number(this.number1);
      case '-':
        return Number(this.number0)-Number(this.number1);
      case '+':
        return Number(this.number0)+Number(this.number1);
      default:
        return 'Error';
    }
  }

  clear(){
  	this.number0 = '0';
    this.number1 = '0';
    this.operator = null;
  }

  resolveEqual(){
  	let result = this.calculate();
  }

}


module.exports = Calculator
