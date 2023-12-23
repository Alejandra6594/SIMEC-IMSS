//*json file va a permitir crear el archivo inicial donde se guardaran los datos y low nos va a permitir interactuar con este archivo
import { JSONFile } from "lowdb/node";
import { join, dirname, format } from "path";
import { fileURLToPath } from "url";
import { Low } from "lowdb";
//?dirname extrae la direccion actual del archivo que se esta ejecutando
//? fileURLToPath lo que hace es convertir un import a una ruta que dirname pueda entender

let dbConsultas;
let dbUnidades;
//? obtenemos la ruta absoluta del archivo que se esta ejecutando ahora
const __dirname = dirname(fileURLToPath(import.meta.url));

export async function createConnectionToDbConsultas() {
  const fileDb = join(__dirname, "../database/db-consultas.json");

  const adapter = new JSONFile(fileDb);

  dbConsultas = new Low(adapter);
  // //leemos
  await dbConsultas.read();
  // //asignamos
  dbConsultas.data ||= {
    consultas: [],
  };
  // //escribimos
  await dbConsultas.write();
}
export async function createConnectionToDbUnidades() {
  const fileDb = join(__dirname, "../database/db-unidades.json");

  const adapter = new JSONFile(fileDb);

  dbUnidades = new Low(adapter);
  // //leemos
  await dbUnidades.read();
  // //asignamos
  dbUnidades.data ||= {
    unidades: [],
  };
  // //escribimos
  await dbUnidades.write();
}
export const getConnectionToDbConsultas = () => dbConsultas;
export const getConnectionToDbUnidades = () => dbUnidades;
