import { Router } from "express";
import produtoController from "../controllers/produto.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const produtoRouter = Router();

produtoRouter.use(authMiddleware);
produtoRouter.get("/modelo", produtoController.findModeloController);
produtoRouter.get("/preco", produtoController.findProdutoByPrecoController);
produtoRouter.get("/:id", produtoController.findProdutoByIdController);
produtoRouter.get("/", produtoController.findAllProdutosController);

produtoRouter.delete("/delete/:id", produtoController.deleteProdutoController);
produtoRouter.patch("/update/:id", produtoController.updateProdutoController);
produtoRouter.post("/create", produtoController.createProdutoController);

export default produtoRouter;
