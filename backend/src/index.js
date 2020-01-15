const express = require('express');
const mongoose = require('mongoose');

const app = express();

const url_bd = '';

mongoose.connect(url_bd, {useNewUrlParser: true, useUnifiedTopology: true});

app.use(express.json());

app.get('/', (req, res) => {res.status(200).json({message: "oi"}) });

app.listen(3333);