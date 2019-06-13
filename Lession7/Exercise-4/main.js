var color = 'green';
var name = 'toli';
var longName = name.length > 5;
var colorStartsWithg = color[0] === "g";
var x = longName && colorStartsWithg;
console.log("x = " + x);