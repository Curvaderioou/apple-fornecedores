import { Router } from "express";
import produtoController from "../controllers/produto.controller.js";

const produtoRouter = Router();

produtoRouter.delete("/delete/:id", produtoController.deleteProdutoController);
produtoRouter.patch("/update/:id", produtoController.updateProdutoController);
produtoRouter.post("/create", produtoController.createProdutoController);
produtoRouter.get("/modelo", produtoController.findModeloController);
produtoRouter.get("/preco", produtoController.findProdutoByPrecoController);
produtoRouter.get("/:id", produtoController.findProdutoByIdController);
produtoRouter.get("/", produtoController.findAllProdutosController);

export default produtoRouter;
