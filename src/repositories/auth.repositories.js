import User from "../models/User.js";

const loginRepository = (email) =>
  User.findOne({ email: email }).select("+senha");

export default { loginRepository };
