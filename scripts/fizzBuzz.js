fizzBuzz = function(fbNum) {

    if (fbNum % 3 === 0 && fbNum % 5 === 0) { 
        return "FizzBuzz";
    } 
    else if (fbNum % 3 === 0) { 
        return "Fizz";
    }
    else if (fbNum % 5 === 0) { 
        return "Buzz";
    } 
    else { 
        return fbNum; 
    }

};
