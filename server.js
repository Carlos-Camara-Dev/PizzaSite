require('dotenv').config();
const cors = require('cors')
require('./model')
const express = require('express');
const app = express();
const router = require('./routes/routes');
const url = '3333';
const cookieParser = require('cookie-parser')

app.use(cors())
app.use(cookieParser())
app.use(express.json());
app.use(router);

app.listen(url, ()=>{
    console.log(`Runnig at port ${url}`)
});