const express = require('express');
const exph = require('express-handlebars');
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
        return res.status(400).json('Name missing');
    }
    members.push(newMember);
    res.json(members);
});

//update
router.put('/:id', (req, res) => {
    //res.send(req.params.id);
    const found = members.some(member => member.id === parseInt(req.params.id));
    if(found) {
        const updMember = req.body;
        members.forEach(member => {
            if(member => member.id === parseInt(req.params.id)) {
                member.name = updMember.name ? updMember.name : member.name;
                res.json({ msg: 'Member updated', member});
            }
        });
    }
    else {
        res.status(400).json({msg: `Member not found ${req.params.id}`});
    }
});

//delete member
router.delete('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));
    if(found) {
        res.json({ 
            msg : 'Member deleted', 
            members: members.filter(member => member.id !== parseInt(req.params.id))
    });
    }
    else {
        res.status(400).json({msg: `Member not found ${req.params.id}`});
    }
});


module.exports = router;