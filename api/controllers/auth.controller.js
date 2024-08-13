import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';

export const signup = async  (req, res, next)=>{
    // console.log(req.body);
    const {username, email, password} = req.body;

    //hashing the password using the bcrypt
    const hashedPassword = bcryptjs.hashSync(password, 10);  // 10 is the salting number
    //storing the information in the database
    const newUser = new User({username, email, password:hashedPassword});

        try{
            await newUser.save();
            res.status(200).json({
                success:true,
                message:"Data Sotored In DB Successfully",
            });
        }
        catch(error){
            // res.status(500).json({
            //     success:false,
            //     message:error.message,
            // })      //alternate for this thing is below to you,
            next(error); //it will call our try catch middleware,
        }
};