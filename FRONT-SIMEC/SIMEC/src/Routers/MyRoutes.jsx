import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Consultas } from "../pages/Consultas/Consultas";
import { Mantenimientos } from "../pages/Mantenimientos/Mantenimientos";
import { Unidades } from "../pages/Unidades/Unidades";

export const MyRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route path="/consultas" element={<Consultas />}></Route>
      <Route path="/mantenimientos" element={<Mantenimientos />}></Route>
      <Route path="/unidades" element={<Unidades />}></Route>
    </Routes>
  );
};
