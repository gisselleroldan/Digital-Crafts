function printBanner(text) {
  var star = "";
  // loop through length of word to get top line of *
  // add 4 to add * padding to both sides
  for (var i = 0; i < text.length + 4; i++) {
    star += "*";
  }
  //   print top line based on word length
  console.log(star);
  star = "";
  //    print middle line
  console.log("*" + " " + text + " " + "*");
  //  print bottom line
  for (var i = 0; i < text.length + 4; i++) {
    star += "*";
  }
  console.log(star);
}
printBanner("Welcome to Digital Crafts");
