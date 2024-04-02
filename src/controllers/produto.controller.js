import produtoService from "../services/produto.service.js";

async function createProdutoController(req, res) {
  const { tipo, modelo, cor, preco, fornecedor } = req.body;
  try {
    const produto = await produtoService.createProdutoService({
      tipo,
      modelo,
      cor,
      preco,
      fornecedor,
    });
    res.status(201).send({ produto: produto });
  } catch (e) {
    return res.status(400).send(e.message);
  }
}

async function findAllProdutosController(req, res) {
  try {
    const produtos = await produtoService.findAllProdutosService();
    return res.send(produtos);
  } catch (e) {
    return res.status(400).send(e.message);
  }
}

async function findProdutoByIdController(req, res) {
  const id = req.params.id;
  try {
    const produto = await produtoService.findProdutoByIdService(id);
    return res.send(produto);
  } catch (e) {
    return res.status(400).send(e.message);
  }
}

async function deleteProdutoController(req, res) {
  const id = req.params.id;
  try {
    await produtoService.deleteProdutoService(id);
    return res.send({ message: "Produto deletado com sucesso" });
  } catch (e) {
    return res.send(e.message);
  }
}

async function updateProdutoController(req, res) {
  const id = req.params.id;
  const { tipo, modelo, cor, preco, fornecedor } = req.body;
  try {
    const produto = await produtoService.findProdutoByIdService(id);
    if (!produto) throw new Error("produto não encontrado");
    const produtoAtt = await produtoService.updateProdutoService(
      { tipo, modelo, cor, preco, fornecedor },
      id
    );
    return res.send(produtoAtt);
  } catch (e) {
    return res.status(400).send(e.message);
  }
}

async function findModeloController(req, res) {
  const { modelo } = req.query;
  try {
    const modelos = await produtoService.findModeloService(modelo);
    return res.send(modelos);
  } catch (e) {
    return res.status(400).send(e.message);
  }
}

async function findProdutoByPrecoController(req, res) {
  try {
    const produtos = await produtoService.findProtoByPrecoService();
    return res.send(produtos);
  } catch (error) {
    return res.status(400).send(error.message);
  }
}

export default {
  createProdutoController,
  findAllProdutosController,
  deleteProdutoController,
  findProdutoByIdController,
  updateProdutoController,
  findModeloController,
  findProdutoByPrecoController,
};
