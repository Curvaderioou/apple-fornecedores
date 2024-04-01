import Produto from "../models/produto.js";

const findAllProdutosRepository = () => Produto.find();

const findProdutoByIdRepository = (id) => Produto.findById(id);

const createProdutoRepository = ({ tipo, modelo, cor, preco, fornecedor }) =>
  Produto.create({ tipo, modelo, cor, preco, fornecedor });
const deleteProdutoRepository = (id) => Produto.findByIdAndDelete({ _id: id });

const updateProdutoRepository = (
  { tipo, modelo, cor, preco, fornecedor },
  id
) => {
  try {
    const produtoAtt = Produto.findByIdAndUpdate(
      { _id: id },
      { tipo, modelo, cor, preco, fornecedor },
      { new: true }
    );
    return produtoAtt;
  } catch (e) {
    throw new Error("Erro ao atualizar produto");
  }
};

export default {
  findAllProdutosRepository,
  createProdutoRepository,
  deleteProdutoRepository,
  findProdutoByIdRepository,
  updateProdutoRepository,
};
