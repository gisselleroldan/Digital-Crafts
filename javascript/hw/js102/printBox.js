// give a width and height, prints a hollow box given those dimensions
function printBox(num1, num2) {
  var star = "";
  space = "";
  // prints top *'s depending on what was passed in for num1
  for (var i = 1; i <= num1; i++) {
    star += "*";
  }
  console.log(star);
  //   resets so that it can print new line without adding from previous line
  star = "";

// sets value spaces inside box (loops through width to set number of spaces but substracts 2 because I already 
//     included the beginning and end asterisks below. 
//     Other wise the spaces would be pushed out 2 spaces too many)
for (var k = 1; k <= num1 -2; k++) {
    space += " "
  }


  // prints sides (subtract 2 from num2 so that the sides include the top and bottom)
  for (var j = 1; j <= num2 - 2; j++) {
    console.log("*" + space + "*");
  }

  //   prints bottom
  for (var i = 1; i <= num1; i++) {
    star += "*";
  }
  console.log(star);
}

printBox(9, 9);
