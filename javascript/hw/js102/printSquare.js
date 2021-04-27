// give a number and prints a square of that num using asterisks.
function printSquare(num) {
  // gives starting point
  var star = "";

  // sets length
  for (let i = 1; i <= num; i++) {
    // sets width
    for (let j = 1; j <= num; j++) {
      // adds a * for every time 1 < 5
      star += "*";
    }
    console.log(star);
    // Sets star back at empty var to make new row on next loop
    star = "";
  }
}

// calling a function and giving it the argument of 2
printSquare(2);
