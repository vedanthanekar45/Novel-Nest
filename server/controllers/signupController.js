import User from "../models/userModel.js"
import bcrypt from "bcrypt"
import generateToken from "./generateToken.js"

// SignUp or Registration function
const signup = async (req, res) => {
    try {

        // Taking User Inputs from the frontend
        const {firstName, lastName, email, userName, password} = req.body;

        // Checking if the username already exists
        const user = await User.findOne({userName});
        if(user) {
            return res.status(400).json({error: "Username already exists"})
        }

        // Encrypting the password using hashing
        const encPassword = await bcrypt.hash(password, 10);

        // Creating user avatar using initials using the ui-avatars API
        const avatarlink = "https://ui-avatars.com/api/?background=random&name="+firstName+"+"+ lastName;

        // Creating a new user
        const newUser = new User({
            firstName,
            lastName,
            userName,
            email,
            password: encPassword,
            profilePic: avatarlink
        })

        // If new user is successfully created then generate tokens and cookie for them
        if (newUser) {
            // Generate JWT Token
            const token = generateToken(newUser, res);

            res.cookie('token', token, {
                httpOnly: true,   // Cannot be accessed by client-side JavaScript
                secure: process.env.NODE_ENV === 'production', // Cookie sent only over HTTPS
                sameSite: 'strict', // Prevent CSRF attacks
                maxAge: 60 * 60 * 1000 // 1 hour
            });

            await newUser.save();
            res.status(201).json({
                _id: newUser._id,
                token: token,
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                userName: newUser.userName,
                profilePic: newUser.profilePic
            })
        } else {
            res.status(400).json({error: "Invalid User Data"})
        }

    } catch (error) {
        console.log("Error in signup controller: ", error.message)
        res.status(500).json({error: "Internal Server Error"})
    }
}

export default signup;