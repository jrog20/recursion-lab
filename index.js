function printString(myString) {
	if (myString.length > 1) {
		let mySubString = myString.substring(1, myString.length);
		printString(mySubString);
	} else {
		return true;
	}
}

// function reverseString(myString) {
//   if(myString.length < 2){
//     return myString
//   } else {
//     console.log(myString)
//     return reverseString(myString.substring(1)) + myString[0]   
//   }
// }
