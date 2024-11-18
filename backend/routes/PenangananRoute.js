import express from "express";
import {
    getIntervensi,
    getIntervensiById,
    createIntervensi,
    updateIntervensi,
    deleteIntervensi
} from "../controllers/PenangananController.js";
import { verifyUser, adminOnly } from "../middleware/AuthUser.js";

const router = express.Router();

router.get("/intervensi", verifyUser, getIntervensi);
router.get("/intervensi/:id", verifyUser, getIntervensiById);
router.post("/intervensi", verifyUser, adminOnly, createIntervensi);
router.patch("/intervensi/:id", verifyUser, adminOnly, updateIntervensi);
router.delete("/intervensi/:id", verifyUser, adminOnly, deleteIntervensi);

export default router;
