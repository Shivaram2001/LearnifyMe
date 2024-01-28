const registerUser = async (req, res, next) => {
    res.status(201).send({
        success: true,
        message: "User register successfully"
    })
}


module.exports = { registerUser };