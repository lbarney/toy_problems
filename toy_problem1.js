//TOY PROBLEM 1
//Write a function that takes in a string, and have it return the string in alphabetical order.
var alphabitizer = function (string) {
var arr = [];
var newString = '';
	  for (var i = 0; i < string.length; i++) {
	  	arr.push(string.charAt(i));
	  }
	 arr.sort();
	newString = arr.join('');
 
return newString;
};







//TOY PROBLEM 2
//Write a function that randomly creates and returns a hex color code. Remember, hex color codes are comprised of 6 characters led by a hash. Each character could be any number 0-9 or any letter A-F.
var hexColorGen = function(){
var num =Math.floor(1000000 + Math.random()*900000); 
var color = num.toString(16);
  return ('#' + color);
};
console.log(hexColorGen());

