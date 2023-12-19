import { useState } from "react";
import { units } from "../data/myData";

export const useUnidades = () => {
  const [listUnit, setListUnit] = useState(units);
  const [unitSelected, setUnitSelected] = useState([]);

  const handleUnitSelected = (e) => {
    let unitSelected = e.target.dataset.unit;
    setUnitSelected(e.target.dataset.unit);
    console.log(unitSelected);
  };

  return {
    handleUnitSelected,
    unitSelected,
  };
};
