describe("Drink About Game", function() {
    describe("Age Check", function() {

        it("-21 should return Sorry...", function() {
            expect(whatCanIDrink(-21)).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        });

        it("13 should return Drink Toddy", function() {
            expect(whatCanIDrink(13)).toBe("Drink Toddy");
        });

        it("18 should return Drink Coke", function() {
            expect(whatCanIDrink(15)).toBe("Drink Coke");
        });

        it("20 should return Drink Beer", function() {
            expect(whatCanIDrink(20)).toBe("Drink Beer");
        });

        it("55 should return Drink Whisky", function() {
            expect(whatCanIDrink(55)).toBe("Drink Whisky");
        });

        it("above 130 should return Sorry...", function() {
            expect(whatCanIDrink(140)).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        });

    });
});
