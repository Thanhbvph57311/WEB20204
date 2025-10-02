import { Router } from "express";
import { getAllUser } from "../controllers/user.controller.js";
import { validateRequest } from "../middleware/validateRequest.js";

const router = Router();

router.get("/", getAllUser);

export default router;
