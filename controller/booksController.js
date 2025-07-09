const bookModel = require('../model/bookModel');

//Get All books Router
const getAllBooksController = async (req,resp) => {
    try {
        const books = await bookModel.find();
        if(books.length === 0) {
            return resp.status(404).send({
                success: false,
                message: "No Books Found"
            });
        }

        resp.status(200).send({
            success:true,
            totalCount: books.length,
            data: books
        })
    } catch (error) {
        console.log(error);
        resp.status(500).send({
            success: false,
            message: "Error in Get all Books API",
            error: error.message
        })
    }
}

//Insert Book Controller
const insertBookController = async (req,resp)=>{
    try {
        const {name,author,publishedYear, genre} = req.body
        if(!name || !author || !publishedYear||!genre)
        {
            resp.status(500).send({
                success:false,
                message:'Please Enter the Required details'
            })
        }

        const existing  = await bookModel.findOne({name,author})
        if(existing)
        {
            return resp.statur(403).send({
                success:false,
                message:"Book is already added in the directory"
            })
        }
        const book = await bookModel.create({
            name,
            author,
            publishedYear,
            genre
        })
        resp.status(201).send({
            success:true,
            message:"Book Added Successfully",
            data:book
        })
    } catch (error) {
        console.log(error);
        resp.status(500).send({
            success:false,
            message:"Error in Insert Book API",
            error:error.message
        })
    }
}

//Update Book Controller
const updateBookController = async (req,resp)=>{
    try {
        const id = req.params.id;
        if(!id)
        {
            return resp.status(400).send({
                success:false,
                message:"Book ID is required"
            })
        }

        const book = await bookModel.findById(id);
        if(!book)
        {
            return resp.status(404).send({
                success:false,
                message:"Book not found"
            })
        }

        const {name,author,publishedYear, genre} = req.body;

        if(name) book.name = name;
        if(author) book.author = author;
        if(publishedYear) book.publishedYear = publishedYear;
        if(genre) book.genre = genre;

        await book.save();

        resp.status(200).send({
            success:true,
            message:"Book Updated Successfully",
            data:book
        })

    } catch (error) {
        console.log(error);
        resp.status(500).send({
            success:false,
            message:"Error in Update Book API",
            error:error.message
        })
    }
}

//Remove Book Controller
const removeBookController = async (req, resp) => {
    try {
        const id = req.params.id;
        if (!id) {
            return resp.status(400).send({
                success: false,
                message: "Book ID is required"
            });
        }

        const book = await bookModel.findById(id);
        if (!book) {
            return resp.status(404).send({
                success: false,
                message: "Book not found"
            });
        }

        await bookModel.findByIdAndDelete(id);

        resp.status(200).send({
            success: true,
            message: "Book deleted successfully"
        });
    } catch (error) {
        console.log(error);
        resp.status(500).send({
            success: false,
            message: "Error in Remove Book API",
            error: error.message
        });
    }
}

module.exports = {getAllBooksController, insertBookController, updateBookController, removeBookController};