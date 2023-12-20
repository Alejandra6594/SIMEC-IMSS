import { Router } from "express";
import {
  getUnits,
  addUnit,
  deleteUnit,
} from "../controllers/unidades.controller.js";
const router = Router();

router.get("/unidades", getUnits);
router.post("/unidades", addUnit);
router.delete("/unidades/:id", deleteUnit);
export default router;
