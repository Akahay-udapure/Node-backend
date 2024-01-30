const User = require("../models/users");

exports.createUser = async (req, res) => {
    try {
        let user = await new User(req.body).save();
        res.json({ status: 200, message: "Registred Success!", data: user });
    } catch (error) {
        console.log(error);
        if (error.code == 11000)
            res.json({
                status: 400,
                message: "User Already Exits!",
                error: error,
            });
        else res.json({ status: 400, message: "Error!", error: error });
    }
};

exports.loginUser = async (req, res) => {
    try {
        let email = req.body.email;
        let password = req.body.password;
        let user = await User.findOne({ email: email });
        if (user.password === password)
            res.json({ status: 200, message: "Login Success!", data: user });
        else
            res.json({ status: 400, message: "Incorrect Password!", data: {} });
    } catch (error) {
        res.json({
            status: 400,
            message: "User does not exist!",
            error: error,
        });
    }
};
