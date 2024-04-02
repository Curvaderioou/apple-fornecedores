import { Router } from "express";
import fornecedorRouter from "./fornecedor.route.js";
import produtoRouter from "./produto.route.js";
import userRouter from "./user.route.js";
import authRouter from "./auth.route.js";

const router = Router();

router.use("/fornecedores", fornecedorRouter);
router.use("/produtos", produtoRouter);
router.use("/user", userRouter);
router.use("/auth", authRouter);

export default router;
