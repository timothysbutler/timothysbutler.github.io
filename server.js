'use strict';

// NOTE: Don't change the port number
const PORT = 3000;

const express = require("express");
const app = express();

app.use(express.static('public'));

app.use(express.urlencoded({
    extended: true
}));


/**
 * Route handler for GET request to the URL /hello
 
app.get("/about", (req, res)=> {
    res.send("Hi about page");
});*/

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});