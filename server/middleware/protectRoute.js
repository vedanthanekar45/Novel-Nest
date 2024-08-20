import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

const protectRoute = async (req, res, next) => {
    let token;

    try {
        token = req.cookies.jwt; // Get token from cookie

        if (!token) {
            return res.status(401).json({ error: 'Unauthorized - No Token Provided' });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // req.user = await User.findById(decoded._id).select('-password');
        req.user = decoded;
        console.log(req.user);
        next();
    } catch (error) {
        console.log('Error in protectRoute middleware:', error.message);
        return res.status(401).json({ error: 'Unauthorized - Invalid Token' });
    }
};

export default protectRoute;