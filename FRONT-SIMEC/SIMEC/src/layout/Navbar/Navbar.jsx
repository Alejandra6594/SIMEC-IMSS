import "./Nabvar_style.scss";

export const Navbar = () => {
  return (
    <nav className="text-center text-white container-nabvar h-100">
      <h2 className="fw-bold pt-3 fs-1">🖥️SIMEC🏥</h2>
      <ul className="nav nav-tabs flex-column mt-3 h-100">
        <li className="nav-item fs-5">
          <a className="nav-link text-white" aria-current="page" href="#">
            Consultas
          </a>
        </li>
        <li className="nav-item fs-5">
          <a className="nav-link text-white" href="#">
            Mantenimientos
          </a>
        </li>
        <li className="nav-item fs-5">
          <a className="nav-link text-white" href="#">
            Unidades
          </a>
        </li>
      </ul>
    </nav>
  );
};
