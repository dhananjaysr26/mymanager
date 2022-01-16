import bodyParser from 'body-parser'
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import profileRouter from "./routes/profile.js"

const app = express();

app.use('/profile', profileRouter);

app.use(bodyParser.json({ limit: "10mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }))
app.use(cors());

const CONNECTION_URL = "mongodb+srv://mymanager:Smart%40mymanger@cluster0.huorm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server Running on PORT:${PORT}`)))
    .catch((err) => console.log(err.message))

