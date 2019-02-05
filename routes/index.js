const express = require("express");
const Book = require("../models/book-model.js");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/books", (req, res, next) => {
  // whenever a user visits "/books" find all the books sorted by rating
  Book.find()
    .sort({ rating: -1 })
    .then(bookResults => {
      // send the database query results
      res.locals.bookArray = bookResults;
      res.render("book-list.hbs");
    })
    // next(err) skips to the error handler in "bin/www" (error.hbs)
    .catch(err => next(err));
});

router.get("/book/:bookId", (req, res, next) => {
  // res.send(req.params);
  // get the ID from the address (it's inside of req.params)
  const { bookId } = req.params;
  // find the book in the database using the ID form the address
  Book.findById(bookId)
    .then(bookDoc => {
      // send the database query result to the HBS file as "bookItem"
      res.locals.bookItem = bookDoc;
      res.render("book-details.hbs");
    })
    // next(err) skips to the error handler in "bin/www" (error.hbs)
    .catch(err => next(err));
});

module.exports = router;
