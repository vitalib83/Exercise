var usernumber1 = prompt("Enter your first number");
var usernumber2 = prompt("Enter your second number");
var parseuserNumber1 = parseInt(usernumber1);
var parseuserNumber2 = parseInt(usernumber2);

if (parseuserNumber1 > parseuserNumber2) {
  if (parseuserNumber2 === 0) {
    console.log(1);
  } else {
    console.log(parseuserNumber1 / parseuserNumber2);
  }
} else {
  console.log(parseuserNumber2 / parseuserNumber1);
}