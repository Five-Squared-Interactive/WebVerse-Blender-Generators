const express = require("express");
const bodyParser = require("body-parser");

module.exports = function(port) {
    let app = express();
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    app.get("/generatemodel", async function(req, res) {

    });

    let server = app.listen(port);
}