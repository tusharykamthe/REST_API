const mongose = require('mongoose')

const connectionString="mongodb+srv://fbsroot:<password>@cluster0.7huwmbe.mongodb.net/test"

mongose.connect(connectionString)
.then(()=>{
    console.log("Connected")
})
.catch(()=>{
    console.log("Error")
})