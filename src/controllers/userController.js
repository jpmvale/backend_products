const mongoose = require("mongoose");
const user = mongoose.model("User");

module.exports = {
    async createUser(req, res) {
        const { email, password, name, employeePosition } = req.body;
        const response = await user.create({
            email,
            password,
            name,
            employeePosition
        });
        res.json(response);
    },
    async getUsers(req, res) {
        const { page } = req.query;
        const response = await user.paginate({}, { page, limit: 10 });
        res.send(response);
    },
    async authenticateUser(req, res) {
        const { email, password } = req.body;
        const userDB = await user.findOne({ email, password });
        res.json(userDB == null ? "User or Password are wrong" : userDB);
    }
}