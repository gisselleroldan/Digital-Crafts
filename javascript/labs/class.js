// JAVASCRIPT

// #1
// var firstName = "gisselle";

// var lastName = "roldan";

// var myName = firstName + lastName;

// console.log(myName.length);

// var isValid = true;
// console.log(typeof isValid);

// var printThis = "hello" + 4;

// console.log(printThis);

// var name2 = "gisselle";

// console.log(name2.indexOf("i"));

// var boolean = true;
// var not = !boolean;

// var and = boolean && true;

// var or = boolean || false;

// var equals = true == false;

// var age = 21;

// if (age >= 21) {
//   console.log("You can drink");
// } else if (age < 21) {
//   console.log("You are not old enough to drink");
// } else {
//   console.log("legal in some states");
// }

// var day = "Wednesday";

// if (day == "Monday") {
//   pass;
// } else if (day == "Tuesday") {
//   pass;
// } else if (day == "Wednesday") {
//   pass;
// } else if (day == "Thursday") {
//   pass;
// } else if (day == "Friday") {
//   pass;
// } else if (day == "Saturday") {
//   pass;
// } else if (day == "Sunday") {
//   pass;
// }

// switch (day) {
//   case "Monday":
//     break;
//   case "Tuesday":
//     break;
//   case "Wednesday":
//     break;
//   case "Thursday":
//     break;
//   case "Friday":
//     break;
//   case "Saturday":
//     break;
//   case "Sunday":
//     break;
//   default:
//     break;
// }

// var expr = "Papayas";
// switch (expr) {
// case ('Oranges'):
//     console.log('Oranges are $0.59 a pound.');
//     break;
// case ('Mangoes'):
//     console.log('Mangoes and papayas are $2.79 a pound.')
//     break;
// case ('Papayas'):
//     console.log('Mangoes and papayas are $2.79 a pound.');
//     break;
// default:
//     console.log('Sorry, we are out of ' + expr + '.');
//     break
// }

var count = 0;

while (count < 10) {
  count++;
  // console.log(count)
}

// for (start; condition ; increment) { console.log(some value)}

// for (var i = 1; i <= 10; i++) {

//   for(var j = 1; j <= 10; j++){
//       console.log(`${i} X ${j} = ${i*j}`);
//   }

// }

var arr = ["one", "two", "three"];

var word = "potato";
var newWord = word.split("");
// console.log(newWord)
var revWord = [];
for (var index = 0; index < word.length; index++) {
  var char = word[index];
  revWord = char + revWord;
}
// console.log(revWord)

// Splice mutates old array
var lottoNums = [23, 11, 43, 19, 37, 16];
var arrayOfSplicedValues = lottoNums.splice(2, 3);

// console.log(arrayOfSplicedValues);
// console.log(lottoNums)

// Slice does not change original array
var animals = ["ant", "bison", "camel", "duck", "elephant"];
// console.log(animals.slice(2,4));
// console.log(animals);

// Objects
// var myObj = {keyname: value}
var characterSheet = {
  name: "tim berners-lee",
  title: "sir",
  powers: "invent the web",
};

for (var keyName in characterSheet){
    // console.log(`${keyName} ${characterSheet[keyName]}`)

}

// console.log(characterSheet["name"]);
// console.log(characterSheet.name);

// Functions
function add(x,y){
   return x + y 
}

console.log(add(22,17))