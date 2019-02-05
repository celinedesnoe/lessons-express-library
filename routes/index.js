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

module.exports = router;
