const express = require("express");
const xmlparser = require('express-xml-bodyparser');

const app = express();
app.use(xmlparser());
const port =  process.env.PORT || 80;

app.use(express.json());


app.post("/cgi-bin/epos/service.cgi", (req, res) => {
    let text;
    const body = req.body["s:envelope"]["s:body"];
    text = body[0]["epos-print"][0].text
    text = text.map(item => item._)
    console.log(text)
    const response = 
    `<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/">
    <s:Header
    <parameter xmlns="http://www.epson-pos.com/schemas/2011/03/epos-print"> <devid>internalIP</devid>
    <timeout>35000</timeout>
    </parameter> </s:Header> <s:Body>
    <response xmlns="http://www.epson-pos.com/schemas/2011/03/epos-print" success="true" code="" status="252641302" battery="0" />
    </s:Body> </s:Envelope>`
    res.send(response)
})


app.listen(port, () => console.log("app listening on port " + port))