const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
console.log(path.join(__dirname));
const env = require("./config/environment");;


// Middlewares
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)
var corsOptions = {
    origin: "*"
};
app.use(cors(corsOptions));

const PORT = env.port;

const node_env = process.env.NODE_ENV;


// Connect to server
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT} in ${node_env} environment`);
})