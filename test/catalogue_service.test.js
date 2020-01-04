const catalogueService = require("../app/catalogue_service");

describe("catalogueService", () => {
  describe("catalogueService.checkBook", () => {
    test("returns true when a book is found by title", () => {
      expect(catalogueService.checkBook("Great Expectations")).toBe(true);
    });

    test("returns false when a book cannot be found by title", () => {
      expect(catalogueService.checkBook("Gone With The Wind")).toBe(false);
    });

    test("returns true when a partial match is found", () => {
      expect(catalogueService.checkBook("Expectations")).toBe(true);
    });

    test("returns false when not even a partial match is found", () => {
      expect(catalogueService.checkBook("The Wind")).toBe(false);
    });
  });

  describe("catalogueService.countBooksByKeywords", () => {
    test("returns a number of how many book titles match a given keyword", () => {
      expect(catalogueService.countBooksByKeyword("assassin")).toBe(3);
    });

    test("returns a number of how many book titles match keyword", () => {
      expect(catalogueService.countBooksByKeyword("normal")).toBe(2);
    });

    test("returns a count of how many book titles match a given keyword", () => {
      expect(catalogueService.countBooksByKeyword("pineapple")).toBe(0);
    });
  });

  describe("catalogueService.getBooksByAuthor", () => {
    test("returns a list of books by a given author", () => {
      expect(catalogueService.getBooksByAuthor("Charles Dickens")).toEqual([
        "A Tale of Two Cities",
        "Oliver Twist",
        "Great Expectations"
      ]);
    });
    test("returns an empty array", () => {
      expect(catalogueService.getBooksByAuthor("Marian Keyes")).toEqual([]);
    });
  });

  describe("catalogueService.getStockCount", () => {
    test("return the number of items that are in stock of a given title", () => {
      expect(catalogueService.getStockCount("Between the Assassinations")).toBe(9);
    });

    test("return the number of items that are in stock of a given title", () => {
      expect(catalogueService.getStockCount("A Tale of Two Cities")).toBe(3);
    });

    test("return the number of items that are in stock of a given title", () => {
      expect(catalogueService.getStockCount("The Great Gatsby")).toBe(0);
    });
  });

  describe("catalogueService.stockReview", () =>  {
    test("return Dracula is not in stock", () => {
      expect(catalogueService.stockReview("Dracula")).toBe("Not in stock");
    });
    test("return Normal People is Low stock", () => {
      expect(catalogueService.stockReview("Normal People")).toBe("Low stock"); 
    });
    test("return The Blind Assassin is medium stock", () => {
      expect(catalogueService.stockReview("The Blind Assassin")).toBe("Medium stock");
    });
    test("return The Origin of Species is High stock", () => {
      expect(catalogueService.stockReview("The Origin of Species")).toBe("High stock");
    });
  });
});
