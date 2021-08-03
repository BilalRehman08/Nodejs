const { request, response } = require("express")
const express = require("express")
const app = express()
const port = 9000

// Middleware
app.use("/user", (request, response, next) => {
    const abc = true;
    if (abc) {
        next()
    }
    else {
        response.send("UNauthorized")
    }
})


// Simple get
app.get("/user", (request, response) => {
    response.send("Home Page")
})



app.listen(port, console.log(`My server is running on port ${port}`))