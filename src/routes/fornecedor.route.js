import { Router } from "express";
import fornecedorController from "../controllers/fornecedor.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const fornecedorRouter = Router();

fornecedorRouter.use(authMiddleware);
fornecedorRouter.get("/:id", fornecedorController.getFornecedorByIdController);
fornecedorRouter.get("/", fornecedorController.findAllFornecedoresController);

fornecedorRouter.post(
  "/create",
  fornecedorController.createFornecedorController
);

fornecedorRouter.patch(
  "/update/:id",
  fornecedorController.updateFornecedorController
);

fornecedorRouter.get(
  `/produtos/:id`,
  fornecedorController.getProdutosByFornecedorController
);

fornecedorRouter.delete(
  "/delete/:id",
  fornecedorController.deleteFornecedorController
);

fornecedorRouter.get(
  "/nome",
  fornecedorController.findFornecedorByNameController
);

export default fornecedorRouter;
