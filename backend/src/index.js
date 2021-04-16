const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const mongoose = require('mongoose');
const Appointment = require("./models/Appointment");
const router = require('./routes');
const app = express();
app.use(router);



app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
mongoose.connect("mongodb+srv://gustavoborges:2306@cluster0.l3a8r.mongodb.net/db_secretary?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true});



app.use("/api", router)
app.listen(8080);
console.log("Iniciando a aplicação na porta 8080...");


