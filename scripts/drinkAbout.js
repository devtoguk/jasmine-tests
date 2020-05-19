function whatCanIDrink(yourAge) {
    if (yourAge < 0) {
        return "Sorry. I can’t tell what drink because that age is incorrect!";
    }
    else if(yourAge < 14) {
        return "Drink Toddy";
    } 
    else if(yourAge < 18) {
        return "Drink Coke";
    } 
    else if(yourAge < 21) {
        return "Drink Beer";
    } 
    else if(yourAge < 130) {
        return "Drink Whisky";
    } 
    else { return "Sorry. I can’t tell what drink because that age is incorrect!"; }
} 




