import { Router } from "express";
import fornecedorController from "../controllers/fornecedor.controller.js";

const fornecedorRouter = Router();
fornecedorRouter.get("/", fornecedorController.findAllFornecedoresController);

fornecedorRouter.post(
  "/create",
  fornecedorController.createFornecedorController
);

fornecedorRouter.patch(
  "/update/:id",
  fornecedorController.updateFornecedorController
);

fornecedorRouter.get("/:id", fornecedorController.getFornecedorByIdController);

fornecedorRouter.get(
  `/produtos/:id`,
  fornecedorController.getProdutosByFornecedorController
);

fornecedorRouter.get(
  "/nome/:nome",
  fornecedorController.findFornecedorByNameController
);

fornecedorRouter.delete(
  "/delete/:id",
  fornecedorController.deleteFornecedorController
);

export default fornecedorRouter;
