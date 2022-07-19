const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
var corsOptions = {
    origin: "https://frontend-exela.herokuapp.com/"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
db.sequelize.sync()
    .then(() => {
        console.log("Synced db.");
    })
    .catch((err) => {
        console.log("Failed to sync db: " + err.message);
    });
// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.");
// });
//test route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to EXELA Hackathom" })
});

require("./app/routes/bill.routes")(app);


//set Port

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}.`);
});



