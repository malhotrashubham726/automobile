const connectToMongo = require("./db");
const express = require("express");
var cors = require("cors");

connectToMongo();

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
/*app.get('/' , (req,res) => {
    res.send("Hello Shubham");
})*/

app.use("/api/auth" , require("./routes/auth"));
app.use("/api/book" , require("./routes/details"));

app.listen(port , () => {
    console.log(`Automobile backend listening on port ${port}`);
})