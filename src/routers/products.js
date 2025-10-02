import {
  getAllProducts,
  getById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/products.controller.js";
import { Router } from "express";

const router = Router();

router.get("/", getAllProducts);
router.get("/detail/:id", getById);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
