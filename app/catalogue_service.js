// eslint-disable-next-line no-unused-vars
const catalogue = [
  "The Catcher in the Rye by J.D. Salinger (10)",
  "Dracula by Bram Stoker (0)",
  "Between the Assassinations by Aravind Adiga (9)",
  "Wolf Hall by Hilary Mantel (33)",
  "Bring Up The Bodies by Hilary Mantel (31)",
  "A Place of Greater Safety by Hilary Mantel (11)",
  "Giving Up the Ghost by Hilary Mantel (8)",
  "The Assassination of Margaret Thatcher by Hilary Mantel (43)",
  "The Yellow Wallpaper by Charlotte Perkins Gilman (12)",
  "Conversations With Friends by Sally Rooney (1)",
  "Normal People by Sally Rooney (2)",
  "Everything I Never Told You by Celeste Ng (6)",
  "2666 by Robert Bolaño (17)",
  "By Night In Chile by Robert Bolaño (8)",
  "A Tale of Two Cities by Charles Dickens (3)",
  "Oliver Twist by Charles Dickens (7)",
  "Great Expectations by Charles Dickens (1)",
  "The Blind Assassin by Margaret Atwood (8)",
  "Why Be Happy When You Could Be Normal? by Jeanette Winterson (19)",
  "The Origin of Species by Charles Darwin (50)"
];

function checkBook(title) {
  if (!title) throw new Error("Please provide a title"); {
    // loop through array of catalogue
    for (let i = 0; i < catalogue.length; i++) {
    // create variable to hold all lowercase titles
      lowerTitle = title.toLowerCase();
    // create statement to find out whether the catalogue includes title
      if (catalogue[i].includes(title)) {
    // if return true
        return true;
      }
    }
    // otherwise return false
    return false
  }
}

function countBooksByKeyword(keyword) {
  if (!keyword) throw new Error("Please provide a keyword");
  // create variable for the number of keywords found in catalogue array
  let count = 0;
  // create a loop to go through array
  for (let i = 0; i < catalogue.length; i++) {
  // create a variable to change all titles to lowercase 
    const words = catalogue[i].toLowerCase();
  // create variable to hold keywords in lowercase
    const books = keyword.toLowerCase();
  // if statement to check whether the words variable includes books variable
    if (words.includes(books)) {
  // 
      count++;
    }
  }
  // return the number of keywords.
  return count;
}

  function getBooksByAuthor(author) {
    if (!author) throw new Error("Please provide an author");
      const booksByAuthor = [];
        for (let i = 0; i < catalogue.length; i++) {
          if (catalogue[i].includes(author)) {
            let books = catalogue[i].indexOf(" by")
              booksByAuthor.push(catalogue[i].slice(0, books));
      }
    }
    return booksByAuthor;
  }


  function getStockCount(title) {
    if (!title) throw new Error("Please provide a title");
      let count = 0;
        for (let i = 0; i < catalogue.length; i++) {
          if (catalogue[i].includes(!title)){
            count = 0;
          } else if 
            (catalogue[i].includes(title)){
              let num = catalogue[i].slice(-3, -1);
              count = Number(num) ? num : num[1]; 
            }
          }
        return Number(count);
      }


  function stockReview(title) {
    if (!title) throw new Error("Please provide a title");
      let count = 0;
       for (let i = 0; i < catalogue.length; i++) {
         if (getStockCount(title) === 0){
           return "Not in stock";
         } else if (getStockCount(title) > 0 && getStockCount(title) <= 5) {
           return "Low stock";
         } else if (getStockCount(title) >= 5 && getStockCount(title) <= 10) {
           return "Medium stock";
         } else if (getStockCount(title) > 10) {
           return "High stock";
         }
      }
  }

  module.exports = {
    checkBook,
    countBooksByKeyword,
    getBooksByAuthor,
    getStockCount,
    stockReview
  };