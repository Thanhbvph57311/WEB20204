import { Router } from "express";

import productsRouter from "././products.js";
import userRouter from "./user.js";
import postsRouter from "./posts.js";
import categoriesRouter from "./categories.router.js";

const router = Router();

router.use("/products", productsRouter);
router.use("/user", userRouter);
router.use("/posts", postsRouter);
router.use("/categories", categoriesRouter);

export default router;
