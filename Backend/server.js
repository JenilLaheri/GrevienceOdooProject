require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const db = require('./db/db');
const addfile = require('./routes/addfile');

const User = require('./model/userSchema');
const Complain = require('./model/complain');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.get('/l', (req, res) => {
    res.send("Hello")
    console.log("Hello")
})

app.post('/api/register', async (req, res) => {
    const { firstname, lastname, email, password } = req.body;

    console.log(firstname);
    console.log(lastname);
    console.log(email);
    console.log(password);

    // Basic validation
    if (!firstname || !lastname || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        const newUser = new User({ username: firstname + " " + lastname, email, password });
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error registering user', error });
    }
});

app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;

    const data = User.find({}).then((d) => {
        // res.send("success", d)
        console.log(d)
        // res.status(200).send(d)
        // if (d[0].email === email && d[0].password === password) {
        //     console.log("success")
        // }
        // else {
        //     console.log("fail")
        // }
    });




});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
