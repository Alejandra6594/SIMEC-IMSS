import { useState } from "react";

export const LogicUnidades = () => {
  const [selectedUnit, setSelectedUnit] = useState("UMF");

  const handleClickSelectUnit = (e) => {
    console.log(e.target);
  };

  return {
    handleClickSelectUnit,
  };
};
