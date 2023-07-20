const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');//HTTP request level Middleware that logs the requests along with some other information. It proves to be very helpful while debugging and also to create Log files.
const bodyParser = require('body-parser');
const path = require('path');

const connectDb = require("./server/database/connection")

const app = express();

dotenv.config({path:'config.env'});
const PORT = process.env.PORT || 8080

//log requests
app.use(morgan('tiny'));

connectDb();

//parse req to body parser
app.use(bodyParser.urlencoded({extended:true}));

//set view engine
app.set("view engine","ejs")

//load assets
app.use('/css',express.static('assests/css'));
app.use('/js',express.static(path.resolve(__dirname, "assests/js")))

// load routers
app.use('/', require('./server/routes/router'))

app.listen(PORT,()=>console.log(`Server is running on http://localhost:${PORT}`));
