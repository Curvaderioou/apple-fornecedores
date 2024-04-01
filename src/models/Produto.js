import mongoose from "mongoose";

const produtoSchema = new mongoose.Schema({
  tipo: {
    type: String,
    required: true,
  },
  modelo: {
    type: String,
    required: true,
  },
  cor: {
    type: String,
  },
  preco: {
    type: Number,
    required: true,
  },
  fornecedor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Fornecedor",
  },
});

const Produto = mongoose.model("Produto", produtoSchema);

export default Produto;
