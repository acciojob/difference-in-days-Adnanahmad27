var dateDiffInDays = function (date1, date2) {
  //   write your code here
	const date11 = new Date(date1);
	const date22 = new Date(date2);
	let milliSec1 = date11.getTime();
	let milliSec2 = date22.getTime();

	let diff = Math.abs(milliSec2 - milliSec1);
	return Math.ceil(diff / (1000*3600*24));
};

// Do not change the code below.
const dateOne = prompt("Enter Start Date.");
const dateTwo = prompt("Enter End Date.");
alert(dateDiffInDays(dateOne, dateTwo));
