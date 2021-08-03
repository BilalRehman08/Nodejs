const { request, response } = require("express")
const express = require("express")
const mongoose = require("mongoose")

const DB_URI = "mongodb+srv://admin:admin@cluster0.wpjyu.mongodb.net/dev"

mongoose.connect(DB_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

// mongoose.connection.on("connected", console.log("Connected"))
// mongoose.connection.on("error", (error) => console.log(`Error: ${error.message}`))



const app = express()
const port = 9000

// Middleware
app.use("/contact", (request, response, next) => {
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

app.get("/contact", (request, response) => {
    response.send("Contact Page")
})



app.listen(port, console.log(`My server is running on port ${port}`))