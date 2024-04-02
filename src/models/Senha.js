import mongoose from "mongoose";

const senhaSchema = new mongoose.Schema({
  senha: {
    type: String,
    required: true,
  },
});

const Senha = mongoose.model("Senha", senhaSchema);

export default Senha;
