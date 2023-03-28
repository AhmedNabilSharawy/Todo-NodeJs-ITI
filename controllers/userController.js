const User = require("../models/userModel");
const {router} = require("express/lib/application");

exports.getUsers = async (req, res) => {
    try {
        const allUsers = await User.find();
        res.status(200).json({
            status: "Success",
            data: allUsers
        })
    } catch (err) {
        res.status(500).json({
            status: "Error",
            message: err.message
        })
    }
}
