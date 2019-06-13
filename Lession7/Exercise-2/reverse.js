function reverse(str) {
  var newString= "";
  var counter = str.length-1;
  while(counter >= 0){
    newString= newString + str.charAt(counter);
    
    counter--;
  }
  console.log(newString);

  return str;
}
reverse("shalom velehitraot");