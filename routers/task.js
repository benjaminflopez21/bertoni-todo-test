const express = require('express');
const crypto = require("crypto");
const router = express.Router();

const db = require('../database');

router.get('/all', (req, res) => {
    res.json({
        tasks: db.tasks,
    });
});

router.post('/create', (req, res) => {
    const task = req.body.task;
    if (task.id) {
        for (var i = 0; i < db.tasks.length; i++) {
            if (db.tasks[i].id === task.id) {
                db.tasks[i] = task;
                db.tasks[i].updatedOn = new Date();
                break;
            }
        }
    } else {
        db.tasks.unshift({
            id: crypto.randomBytes(16).toString("hex"),
            name: task.name,
            completed: task.completed,
            createdOn: new Date(),
            updatedOn: new Date(),
        });
    }
    db.save();
    res.json({
        tasks: db.tasks,
    });
});

router.post('/delete', (req, res) => {
    const taskId = req.body.id;
    for (var i = 0; i < db.tasks.length; i++) {
        if (db.tasks[i].id === taskId) {
            db.tasks.splice(i, 1);
            break;
        }
    }
    db.save();
    res.json({
        tasks: db.tasks,
    });
});


router.post('/deletemulti', (req, res) => {
    const tasks = req.body.tasks;
    for (var i = 0; i < db.tasks.length; i++) {
        for (var j = 0; j < tasks.length; j++) {
            if (db.tasks[i].id === tasks[j].id) {
                db.tasks.splice(i, 1);
            }
        }
    }
    db.save();
    res.json({
        tasks: db.tasks,
    });
});

router.post('/completemulti', (req, res) => {
    const tasks = req.body.tasks;

    for (var i = 0; i < db.tasks.length; i++) {
        for (var j = 0; j < tasks.length; j++) {
            if (db.tasks[i].id === tasks[j].id) {
                db.tasks[i] = {
                    ...tasks[j],
                    completed: true,
                    updatedOn: new Date(),
                }
            }
        }
    }
    db.save();
    res.json({
        tasks: db.tasks,
    });
});

router.post('/uncompletemulti', (req, res) => {
    const tasks = req.body.tasks;

    for (var i = 0; i < db.tasks.length; i++) {
        for (var j = 0; j < tasks.length; j++) {
            if (db.tasks[i].id === tasks[j].id) {
                db.tasks[i] = {
                    ...tasks[j],
                    completed: false,
                    updatedOn: new Date(),
                }
            }
        }
    }
    db.save();
    res.json({
        tasks: db.tasks,
    });
});


module.exports = router;
