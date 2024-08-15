import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandaler } from "../utils/error.js";
import jwt from "jsonwebtoken";

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


//##############################
//sign in controller
export const signin =async (req, res, next) => {
    const {email, password} = req.body;

    try{

        //check the valid email is exist iin db
        const validUser = await User.findOne({ email });
        
        if(!validUser){
            return next(errorHandaler(404,'User Not found '));
        }
        //hash the provided password
        const validPassword = bcryptjs.compareSync(password, validUser.password);
        //if password is not correct
        if(!validPassword){
            return next(errorHandaler(401,'Wrong Credentials !'));
        }

        //if everything is ok then we  create JWT
        const token = jwt.sign({id: validUser._id}, process.env.JWT_SECRET)
        //destructuring the password that we are sending
        const {password: pass, ...rest} = validUser._doc;
        //now we save this  JWT in cookies
        res.cookie('access_token', token, {
            httpOnly: true,
            expires: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000) // 2 days from now
          })
          .status(200)
          .json(rest);       
    }

    catch(error){
        next(error); // calling the middelware
    }
}