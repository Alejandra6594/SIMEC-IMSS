import app from "./app.js";
import {
  createConnectionToDbConsultas,
  createConnectionToDbUnidades,
} from "./database.js";
createConnectionToDbConsultas();
createConnectionToDbUnidades();
// para ejecutar necesitamos el siguiente comando: npm run startLowDb
app.listen(5000);
console.log("Server is running on port 5000");
