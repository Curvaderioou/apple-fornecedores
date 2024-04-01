import fornecedorRepositories from "../repositories/fornecedor.repositories.js";
import produtoRepositories from "../repositories/produto.repositories.js";
async function createProdutoService({ tipo, modelo, cor, preco, fornecedor }) {
  if (!tipo || !modelo || !preco || !fornecedor) {
    throw new Error("Preencha todos os campos obrigatórios");
  }
  const produto = await produtoRepositories.createProdutoRepository({
    tipo,
    modelo,
    cor,
    preco,
    fornecedor,
  });

  if (!produto) throw new Error("Erro ao criar Produto");
  const fornecedorObj = await fornecedorRepositories.findFornecedorById(
    fornecedor
  );
  if (!fornecedorObj) throw new Error("Fornecedor não existe");

  await fornecedorRepositories.addProduto(fornecedor, produto._id);
  return produto;
}

async function findAllProdutosService() {
  const produtos = await produtoRepositories.findAllProdutosRepository();
  if (produtos.length === 0) throw new Error("não há produtos");
  return produtos;
}

async function findProdutoByIdService(id) {
  const produto = await produtoRepositories.findProdutoByIdRepository(id);
  if (!produto) throw new Error("O produto não foi encontrado");
  return produto;
}

async function deleteProdutoService(id) {
  const produto = await produtoRepositories.findProdutoByIdRepository(id);
  if (!produto) throw new Error("produto não encontrado");
  await fornecedorRepositories.excludeProduto(produto.fornecedor, id);

  await produtoRepositories.deleteProdutoRepository(id);
}

async function updateProdutoService(
  { tipo, modelo, cor, preco, fornecedor },
  id
) {
  if (!tipo && !modelo && !cor && !preco && !fornecedor)
    throw new Error("Nada a ser atualizado");

  const produto = await produtoRepositories.findProdutoByIdRepository(id);
  if (!produto) throw new Error("O produto não foi encontrado");

  const produtoAtt = await produtoRepositories.updateProdutoRepository(
    { tipo, modelo, cor, preco, fornecedor },
    id
  );
  return produtoAtt;
}

export default {
  createProdutoService,
  findAllProdutosService,
  deleteProdutoService,
  findProdutoByIdService,
  updateProdutoService,
};
