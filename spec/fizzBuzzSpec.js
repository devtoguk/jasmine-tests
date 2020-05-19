describe("FizzBuzz Game", function() {
    describe("Check Fizz", function() {

    // beforeEach(function() {
    //     drink = new whatCanIDrink();
    // });
    
        it("The number 3 should return Fizz", function() {
            let result = fizzBuzz(6);
            expect(result).toBe("Fizz");
        });

        it("The number 9 should return Fizz", function() {
            let result = fizzBuzz(9);
            expect(result).toBe("Fizz");
        });

        it("The number 5 should return Buzz", function() {
            let result = fizzBuzz(5);
            expect(result).toBe("Buzz");
        });

        it("The number 25 should return Buzz", function() {
            let result = fizzBuzz(25);
            expect(result).toBe("Buzz");
        });

        it("The number 7 should return 7", function() {
            let result = fizzBuzz(7);
            expect(result).toBe(7);
        });

        it("The number 19 should return 19", function() {
            let result = fizzBuzz(19);
            expect(result).toBe(19);
        });

        it("The number 15 should return FizzBuzz", function() {
            let result = fizzBuzz(15);
            expect(result).toBe("FizzBuzz");
        });

        it("The number 30 should return FizzBuzz", function() {
            let result = fizzBuzz(30);
            expect(result).toBe("FizzBuzz");
        });
        

    });
});
