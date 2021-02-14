const express = require('express');
const exph = require('express-handlebars');
const router = express.Router();
const tasks = require('../../Tasks');
const uuid = require('uuid');

// gets all tasks
router.get('/', (req, res) => {
    res.json(tasks);
});

//get one task
router.get('/:id', (req, res) => {
    //res.send(req.params.id);
    const found = tasks.some(task => task.id === parseInt(req.params.id));
    if(found) {
        res.json(tasks.filter(task => task.id === parseInt(req.params.id)));
    }
    else {
        res.status(400).json({msg: `task not found ${req.params.id}`});
    }
});

// Create task
router.post('/', (req, res) => {
    //res.send(req.body);
    const newtask = {
        id: uuid.v4(),
        name: req.body.name,
        status: 'active'
    }
    if(!newtask.name) {
        return res.status(400).json('Name missing');
    }
    tasks.push(newtask);
    res.json(tasks);
});

//update
router.put('/:id', (req, res) => {
    //res.send(req.params.id);
    const found = tasks.some(task => task.id === parseInt(req.params.id));
    if(found) {
        const updtask = req.body;
        tasks.forEach(task => {
            if(task => task.id === parseInt(req.params.id)) {
                task.name = updtask.name ? updtask.name : task.name;
                res.json({ msg: 'task updated', task});
            }
        });
    }
    else {
        res.status(400).json({msg: `task not found ${req.params.id}`});
    }
});

//delete task
router.delete('/:id', (req, res) => {
    const found = tasks.some(task => task.id === parseInt(req.params.id));
    if(found) {
        res.json({ 
            msg : 'task deleted', 
            tasks: tasks.filter(task => task.id !== parseInt(req.params.id))
    });
    }
    else {
        res.status(400).json({msg: `task not found ${req.params.id}`});
    }
});

module.exports = router;