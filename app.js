const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const homeRoutes = require("./routes/home");
// const Appointment = require('./models/Appointment');
const sequelize = require("./utils/database");
const app = express();
app.set("view engine", "ejs");
app.set("views", "views");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "../", "public")));
app.use(homeRoutes);

sequelize.sync();
app.listen(7000);
