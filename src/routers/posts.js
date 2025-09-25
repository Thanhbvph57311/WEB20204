import { Router } from "express";
import { getAllPosts, getById, createPost, updatePost, deletePost } from "../controllers/posts.controller";

const router = Router();

router.get("/", getAllPosts);
router.get("/:id", getById);
router.post("/", createPost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);

export default router;