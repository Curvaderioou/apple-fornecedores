import { Router } from "express";
import fornecedorRouter from "./fornecedor.route.js";
import produtoRouter from "./produto.route.js";

const router = Router();

router.use("/fornecedores", fornecedorRouter);
router.use("/produtos", produtoRouter);

export default router;
