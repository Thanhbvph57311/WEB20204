import { Router } from "express";
import { getAllProducts, getById } from "../controllers/products.controller";

const router = Router();

router.get("/", getAllProducts);
router.get("/detail/:id", getById);

export default router;