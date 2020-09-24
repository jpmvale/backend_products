const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const UserSchema = mongoose.Schema({
    email: String,
    password: String,
    name: String,
    employeePosition: String,
}, { timestamps: true });


UserSchema.plugin(mongoosePaginate)
mongoose.model("User", UserSchema);