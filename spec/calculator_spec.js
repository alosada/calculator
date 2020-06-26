describe("synthesize_criteria", function() {
  const Calculator = require('../calculator');
  let calculator = new Calculator();

  it("sets number0 to '0'", function(){
  	expect(calculator.number0).toEqual('0')
  })

})