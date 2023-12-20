import app from "./app.js";
import {
  // createConnectionToDbAssignedLocations,
  createConnectionToDbCounters,
  createConnectionToDbUnidades,
} from "./database.js";
createConnectionToDbCounters();
// createConnectionToDbAssignedLocations();
createConnectionToDbUnidades();
// para ejecutar necesitamos el siguiente comando: npm run startLowDb
app.listen(5000);
console.log("Server is running on port 5000");
