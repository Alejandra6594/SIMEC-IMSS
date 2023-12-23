import { getConnectionToDbConsultas } from "../database.js";
import { iteratorBodyRequestArray } from "../helpers/helpers.js";

export const getConsultas = (req, res) => {
  const consultas = getConnectionToDbConsultas().data.consultas;
  res.json(consultas);
};
export const addConsultas = async (req, res) => {
  try {
    const db = getConnectionToDbConsultas();
    if (db.data.consultas.length === 0) {
      db.data.consultas = iteratorBodyRequestArray(req.body);
    } else {
      db.data.consultas.splice(0, db.data.consultas.length);
      db.data.consultas = iteratorBodyRequestArray(req.body);
      console.log("nuevos datos añadidos");
    }

    await db.write();
    res.json({
      status: 200,
      statusMessage: "consultas added successfully",
    });
  } catch (error) {
    return res.status(500).send(error);
  }
};
