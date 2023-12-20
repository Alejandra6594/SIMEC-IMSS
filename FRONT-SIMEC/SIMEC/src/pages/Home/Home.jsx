// import { Ola } from "../../components/Ola/Ola";
import { useEffect } from "react";
import JSConfetti from "js-confetti";

import "./Home_style.scss";
import { ItemNavLink } from "../../components/ItemNavLink/ItemNavLink";

export const Home = () => {
  useEffect(() => {
    const jsConfetti = new JSConfetti();

    // jsConfetti.addConfetti();

    jsConfetti.addConfetti({
      confettiRadius: 5,
      confettiNumber: 500,
    });
    return () => {
      jsConfetti.clearCanvas();
    };
  }, []);

  return (
    <section className="container-fluid container-home overflow-hidden">
      <article className="row min-vh-100 position-relative">
        <section className="col-xl-12  container-side-text z-3 border ">
          <div className="z-1 text-center">
            <h2 className="titulo-bienvenida">
              Bienvenido a
              <br />
              🖥️SIMEC🏥
            </h2>
            <p className="subtitulo-bienvenida">
              Tu Sistema de Invetario para Mantenimiento <br />
              de Equipos de Computo!!
            </p>
            <ul className="z-3">
              <ItemNavLink to="/consultas" className="btn btn-success p-2">
                Revisa tus consultas
              </ItemNavLink>
              <ItemNavLink
                to="/mantenimientos"
                className="btn btn-secondary p-2 mx-2"
              >
                Registra tus mantenimientos
              </ItemNavLink>

              <ItemNavLink
                to="/unidades"
                className="btn btn-secondary p-2 mx-2"
              >
                Monitorea tus unidades
              </ItemNavLink>
            </ul>
          </div>
        </section>
      </article>
    </section>
  );
};
