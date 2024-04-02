import User from "../models/User.js";

const loginRepository = (nome) => User.findOne({ nome: nome }).select("+senha");

export default { loginRepository };
