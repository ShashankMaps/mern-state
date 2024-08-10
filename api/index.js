import express from 'express';
//if we want to use this kind of import statement then we need to set "type":"module"  in pkj json file , niether we have to use "require"
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

//DB connection
mongoose.connect(process.env.MONGO).then( ()=>{
    console.log('Connection is Successfull');
}).catch((error) =>{
    console.log(error);
})



//starting the server
const app = express();
app.listen(3000,()=> {
        console.log("Server is running on port 3000 !");
    }
);


