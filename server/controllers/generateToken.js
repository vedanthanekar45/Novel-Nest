import jwt from "jsonwebtoken"

function generateToken(user, res) {
    const token = jwt.sign({username: user.username}, process.env.JWT_SECRET, {
        expiresIn: '10d'
    })

    res.cookie("jwt", token, {
        jwt: token,
        maxAge: 5 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "strict",
    });

    return token
}

export default generateToken;
