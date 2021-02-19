const express = require('express');
const exph = require('express-handlebars');
const router = express.Router();
const Challenge = require('../../models/challenge');
const uuid = require('uuid');

// gets all challenges
router.get('/', (req, res) => {
    Challenge.find({}).exec(function(err, docs) {
        if (!err) { 
            res.send(docs);
        }
        else {
            throw err;
        }
    });
});

//get one challenge
router.get('/:id', (req, res) => {
    //res.send(req.params.id);
    Challenge.find({ listIndex: parseInt(req.params.id)}).exec(function(err, docs) {
        if (!err) { 
            res.send(docs);
        }
        else {
            res.status(400).json({msg: `challenge not found ${req.params.id}`});
        }
    });
});


module.exports = router;