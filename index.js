const express = require("express");
const app = express();
const port =  process.env.PORT || 3000;

app.use(express.json());

app.get("/cgi-bin/epos/service.cgi?devid=internalIP&timeout=35000", (req, res) => {
    res.send("Hello World")
})


app.listen(port, () =>
console.log("app listening on port " + port))