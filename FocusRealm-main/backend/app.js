const express=require("express")
const app=express()
const errorMiddleware = require("./middleware/error");
const cookieParser=require("cookie-parser")
const bodyParser=require("body-parser")
const dotenv=require("dotenv")
const path=require("path");
var cors = require('cors');

dotenv.config({path:"backend/config/config.env"})
const router=express.Router()


app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended:true}))



var  corsOptions  = {
     origin: process.env.FRONTEND_URL, //frontend url
    credentials: true}

app.use(cors(corsOptions));


//Route imports
const user=require("./routes/userRoute");


app.use("/api/v1",user)



// middleware for errors 
app.use(errorMiddleware);

module.exports=app

