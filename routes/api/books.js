const express = require('express');
const router = express.Router();
const Book = require('../../models/book');
const User = require('../../models/user');
const uuid = require('uuid');
const querystring = require('querystring');

// gets all books with username query
router.get('/', (req, res) => {
    const username = req.query.username;
    User.findOne({userName: username}).then ((user) => {
        if(user===null){
            console.log(`user not found ${username}`);
            res.status(400).json({msg: `user not found ${username}`});
        } else { 
            Book.find({reader: user._id}).exec(function(err, docs) {
                if (!err) { 
                    res.send(docs);
                }
                else {
                    throw err;
                }
            });
        }
    });
});

//get one book
router.get('/:id', (req, res) => {
    //res.send(req.params.id);
    Book.find({ _id: parseInt(req.params.id)}).exec(function(err, docs) {
        if (!err) { 
            res.send(docs);
        }
        else {
            res.status(400).json({msg: `book not found ${req.params.id}`});
        }
    });
});

// Create book
router.post('/', (req, res) => {
    //console.log(req.body);
    const newBook = new Book ({
        id: uuid.v4(),
        bookName: req.body.bookName,
        author: req.body.author,
        rating: req.body.rating,
        reader: req.userId,
        challengeId: req.body.challengeId,
        comment: req.body.comment
    });
    if(!newBook.bookName) {
        return res.status(400).json('Book name missing');
    }
    newBook.save(function (err, book) {
        if (err) return console.error(err);
        console.log(newBook.bookName + " saved to bookstore collection.");
      });
    res.json(newBook);
});

//update
router.put('/:id', (req, res) => {
    const newBook = new Book ({
        _id: req.body._id,
        bookName: req.body.bookName,
        author: req.body.author,
        rating: req.body.rating,
        reader: req.userId,
        challengeId: req.body.challengeId,
        comment: req.body.comment
    });
    newBook.isNew=false;
    newBook.save(function (err, book) {
        if (err) return console.error(err);
        console.log(newBook.bookName + " updated in bookstore collection.");
      });
    res.json(newBook);
});

//delete book
router.delete('/:id', (req, res) => {
    Book.deleteOne({ _id: req.body._id }, function(err){
        if (err) res.status(400).json({msg: `Book id not found ${req.params._id}`})
        else res.json({ 
            msg : 'Book deleted'
        });
    });  
});

module.exports = router;