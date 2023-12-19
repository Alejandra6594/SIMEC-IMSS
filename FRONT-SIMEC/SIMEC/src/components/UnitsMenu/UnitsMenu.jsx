import { useUnidades } from "../../hooks/useUnidades";

export const UnitsMenu = () => {
  const { handleUnitSelected } = useUnidades();
  return (
    <nav id="navbar-example2" className="navbar bg-body-tertiary px-3 mb-3">
      <h2 className="navbar-brand fw-bold">Hospital General Regional</h2>
      <ul className="nav nav-pills">
        <li className="nav-item">
          <button
            data-unit="HGR"
            className="btn btn-success m-1"
            onClick={(e) => handleUnitSelected(e)}
          >
            HGR
          </button>
        </li>
        <li className="nav-item">
          <button
            data-unit="UMF"
            className="btn btn-success m-1"
            onClick={(e) => handleUnitSelected(e)}
          >
            UMF
          </button>
        </li>
      </ul>
    </nav>
  );
};
