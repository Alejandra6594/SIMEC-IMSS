import { Router } from "express";
import {
  getConsultas,
  addConsultas,
  deleteConsult,
} from "../controllers/consultas.controller.js";
const router = Router();

router.get("/consultas", getConsultas);
// router.get("/consulta/:id");
router.post("/consultas", addConsultas);
// router.put("/consulta/:id");
router.delete("/consulta/:id", deleteConsult);
// router.get("/consulta/count/:id");
export default router;
