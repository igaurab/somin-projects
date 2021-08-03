const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")

app = express()
app.use(cors())
app.use(bodyParser.json())

PORT = 8000
base_url = `http://localhost:${PORT}`

app.get("/check",(req,res,next)=>{
    res.send("<h1>Server is running..<h1>")
})

app.get("/data/:location",(req,res,next)=>{
    var location = req.params.location
    location = location.toLowerCase()
    res.json(db[location])
    
})

app.post("/data/create",(req,res,next)=>{
    /**
     {
         "location": "kavre",
         "author": "somin",
         "help": "food",
         "message": "Give me a burger."
     }
     */
    data = req.body
    location = data["location"]

    new_data = {
        "author" : data["author"], 
        "help" : data["help"], 
        "message" : data["message"], 
    }

    if (db.hasOwnProperty(location)) {
        db[location].push(new_data)
    }
    else {
        db[location] = []
        db[location].push(new_data)
    }

    res.json(db)
})

app.listen(8000,()=>{
    console.log(`Server is starting at ${base_url}`);
})



// Database
db = {
    "kapan": [
        {"author": "gaurab", "help": "food", "message": "I am hungry feed me!"},
        {"author": "somin", "help": "shelter", "message": "I need a place to stay!"},
        {"author": "subhani", "help": "transport", "message": "I want to go to Butwal!"},
        {"author": "kamal", "help": "food", "food": "I need drinking water"},
        {"author": "bimal", "help": "financial", "message": "I need financial support for hospital bills!"},
    ],
    "baneshwor": [
        {"author": "gaurab", "help": "food", "message": "I am hungry feed me!"},
        {"author": "somin", "help": "shelter", "message": "I need a place to stay!"},
        {"author": "subhani", "help": "transport", "message": "I want to go to Butwal!"},
        {"author": "kamal", "help": "food", "food": "I need drinking water"},
        {"author": "bimal", "help": "financial", "message": "I need financial support for hospital bills!"},
    ]
}