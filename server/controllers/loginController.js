import User from "../models/userModel.js"
import bcrypt from "bcrypt"
import generateToken from "./generateToken.js"

export const login = async (req, res) => {
    try {

        // Taking User Inputs from the input fields
        const {userName, password} = req.body;       
        
        // Find the user inside the database
        const user = await User.findOne({userName}); 

        // Decrypt the password using bcrypt and compare them. Whether true or false, will be stored in the isPasswordCorrect variable
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");

        // If user doesn't exist or the password is incorrect, throw error using status code 400
        if (!user || !isPasswordCorrect) {
            return res.status(400).json({error: "Invalid Username or password"});
        }

        /* Token and cookie are generated for the user if login is successfull. This function isn't built-in.
           It is defined in the generateToken.js file in utilities folder */
        const token = generateToken(user);
        res.cookie('jwt', token, {
            maxAge: 5 * 24 * 60 * 60 * 1000, // 5 days
            httpOnly: true,
            sameSite: 'strict',
            secure: process.env.NODE_ENV !== 'development',
        });

        // If login is successful, then this will return a Javascript object containing user details
        res.status(201).json({
            _id: user._id,
            token: token,
            firstName: user.firstName,
            lastName: user.lastName,
            userName: user.userName,
            profilePic: user.profilePic
        })
        
        //  If an error occurs by chance in the above processes by any chance, then catch and throw it.
    } catch (error) {
        console.log("Error in login controller: ", error.message)
        res.status(500).json({error: "Internal Server Error"})
    }
}

export default login
