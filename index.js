const express = require('express')
const app = express()
const port = 3003;

const mongoose = require('mongoose');
const User = require('./schema');

app.use(express.json());

mongoose.connect("mongodb+srv://bgilliam:ssgs4tgag1SRmXoJ@cluster0.hc0mk.mongodb.net/todoapp")

app.get('/', (req, res) => {
  res.send('Welcome to Backend!')
})

app.post("/login", (req, res) => {
    res.send("Login Success");
})

app.post("/signup", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const newPerson = new User({email: email, password:password});
    await newPerson.save();
    res.send("Signup Success");
})

app.post("/maketodo", (req, res) => {
    res.send("Todo Created");
})

app.post("/deletetodo", (req, res) => {
    res.send("Todo Deleted");
})

app.post("/updatetodo", (req, res) => {
    res.send("Todo Updated");
})

app.listen(port, () => {
    console.log(`Healthy Server`);
})