const express = require('express');
const exph = require('express-handlebars');
const router = express.Router();
const Task = require('../../models/task');
const uuid = require('uuid');

// gets all tasks
router.get('/', (req, res) => {
    Task.find({}).exec(function(err, docs) {
        if (!err) { 
            res.send(docs);
        }
        else {
            throw err;
        }
    });
});

//get one task
router.get('/:id', (req, res) => {
    //res.send(req.params.id);
    Task.find({ listIndex: parseInt(req.params.id)}).exec(function(err, docs) {
        if (!err) { 
            res.send(docs);
        }
        else {
            res.status(400).json({msg: `task not found ${req.params.id}`});
        }
    });
});


module.exports = router;