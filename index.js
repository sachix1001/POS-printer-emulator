const express = require("express");
const app = express();
const port =  process.env.PORT || 3000;

app.use(express.json());

app.get("/address", (req, res) => {
    res.send("Hello Sachi")
})


app.listen(port, () =>
console.log("app listening on port " + port))