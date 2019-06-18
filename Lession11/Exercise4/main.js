function createSequence(d) {
    return {
      d: d,
      printElements: function (amount) {
        var current = 0;
        for (var i=0; i < amount;i++){
          console.log(current);
          current += d;
        }
      }
    }
  }

createSequence(2).printElements(10);
// 0,2,4,6,8,10,12,14,16,18
 
createSequence(5).printElements(6);
// 0,5,10,15,20,25