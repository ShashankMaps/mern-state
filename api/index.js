import express from 'express';
//if we want to use this kind of import statement then we need to set "type":"module"  in pkj json file , niether we have to use "require"
import mongoose from 'mongoose';
//importing the router
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import dotenv from 'dotenv';
dotenv.config();

//DB connection
mongoose.connect(process.env.MONGO).then( ()=>{
    console.log(' DB Connection is Successfull !');
}).catch((error) =>{
    console.log(error);
})



//starting the server
const app = express();

app.use(express.json()); //for the post resquest from cilent
app.listen(3000,()=> {
        console.log("Server is running on port 3000 !");
    }
);



//creating the api route

app.use("/api/user", userRouter);

//signup route adding for the website
app.use("/api/auth", authRouter);




//middleware for repetative task of try and catch
app.use((err, req, res, next) => {
    const statusCode = err.statusCode ||  500;
    const message = err.message || "Internal Server Error";
    return res.status(statusCode).json({
        success : false,
        statusCode,
        message,
    });
})

