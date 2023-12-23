import { useEffect, useState } from "react";
import { helpHttp } from "../../helpers/helpHttp";
let urlUnits = "http://localhost:5000/unidades";
export const useLogicUnits = () => {
  const [units, setUnits] = useState([]);
  const [unitsFiltered, setUnitsFiltered] = useState([]);
  const [unitSelected, setUnitSelected] = useState("UMF");

  const [error, setError] = useState(null);
  let api = helpHttp();

  useEffect(() => {
    const getData = async () => {
      try {
        let jsonUnits = await api.get(urlUnits);
        let unitsInitial = jsonUnits.filter(
          (unit) => unit.unit == unitSelected
        );
        setUnitsFiltered(unitsInitial);
        setUnits(jsonUnits);
      } catch (err) {
        setError(err);
      }
    };
    getData();
  }, []);

  const handleFilterUnits = (e) => {
    let myUnitSelected = e.target.dataset.unit;
    let copyUnits = [...units];
    setUnitSelected(myUnitSelected);
    setUnitsFiltered(copyUnits.filter((unit) => unit.unit == myUnitSelected));
  };

  return { unitsFiltered, unitSelected, error, handleFilterUnits };
};
