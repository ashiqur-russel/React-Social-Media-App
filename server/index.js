// Creating express server
const express = require("express")
const app = express();
const port = process.env.PORT || 8080;                  // port initialized
const mongoose = require("mongoose")                    // mongdb-> mongoose required
const dotenv = require("dotenv")                        // for securing credentials(API keys,pass) by hiding somewhere in safe
const helmet = require("helmet")                        // secure HTTP headers to prevent attacks --> give extra security adding some properties
const morgan = require("morgan")                        // request logging middleware-> Eg. show status
const userRoute = require("./routes/users")             // call user route from route
const authRoute = require("./routes/auth")             // call user route from route


dotenv.config();

//Mongodb clister connection
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true }, () => {
    console.log("connected to mongodb");
})


//Middleware
app.use(express.json())                                 // body parser
app.use(helmet())
app.use(morgan("common"))


//Routes
app.use("/api/users", userRoute)
app.use("/api/auth", authRoute)



//Listening port
app.listen(port, () => console.log("Server is running"))