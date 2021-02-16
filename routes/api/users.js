const express = require('express');
const router = express.Router();
const User = require('../../models/user');
const uuid = require('uuid');
const querystring = require('querystring');

// gets all users
router.get('/', (req, res) => {
    User.find({}).exec(function(err, docs) {
        if (!err) { 
            res.send(docs);
        }
        else {
            throw err;
        }
    });
});

//get one user
router.get('/:id', (req, res) => {
    //res.send(req.params.id);
    user.find({ _id: parseInt(req.params.id)}).exec(function(err, docs) {
        if (!err) { 
            res.send(docs);
        }
        else {
            res.status(400).json({msg: `user not found ${req.params.id}`});
        }
    });
});

// Create user
router.post('/', (req, res) => {
    //console.log(req.body);
    const newuser = new user ({
        id: uuid.v4(),
        userName: req.body.userName,
        passwd: req.body.passwd
    });
    if(!newuser.userName) {
        return res.status(400).json('user name missing');
    }
    newuser.save(function (err, user) {
        if (err) return console.error(err);
        console.log(newuser.userName + " saved to users collection.");
      });
    res.json(newuser);
});

//update
router.put('/:id', (req, res) => {
    const newUser = new user ({
        _id: req.body._id,
        userName: req.body.userName,
        passwd: req.body.passwd
    });
    newUser.isNew=false;
    newUser.save(function (err, user) {
        if (err) return console.error(err);
        console.log(newUser.userName + " updated in userstore collection.");
      });
    res.json(newUser);
});

//delete user
router.delete('/:id', (req, res) => {
    user.deleteOne({ _id: req.body._id }, function(err){
        if (err) res.status(400).json({msg: `user id not found ${req.params._id}`})
        else res.json({ 
            msg : 'user deleted'
        });
    });  
});

module.exports = router;