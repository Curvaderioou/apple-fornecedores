import { Router } from "express";
import fornecedorController from "../controllers/fornecedor.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const fornecedorRouter = Router();
fornecedorRouter.get(
  "/nome",
  fornecedorController.findFornecedorByNameController
);
fornecedorRouter.get("/:id", fornecedorController.getFornecedorByIdController);
fornecedorRouter.get("/", fornecedorController.findAllFornecedoresController);

fornecedorRouter.use(authMiddleware);
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

export default fornecedorRouter;
