const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const app = express();
const dotenv = require('dotenv');
const bodyParser = require("body-parser");
const passport = require("passport");
const connectDb = require("./database/connection");
const authUser = require("./database/userAuthentication");
const loginRoutes = require("./routes/login");
const trackRoutes = require("./routes/track");
const cartRoutes = require("./routes/cart");
const indexRoutes = require("./routes/index");
const path = require('path');
// parser and serving static files
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("./public"));

dotenv.config({path:'config.env'});
// connect to DB
connectDb();

// authentication
app.use(passport.initialize());
app.use(passport.session());
authUser(passport);

// js template
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(expressLayouts);

// routes
app.use(loginRoutes);
app.use(trackRoutes);
app.use(cartRoutes);
app.use(indexRoutes);

app.listen(4003);