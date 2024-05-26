const express = require("express");
const router = express.Router();
const { Task } = require("../models/Task.js");
const { error } = require("console");


router.post("/create", async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).send(task);



    } catch (error) {
        console.error(error);
        res
            .status(500)
            .send({ message: "There was a problem trying to create a user" });
    }
});


router.get('/', async (req, res) => {
    try {
        const tasksAll = await Task.find({});
        res.status(200).json(tasksAll);
    } catch (error) {
        res.status(500).send({ message: "Base data not linked" })
    }

});


router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const taskID = await Task.findById(id);
        res.status(200).json(taskID);
    } catch (error) {
        res.status(500).send({ message: "Task not found as ID does not exist" })
    }

});

router.put('/markAsCompleted/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const taskIDUpdate = await Task.findByIdAndUpdate(id, req.body);

        if (!taskIDUpdate) {
            return res.status(404).json({ message: `Cannot find ${id} suggested` })
        } else
            res.status(200).json(taskIDUpdate);

    } catch (error) {
        res.status(500).send({ message: "error lectura" })
    }

});


router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        console.log(id);

        const deletetask = await Task.findOneAndDelete({ _id: id });

        if (deletetask) {

            res.send('Task eliminated ')

        } else

            res.send('ID not found')
        // if (deletetask === 1) {
        //     res.status(200).json({ 'mensage:Id matches and task has been deleted'})
        // } else {
        //     res.status(500).json({ 'mensage:Id does not matche and no task has  been deleted'})

        // }

    } catch (error) {
        res.status(500).send({ message: "error lectura" })
    }

});





module.exports = router;