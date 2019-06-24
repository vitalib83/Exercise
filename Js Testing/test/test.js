function palindrome(str) {
    var re = /[\W_]/g;
    var lowRegStr = str.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join(''); 
    return reverseStr === lowRegStr;
  }
  
  var expect = require('chai').expect;
  it('checks whether it is a palindrome', function(){
    expect(palindrome("rtgykm mmmm llkk")).to.equal(false);
    });