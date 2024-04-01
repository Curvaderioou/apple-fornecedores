import mongoose from "mongoose";

const fornecedorSchema = new mongoose.Schema({
  nome: {
    type: String,
    unique: true,
    required: true,
  },
  produtos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Produto",
    },
  ],
});

const Fornecedor = mongoose.model("Fornecedor", fornecedorSchema);

export default Fornecedor;
