const logout = (req, res) => {
    try {
        // To logout, simply set the age of the cookie to zero. If successful, return a message "Logged out successdully".
        res.cookie("jwt", "", {
            maxAge: 0
        });
        res.status(200).json({
            message: "Logged out Successfully"
        });
    } catch (error) {
        console.log("Error in logout controller: ", error.message)
        res.status(500).json({error: "Internal Server Error"})
    }
}

export default logout