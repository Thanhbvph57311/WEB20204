import { Router } from "express";
import {
  getAllCategories,
  getById,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../controllers/categories.controller";

const router = Router();

router.get("/", getAllCategories);
router.get("/:id", getById);
router.post("/", createCategory);
router.put("/:id", updateCategory);
router.delete("/:id", deleteCategory);

export default router;
