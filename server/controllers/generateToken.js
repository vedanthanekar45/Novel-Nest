import jwt from "jsonwebtoken"

function generateToken(user) {
    return jwt.sign({
        id: user.id,
        username: user.userName,
    }, process.env.JWT_SECRET, {
        expiresIn: '5d'
    });
}

export default generateToken;
