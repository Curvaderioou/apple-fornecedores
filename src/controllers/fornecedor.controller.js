import fornecedorService from "../services/fornecedor.service.js";

async function createFornecedorController(req, res) {
  const { nome } = req.body;

  try {
    const fornecedor = await fornecedorService.createFornecedorService({
      nome,
    });
    res.status(201).send({ fornecedor: fornecedor });
  } catch (e) {
    return res.status(400).send(e.message);
  }
}

async function findAllFornecedoresController(req, res) {
  try {
    const fornecedores = await fornecedorService.findAllFornecedoresService();
    return res.send(fornecedores);
  } catch (e) {
    return res.status(404).send(e.message);
  }
}

async function updateFornecedorController(req, res) {
  const id = req.params.id;
  const { nome } = req.body;
  try {
    const fornecedor = await fornecedorService.updateFornecedorService(id, {
      nome,
    });
    return res.send(fornecedor);
  } catch (e) {
    return res.status(400).send(e.message);
  }
}

async function getFornecedorByIdController(req, res) {
  const id = req.params.id;
  try {
    const fornecedor = await fornecedorService.getFornecedorByIdService(id);
    return res.send(fornecedor);
  } catch (error) {
    return res.status(400).send(error.message);
  }
}

async function getProdutosByFornecedorController(req, res) {
  const id = req.params.id;
  try {
    const produtos = await fornecedorService.getProdutosByFornecedorService(id);
    return res.send(produtos);
  } catch (e) {
    return res.status(400).send(e.message);
  }
}

async function findFornecedorByNameController(req, res) {
  const { nome } = req.query;
  try {
    const fornecedores = await fornecedorService.findFornecedorByNameService(
      nome
    );
    return res.send(fornecedores);
  } catch (e) {
    return res.status(400).send(e.message);
  }
}

async function deleteFornecedorController(req, res) {
  const id = req.params.id;
  try {
    await fornecedorService.deleteFornecedorService(id);
    return res.status(200).send("Deletado com sucesso");
  } catch (e) {
    return res.status(400).send(e.message);
  }
}

export default {
  createFornecedorController,
  findAllFornecedoresController,
  getProdutosByFornecedorController,
  updateFornecedorController,
  getFornecedorByIdController,
  findFornecedorByNameController,
  deleteFornecedorController,
};
