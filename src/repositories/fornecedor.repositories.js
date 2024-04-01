import Fornecedor from "../models/Fornecedor.js";

function findByNomeFornecedorRepository(nome) {
  const fornecedor = Fornecedor.findOne({ nome: nome });
  return fornecedor;
}

function findFornecedorById(id) {
  const fornecedor = Fornecedor.findById(id);
  return fornecedor;
}

function createFornecedorRepository({ nome }) {
  const fornecedor = Fornecedor.create({ nome });
  return fornecedor;
}

function findAllFornecedoresRepository() {
  const fornecedores = Fornecedor.find();
  return fornecedores;
}

function addProduto(idFornecedor, idProduto) {
  const fornecedor = Fornecedor.findByIdAndUpdate(
    { _id: idFornecedor },
    { $push: { produtos: idProduto } }
  );
  return fornecedor;
}

function excludeProduto(idFornecedor, idProduto) {
  return Fornecedor.findByIdAndUpdate(
    { _id: idFornecedor },
    { $pull: { produtos: idProduto } },
    { new: true }
  );
}

async function updateFornecedorRepository(id, nome) {
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
}

function getProdutosByFornecedorRepository(id) {
  const fornecedor = Fornecedor.findById(id).populate("produtos");
  return fornecedor;
}

function findFornecedorByNameRepository(nome) {
  return Fornecedor.find({
    nome: { $regex: `${nome || ""}`, $options: "i" },
  }).sort({ _id: -1 });
}

function deleteFornecedorRepository(id) {
  return Fornecedor.findByIdAndDelete(id);
}

export default {
  createFornecedorRepository,
  findByNomeFornecedorRepository,
  findAllFornecedoresRepository,
  getProdutosByFornecedorRepository,
  findFornecedorById,
  updateFornecedorRepository,
  addProduto,
  excludeProduto,
  findFornecedorByNameRepository,
  deleteFornecedorRepository,
};
