import { getConnectionToDbConsultas } from "../database.js";
import { iteratorBodyRequestArray } from "../helpers/helpers.js";
import { v4 } from "uuid";

export const getConsultas = (req, res) => {
  const consultas = getConnectionToDbConsultas().data.consultas;
  res.json(consultas);
};
export const addConsultas = async (req, res) => {
  // Crear un nuevo objeto de fecha
  let fechaActual = new Date();

  // Obtener la fecha actual
  let fecha = fechaActual.toLocaleDateString();

  // Obtener la hora actual
  let hora = fechaActual.toLocaleTimeString();
  const newConsult = {
    id: v4(),
    fecha_registro: fecha + " " + hora,
    ...req.body,
  };
  try {
    const db = getConnectionToDbConsultas();
    db.data.consultas.push(newConsult);
    await db.write();
    return res.json({
      status: 200,
      statusMessage: "Consult added successfully",
      dataAdded: newConsult,
    });
  } catch (error) {
    return res.status(500).send(error);
  }
};
