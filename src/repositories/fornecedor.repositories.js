import Fornecedor from "../models/Fornecedor.js";

const findByNomeFornecedorRepository = (nome) =>
  Fornecedor.findOne({ nome: nome });

const findFornecedorById = (id) => Fornecedor.findById(id);

const createFornecedorRepository = ({ nome }) => Fornecedor.create({ nome });

const findAllFornecedoresRepository = () => Fornecedor.find();

const addProduto = (idFornecedor, idProduto) =>
  Fornecedor.findByIdAndUpdate(
    { _id: idFornecedor },
    { $push: { produtos: idProduto } }
  );

const excludeProduto = (idFornecedor, idProduto) => {
  return Fornecedor.findByIdAndUpdate(
    { _id: idFornecedor },
    { $pull: { produtos: idProduto } },
    { new: true }
  );
};

const updateFornecedorRepository = async (id, nome) => {
  try {
    const updatedFornecedor = await Fornecedor.findByIdAndUpdate(
      { _id: id },
      { nome },
      { new: true }
    );
    if (!updatedFornecedor) throw new Error("Erro ao atualizar");
    return updatedFornecedor;
  } catch (e) {
    throw new Error("Erro ao atualizar " + e.message);
  }
};

const getProdutosByFornecedorRepository = (id) =>
  Fornecedor.findById(id).populate("produtos");

export default {
  createFornecedorRepository,
  findByNomeFornecedorRepository,
  findAllFornecedoresRepository,
  getProdutosByFornecedorRepository,
  findFornecedorById,
  updateFornecedorRepository,
  addProduto,
  excludeProduto,
};
