import express from "express";
import cors from "cors";
import consultasRoutes from "./routes/consultas.js";
// import assignedLocationsRoutes from "./routes/assignedLocations.js";
import unitsRoutes from "./routes/unidades.js";
const app = express();

//?midleddware para leer json y mandarlos en el body
app.use(express.json());
//? midleddware para permitir el uso de cors en estos dominios
const whiteList = ["http://localhost:5000", "http://127.0.0.1:5173", "*"];
app.use(cors({ origin: "*" }));
//* midleddware para el uso de endpoints de nuestra api
app.use(consultasRoutes);
app.use(unitsRoutes);
// app.use(assignedLocationsRoutes);

export default app;
