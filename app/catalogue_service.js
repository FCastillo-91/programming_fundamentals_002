// eslint-disable-next-line no-unused-vars
const catalogue = [
  "The Catcher in the Rye by J.D. Salinger",
  "Dracula by Bram Stoker",
  "Between the Assassinations by Aravind Adiga",
  "Wolf Hall by Hilary Mantel",
  "Bring Up The Bodies by Hilary Mantel",
  "A Place of Greater Safety by Hilary Mantel",
  "Giving Up the Ghost by Hilary Mantel",
  "The Assassination of Margaret Thatcher by Hilary Mantel",
  "The Yellow Wallpaper by Charlotte Perkins Gilman",
  "Conversations With Friends by Sally Rooney",
  "Normal People by Sally Rooney",
  "Everything I Never Told You by Celeste Ng",
  "2666 by Robert Bolaño",
  "By Night In Chile by Robert Bolaño",
  "A Tale of Two Cities by Charles Dickens",
  "Oliver Twist by Charles Dickens",
  "Great Expectations by Charles Dickens",
  "The Blind Assassin by Margaret Atwood",
  "Why Be Happy When You Could Be Normal? by Jeanette Winterson",
  "The Origin of Species by Charles Darwin"
];

function countBooks() {
  return catalogue.length
}

function checkBook(title) {
  //Loop through this array and return true or false
  for (let i = 0; i < catalogue.length; i++) {
    //Check if a value exists in the catalogue array
    if (catalogue[i] === title) {
      return true
    }
  }
  return false
}

function countBooksByFirstLetter(letter) {
  
  var count = 0;
  
  //Loop through array and find how many books begin with letter
  for (let i = 0; i < catalogue.length; i++) {
    const book = catalogue [i]
    const firstChar = book[0]
    if (firstChar === letter.toUpperCase()) {
        count ++
    }
  }
  return count;
}  
 
function countBooksByKeyword(keyword) {
  keyword = keyword.toString ();
  
  var count = 0;

  // List my array
  for (let i = 0; i < catalogue.length; i++) {
    // Make const title variable (= catalogue [i])
    let title = catalogue [i].toLowerCase();
    // Search title for keyword and save as num
    let num = title.search(keyword.toLowerCase());
    // If num is > -1 keyword exists
    if (num > -1) {
      // Return count
      count++
    }
  }
  return count
}

function getBooksByAuthor(word) {
  word = word.toString ().toLowerCase();
  var results = [];
  
  // List my array
  for (let i = 0; i < catalogue.length; i++) {
    // Make book = catalogue [i]
    let book = catalogue [i].toLowerCase ();
    // Have to isolate the author from each line (all charaters after "by")
    let splitString = book.split(" by ");
    // if author (splitString [1]) === word save the line into a array
    // If num is > -1 keyword exists
    if (splitString [1].toLowerCase ().search(word) > -1) {
      results.push(catalogue [i]);
    }
  }
  // Return array
  console.log(results)
  return results;
}


//Logic of the functions
countBooksByFirstLetter("b")
countBooksByKeyword("the")
countBooksByKeyword(true)
countBooksByKeyword(2123)
countBooksByKeyword([1, 2, 3, 4])
getBooksByAuthor("Charles")
getBooksByAuthor("pineapple")

module.exports = {
  countBooks,
  checkBook,
  countBooksByFirstLetter,
  countBooksByKeyword,
  getBooksByAuthor
}