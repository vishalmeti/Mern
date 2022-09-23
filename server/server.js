// const express = require('express');
import express from "express"
import mongoose from 'mongoose';
import cors from 'cors';
const app = express()
const port = 4000;

//db connection

await mongoose.connect('mongodb+srv://admin:admin123@mern-first.upa3ecf.mongodb.net/?retryWrites=true&w=majority').then(() => console.log('MongoDB connected')).catch((e) => {
    console.log("MongoDB not connected :" + e)
})

//enable cors in server
// app. use(cors(corsOptions));
app.use(cors)

app.get('/', (req, res) => {
    res.send('Hello')
})

app.listen(port, (req, res) => {
    console.log(`Server runing on ${port}`)
});
