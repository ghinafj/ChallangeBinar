const express = require('express');
const app = express();

app.use(express.static('public'));

app.get("/", (request, response)=> {
    response.sendFile(__dirname + "/index.html");
});

app.listen(8081,() => {
    console.info("Server running at :" + 8081);
});

