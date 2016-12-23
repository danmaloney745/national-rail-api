/*========================== Requires ====================*/

const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/routes");
const searchRoutes = require("./routes/search");
const app = express();

/*========================== Middleware ====================*/
//view options
app.set('view engine', 'ejs');

//Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));


//Routes 
app.use(routes);
app.use(searchRoutes);

/*==========================Port Info ====================*/
app.listen(process.env.PORT || 3000, () => {
    console.log(`Server listening on port 3000 ${process.env.PORT || 3000}`);
});