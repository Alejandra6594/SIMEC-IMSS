//*json file va a permitir crear el archivo inicial donde se guardaran los datos y low nos va a permitir interactuar con este archivo
import { JSONFile } from "lowdb/node";
import { join, dirname, format } from "path";
import { fileURLToPath } from "url";
import { Low } from "lowdb";
//?dirname extrae la direccion actual del archivo que se esta ejecutando
//? fileURLToPath lo que hace es convertir un import a una ruta que dirname pueda entender

let dbAssignedLoactionsFile;
let dbCounters;
let dbUnidades;
//? obtenemos la ruta absoluta del archivo que se esta ejecutando ahora
const __dirname = dirname(fileURLToPath(import.meta.url));

export async function createConnectionToDbAssignedUnidades() {
  const fileDb = join(__dirname, "../database/db-unidades.json");

  const adapter = new JSONFile(fileDb);

  dbAssignedLoactionsFile = new Low(adapter);
  // //leemos
  await dbAssignedLoactionsFile.read();
  // //asignamos
  dbAssignedLoactionsFile.data ||= { assignedUnidades: [] };
  // //escribimos
  await dbAssignedLoactionsFile.write();
}
export async function createConnectionToDbCounters() {
  const fileDb = join(__dirname, "../database/db-counters.json");

  const adapter = new JSONFile(fileDb);

  dbCounters = new Low(adapter);
  // //leemos
  await dbCounters.read();
  // //asignamos
  dbCounters.data ||= {
    counters: [],
  };
  // //escribimos
  await dbCounters.write();
}
export async function createConnectionToDbUnidades() {
  const fileDb = join(__dirname, "../database/db-unidades.json");

  const adapter = new JSONFile(fileDb);

  dbUnidades = new Low(adapter);
  // //leemos
  await dbUnidades.read();
  // //asignamos
  dbUnidades.data ||= {
    Unidades: [],
  };
  // //escribimos
  await dbUnidades.write();
}
export const getConnectionToDbCounters = () => dbCounters;
export const getConnectionToDbAssignedUnidades = () => dbAssignedLoactionsFile;
export const getConnectionToDbUnidades = () => dbUnidades;
