import { timeStamp } from "console";
import { MongoAPIError } from "mongodb";
import mongoose  from "mongoose";

//the file name user.model.js == user.js 
//it just make easy to  understand when we wrok with =many files


//crating  the schema
const userSchema = mongoose.Schema({
    username:{
        type:Stirng,
        required:true,
        unique:true,
    },
    email:{
        type:Stirng,
        required:true,
        unique:true,
    },
    password:{
        type:Stirng,
        required:true,
    },
    
    
}, {timeStamps: true}); // for storing the time of the  new user when it will created

//creating  the  model
const User = mongoose.model('User,userSchema');

export default User; //can  be use anywhere in the Appilcation