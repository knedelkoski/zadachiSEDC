//1 zadache 
var array = new Array(100);
var result = [];
function divisible(array) {
    for(var i = 0; i < array.length; i++){
        result = array.push(i % 3 && i % 7);
    }
    return result;
}
console.log(result);

//2 zadacha
// var currentBalance = 50000;

// function selectFunction() {
// 	var atmFunctions = parseInt(prompt("Hello, please make a choise? \n 1. Balance \n 2. Withdrawal \n 3. Deposit \n 4. Exit"));
// 	if (atmFunctions !== "" && atmFunctions !== null && !isNaN(atmFunctions)) {
// 		switch (atmFunctions) {
// 			case 1:
// 				balance();
// 				break;
// 			case 2:
// 				withdrawal();
// 				break;
// 			case 3:
// 				deposit();
// 				break;
// 			case 4:
// 				exit();
// 				break;
// 			default:
// 				alert("Please make a valid selection");
// 				selectFunction();
// 		}
// 	} else {
// 		alert("Please make a valid selection");
// 		selectFunction();
// 	}
// }


// function balance() {
//     alert("Your current balance is $" + currentBalance);
//     toContinue();
// }


// function deposit() {
// 	var depositAmount = parseInt(prompt("How much do you want to deposit?"));
// 	if (depositAmount !== "" && depositAmount !== null && !isNaN(depositAmount)) {
// 		currentBalance += depositAmount;
// 		alert("You have deposited $" + depositAmount + "\n" + "Now you have $" + currentBalance);
// 		toContinue();
// 	} else {
// 		alert("Error: please enter a number!");
// 		deposit();
// 	}
// }


// function withdrawal() {
// 	var withdrawalAmount = parseInt(prompt("How much do you want to withdraw?"));
// 	if (withdrawalAmount !== "" && withdrawalAmount !== null && !isNaN(withdrawalAmount)) {
// 			if (withdrawalAmount <= currentBalance) {
// 				currentBalance -= withdrawalAmount;
// 				alert("Transaction successful!");
// 				alert("Your remaining balance is $" + currentBalance);
// 				toContinue();
// 			} else {
// 				alert("You do not have sufficient funds!");
// 				withdrawal();
// 			}} else {
// 		        alert("Error: please enter a number!");
// 		        withdrawal();
// 	        }
// }	


// function exit() {
// 	alert("Thank you");
// }

// function toContinue(){
//     var yesOrNo = parseInt(prompt("Do you want to perform another transaction? \n 1. Yes \n 2. No"));
// 	if (yesOrNo !== "" && yesOrNo !== null) {
//     	if (yesOrNo === 2){
// 			exit();
//     	}
// 		else {
// 			selectFunction(); 
//     	}
// 	} else {
// 		alert("Please make a valid selection");
// 		toContinue();
// 	}
// }


