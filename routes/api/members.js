const express = require('express');
const router = express.Router();
const members = require('../..//Members');
const uuid = require('uuid');

// gets all members
router.get('/', (req, res) => {
    res.json(members);
});

//get one member
router.get('/:id', (req, res) => {
    //res.send(req.params.id);
    const found = members.some(member => member.id === parseInt(req.params.id));
    if(found) {
        res.json(members.filter(member => member.id === parseInt(req.params.id)));
    }
    else {
        res.status(400).json({msg: `Member not found ${req.params.id}`});
    }
});

// Create member
router.post('/', (req, res) => {
    //res.send(req.body);
    const newMember = {
        id: uuid.v4(),
        name: req.body.name,
        status: 'active'
    }
    if(!newMember.name) {
        res.status(400).json('Name missing');
    }
    else {
        members.push(newMember);
        res.json(members);
    }
});

module.exports = router;