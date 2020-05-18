Calculator = function() {
    this.value = 0;
}

Calculator.prototype.add = function(number) {
    if(typeof(numOne) == "number" && typeof(numTwo) == "number") {
        this.value += number;
    } else {
        alert("Error!");
    }
}





// function addition(numOne, numTwo) {
//     if(typeof(numOne) == "number" && typeof(numTwo) == "number") {
//         return numOne + numTwo;
//     } else {
//         alert("Error!");
//     }
// }
