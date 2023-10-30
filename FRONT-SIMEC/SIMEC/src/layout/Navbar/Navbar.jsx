import { ItemNavLink } from "../../components/ItemNavLink/ItemNavLink";
import "./Nabvar_style.scss";

export const Navbar = () => {
  return (
    <nav className="text-center text-white container-nabvar h-100 position-relative">
      <h2 className="fw-bold pt-3 fs-1">🖥️SIMEC🏥</h2>
      <ul className="nav nav-tabs flex-column mt-3 ">
        <li className="nav-item fs-5">
          <ItemNavLink to="/">Inicio</ItemNavLink>
        </li>
        <li className="nav-item fs-5">
          <ItemNavLink to="/consultas">Consultas</ItemNavLink>
        </li>
        <li className="nav-item fs-5">
          <ItemNavLink to="/mantenimientos">Mantenimientos</ItemNavLink>
        </li>
        <li className="nav-item fs-5">
          <ItemNavLink to="/unidades">Unidades</ItemNavLink>
        </li>
      </ul>
      <h5 className="position-absolute bottom-0 w-100">Versión: 1.0.0</h5>
    </nav>
  );
};
