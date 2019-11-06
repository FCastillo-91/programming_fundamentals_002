const catalogueService = require("../app/catalogue_service");

describe("catalogueService", () => {
  describe("catalogueService.countBooks", () => {
    test("returns the number of books in the list", () => {
      expect(catalogueService.countBooks()).toBe(20);
    });
  });

  describe("catalogueService.checkBook", () => {
    test("returns true if the book exists in the list", () => {
      expect(catalogueService.checkBook("Dracula by Bram Stoker")).toBe(true);
    });
  
    test("returns false if the book exists in the list", () => {
      expect(catalogueService.checkBook("Moths by Pamela Mothman")).toBe(false);
    });
  });
  
  describe("catalogueService.countBooksByFirstLetter", () => {
    test("returns the number of books beginning with the given letter", () => {
      expect(catalogueService.countBooksByFirstLetter("W")).toBe(2);
    });
  
    test("returns 0 if no books begin with the given letter", () => {
      expect(catalogueService.countBooksByFirstLetter("X")).toBe(0);
    });
  });

  describe("catalogueService.countBooksByKeyword", () => {
    test("returns the number of books with the given keyword assassin", () => {
      expect(catalogueService.countBooksByKeyword("assassin")).toBe(3);
    });
  });
  
    test("returns the number of books with the given normal", () => {
    expect(catalogueService.countBooksByKeyword("normal")).toBe(2);
  });

  test("returns the number of books with the given keyword pineapple", () => {
    expect(catalogueService.countBooksByKeyword("pineapple")).toBe(0);
  });

  test("returns the number of books with the given keyword boolean", () => {
    expect(catalogueService.countBooksByKeyword(true)).toBe(0);
  });

  test("returns the number of books with the given keyword 2633", () => {
    expect(catalogueService.countBooksByKeyword(2633)).toBe(0);
  });

  test("returns the number of books with the given keyword 2633", () => {
    expect(catalogueService.countBooksByKeyword ([1, 2, 3])).toBe(0);
  });

  describe("catalogueService.getBooksByAuthor", () => {
    test("returns the titles of books by Author Charles Dickens", () => {
      expect(catalogueService.getBooksByAuthor("Charles Dickens")).toEqual([
        "A Tale of Two Cities by Charles Dickens",
        "Oliver Twist by Charles Dickens",
        "Great Expectations by Charles Dickens"
      ]);
    });

    test("returns [] if no books by author exist", () => {
      expect(catalogueService.getBooksByAuthor("Carlos Castillo")).toEqual([])
    });

    test("returns the tiles of all books by Authors with Charles in the name", () => {
      expect(catalogueService.getBooksByAuthor("Charles")).toEqual([
        "A Tale of Two Cities by Charles Dickens",
        "Oliver Twist by Charles Dickens",
        "Great Expectations by Charles Dickens",
        "The Origin of Species by Charles Darwin"
      ]);
    });
  });
});
