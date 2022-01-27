import bodyParser from 'body-parser'
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
// const dotenv = require('dotenv');

import profileRouter from "./routes/profile.js";
const app = express();

app.use(bodyParser.json({ limit: "10mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }))
app.use(cors({
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200,
}));

// Database
const PORT = process.env.PORT || 5000;
const DB = 'mongodb+srv://mymanager:Smart%40mymanger@cluster0.huorm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority' || process.env.DB_URL;
mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server Running on PORT:${PORT}`)))
    .catch((err) => console.log(err.message))

app.use(express.static('public'))
app.use(profileRouter);





