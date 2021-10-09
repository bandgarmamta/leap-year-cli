var readlineSync = require("readline-sync")
var year = readlineSync.question("Enter year:")


console.log(isLeapYear(year))

function isLeapYear(year){
  var result="";
  if(year<0 || year===0 ){
    return result="Please enter a valid number"
  }else{
    if (year % 400 === 0 ) {
    return result="Yes! it's a leap year";
    }
    if (year % 100 === 0) {
      return result="No! it's not a leap year";
    }
    if (year % 4 === 0) {
      return result="Yes!it's a leap year";
    }
    return result="No! it's not a leap year";

  }
}