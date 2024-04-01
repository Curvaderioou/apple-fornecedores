import { Router } from "express";
import produtoController from "../controllers/produto.controller.js";

const produtoRouter = Router();
produtoRouter.get("/", produtoController.findAllProdutosController);
produtoRouter.get("/:id", produtoController.findProdutoByIdController);

produtoRouter.post("/create", produtoController.createProdutoController);
produtoRouter.delete("/delete/:id", produtoController.deleteProdutoController);
produtoRouter.patch("/update/:id", produtoController.updateProdutoController);

export default produtoRouter;
