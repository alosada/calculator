class Calculator {
  constructor() {
    this.number0 = '0';
    this.number1 = '0';
    this.operator = null;
    this.allowedNumbers = ['0', '1','2', '3', '4', '5', '6', '7', '8', '9', '.'];
    this.allowedOperators = ['c', 'C', '/','*','-','+','='];
    this.updateDisplay('0');
  }

  get allowedCharacters(){
  	return this.allowedNumbers.concat(this.allowedOperators);
  }

  get display(){
  	return document.querySelector('#calculator #display')
  }

  input(value) {
  	if(!this.goodInput(value)){
      return console.log( 'bad input ' + value )
  	}
    if( this.isOperator(value) ) {
      this.handleOperator(value);
    } else {
      this.handleValue(value);
    }
  }

  goodInput(value){
  	return this.allowedCharacters.includes(value);
  }

  isOperator(value) {
    return this.allowedOperators.includes(value);
  }

  handleOperator(value) {
  	if(value === '=') {
      this.resolveEqual();
  	} else if(['c','C'].includes(value)){
  	  this.updateDisplay('0');
      this.clear();
  	} else {
  	  if(this.operator !== null){
  	    this.number0 = String(this.calculate());
        this.number1 = '0';
        this.updateDisplay('0')
  	  }
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
    this.updateDisplay(this[number])
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
          this.clear();
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
    this.operator = null;
  	this.number0 = '0';
    this.number1 = '0';
  }

  resolveEqual(){
  	let result = String(this.calculate());
  	this.updateDisplay(result);
  	this.clear();
  }

  updateDisplay(value){
    this.display.value = value;
  }
}

module.exports = Calculator