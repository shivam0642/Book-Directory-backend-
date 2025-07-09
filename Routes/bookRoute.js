const express = require('express');
const {getAllBooksController,insertBookController,updateBookController,removeBookController} = require('../controller/booksController');



const router = express.Router();

//Get all books
router.get('/getBooks',getAllBooksController);

//Add a new book router
router.post('/insertBook',insertBookController);

//Update information of a book router
router.put('/updateBook/:id',updateBookController);

//Delete a book router
router.delete('/deleteBook/:id',removeBookController);

module.exports = router;

