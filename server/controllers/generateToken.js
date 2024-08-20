import jwt from "jsonwebtoken"

function generateToken(user, res) {
    const payload = {
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        profilePic: user.profilePic, // Or whatever else you want to include
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
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
