import "./Header_style.scss";
export const Header = () => {
  return (
    <header className=" text-center container-header">
      <picture className="" style={{ width: "5rem" }}>
        <img
          src="/imgs/logo-imss.png"
          className=" w-100 h-100"
          alt="logo-imss"
        />
      </picture>
      <h2 className="fw-bold">
        Sistema de invetario para mantenimiento <br />
        de equipos de computo
      </h2>
      <picture className="" style={{ width: "5rem" }}>
        <img
          src="/imgs/logo-imss.png"
          className=" w-100 h-100"
          alt="logo-imss"
        />
      </picture>
    </header>
  );
};
