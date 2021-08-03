const { request, response } = require("express")
const express = require("express")
const mongoose = require("mongoose")
const postModel = require("./schema")


const app = express()
const port = 9000

const DB_URI = "mongodb+srv://admin:admin@cluster0.wpjyu.mongodb.net/dev"

mongoose.connect(DB_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

mongoose.connection.on("connected", () => console.log("Database Connected"))
mongoose.connection.on("error", (error) => console.log(`Error: ${error.message}`))


app.get("/add", (request, response) => {
    postModel.create({ title: "first data" }, (error, data) => {
        if (error) {
            response.send(error.message)
        }
        else {
            response.send("Success")
        }
    })
})












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






app.listen(port, () => console.log(`My server is running on port ${port}`))