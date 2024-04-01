import fornecedorRepositories from "../repositories/fornecedor.repositories.js";
import produtoRepositories from "../repositories/produto.repositories.js";

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
  if (fornecedores.length === 0) throw new Error("Não há fornecedores");
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
  const fornecedor = fornecedorRepositories.findFornecedorById(id);
  if (!fornecedor) throw new Error("O fornecedor não foi encontrado");
  return fornecedor;
}

async function getProdutosByFornecedorService(id) {
  const produtos =
    await fornecedorRepositories.getProdutosByFornecedorRepository(id);
  if (produtos.length === 0) throw new Error("Não há produtos");

  return produtos;
}

async function findFornecedorByNameService(nome) {
  const fornecedores =
    await fornecedorRepositories.findFornecedorByNameRepository(nome);
  if (fornecedores.length === 0) throw new Error("Não há fornecedores");
  return {
    fornecedores: fornecedores.map((fornecedor) => ({
      id: fornecedor._id,
      nome: fornecedor.nome,
      produtos: fornecedor.produtos,
    })),
  };
}

async function deleteFornecedorService(id) {
  const fornecedor = await fornecedorRepositories.findFornecedorById(id);
  if (!fornecedor) throw new Error("não encontrado");
  const response =
    await fornecedorRepositories.getProdutosByFornecedorRepository(id);
  const produtos = response.produtos;
  for (const produto of produtos) {
    await produtoRepositories.deleteProdutoRepository(produto._id.toString());
  }

  await fornecedorRepositories.deleteFornecedorRepository(id);
  return "deletado";
}

export default {
  createFornecedorService,
  findAllFornecedoresService,
  getProdutosByFornecedorService,
  updateFornecedorService,
  getFornecedorByIdService,
  findFornecedorByNameService,
  deleteFornecedorService,
};
