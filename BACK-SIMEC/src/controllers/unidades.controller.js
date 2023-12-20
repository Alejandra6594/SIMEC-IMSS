import { getConnectionToDbUnidades } from "../database.js";
import { iteratorBodyRequestArray } from "../helpers/helpers.js";

export const getUnits = (req, res) => {
  const unidades = getConnectionToDbUnidades().data.unidades;
  res.json(unidades);
};

export const addUnit = async (req, res) => {
  try {
    const db = getConnectionToDbUnidades();
    if (db.data.unidades.length === 0) {
      db.data.unidades = iteratorBodyRequestArray(req.body);
    } else {
      db.data.unidades.splice(0, db.data.unidades.length);
      db.data.unidades = iteratorBodyRequestArray(req.body);
      console.log("nuevos datos añadidos");
    }

    await db.write();
    res.json({
      status: 200,
      statusMessage: "Unidad added successfully",
    });
  } catch (error) {
    return res.status(500).send(error);
  }
};

export const deleteUnit = async (req, res) => {
  const db = getConnectionToDbUnidades();
  const unitsFound = db.data.unidades.find((t) => t.id === req.params.id);
  if (!unitsFound) res.sendStatus(404);
  console.log(unitsFound);
  const newTasks = db.data.unidades.filter((t) => t.id !== req.params.id);
  db.data.unidades = newTasks;
  await db.write();
  return res.json({ message: "Unit deleting succesfuly" });
};
