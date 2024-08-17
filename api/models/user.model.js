import { timeStamp } from "console";
import mongoose  from "mongoose";

//the file name user.model.js == user.js 
//it just make easy to  understand when we wrok with =many files


//crating  the schema
const userSchema = mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    avatar:{
        type: String,
        default:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqafzhnwwYzuOTjTlaYMeQ7hxQLy_Wq8dnQg&s"
    }
    
}, {timeStamps: true}); // for storing the time of the  new user when it will created

//creating  the  model
const User = mongoose.model('User',userSchema);

export default User; //can  be use anywhere in the Appilcation