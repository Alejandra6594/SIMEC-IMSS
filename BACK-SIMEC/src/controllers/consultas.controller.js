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

export const deleteConsult = async (req, res) => {
  //obtener el id de la consulta a eliminar
  let idConsult = req.params.id;
  //obtener los datos de la base de datos
  const db = getConnectionToDbConsultas();

  //buscar el elemento en la base de datos que vamos a eliminar
  const consultFound = db.data.consultas.find(
    (consult) => consult.id === idConsult
  );

  //validar si se encuentra la consulta a eliminar
  if (!consultFound) {
    res.sendStatus(404);
  }

  //si se encuentra la consulta, filtramos y devolvemos la respuesta
  const newConsults = db.data.consultas.filter(
    (consult) => consult.id !== idConsult
  );

  db.data.consultas = newConsults;
  await db.write();
  return res.json({
    status: 200,
    statusMessage: "Consult delete successfully",
    consultDeleting: consultFound,
  });
};
