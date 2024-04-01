import fornecedorRepositories from "../repositories/fornecedor.repositories.js";

async function createFornecedorService({ nome }) {
  if (!nome) {
    throw new Error("Preencha o Nome");
  }
  const foundFornecedor =
    await fornecedorRepositories.findByNomeFornecedorRepository(nome);
  if (foundFornecedor) throw new Error("Fornecedor já existe");

  const fornecedor = await fornecedorRepositories.createFornecedorRepository({
    nome,
  });

  if (!fornecedor) throw new Error("Erro ao criar fornecedor");
  return fornecedor;
}

async function findAllFornecedoresService() {
  const fornecedores =
    await fornecedorRepositories.findAllFornecedoresRepository();
  if (fornecedores.lenght === 0) throw new Error("Não há fornecedores");
  return fornecedores;
}

async function updateFornecedorService(id, { nome }) {
  if (!nome) throw new Error("Não há nada para ser alterado");
  const fornecedor = await fornecedorRepositories.findFornecedorById(id);
  if (!fornecedor) throw new Error("Fornecedor não existe");

  await fornecedorRepositories.updateFornecedorRepository(id, nome);
  const newFornecedor = await fornecedorRepositories.findFornecedorById(id);
  return newFornecedor;
}

async function getFornecedorByIdService(id) {
  const fornecedor = await fornecedorRepositories.findFornecedorById(id);
  if (!fornecedor) throw new Error("O fornecedor não foi encontrado");
  return fornecedor;
}

async function getProdutosByFornecedorService(id) {
  const produtos =
    await fornecedorRepositories.getProdutosByFornecedorRepository(id);
  if (produtos.length === 0) throw new Error("Não há produtos");

  return produtos;
}

export default {
  createFornecedorService,
  findAllFornecedoresService,
  getProdutosByFornecedorService,
  updateFornecedorService,
  getFornecedorByIdService,
};
