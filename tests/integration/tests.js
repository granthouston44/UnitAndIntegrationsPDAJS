const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })
  it('arithmetical operations should update the display with the result of the operation', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    element(by.css('#operator_add.operator')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_equals.operator')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('4')
  })
  it('multiple operations can be chained together', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    element(by.css('#operator_add.operator')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_multiply.operator')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_equals.operator')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('8')
  })

  it('output as expected for negative number', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    element(by.css('#operator_subtract.operator')).click();
    element(by.css('#number9')).click();

    element(by.css('#operator_equals.operator')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('-7')
  })

  it('output as expected for decimals', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number1')).click();
    element(by.css('#operator_divide.operator')).click();
    element(by.css('#number2')).click();


    element(by.css('#operator_equals.operator')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('0.5')
  })

  it('output as expected for large number', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    element(by.css('#operator_multiply.operator')).click();
    element(by.css('#number9')).click();
    element(by.css('#operator_multiply.operator')).click();
    element(by.css('#number9')).click();
    element(by.css('#operator_multiply.operator')).click();
    element(by.css('#number9')).click();
    element(by.css('#operator_multiply.operator')).click();
    element(by.css('#number9')).click();
    element(by.css('#operator_multiply.operator')).click();
    element(by.css('#number9')).click();
    element(by.css('#operator_multiply.operator')).click();
    element(by.css('#number9')).click();
    element(by.css('#operator_multiply.operator')).click();
    element(by.css('#number9')).click();
    element(by.css('#operator_multiply.operator')).click();
    element(by.css('#number9')).click();
    element(by.css('#operator_equals.operator')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('86093442')
  })

  it('should return an error if divide by 0', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    element(by.css('#operator_divide.operator')).click();
    element(by.css('#number0')).click();


    element(by.css('#operator_equals.operator')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('error')
  })


});
