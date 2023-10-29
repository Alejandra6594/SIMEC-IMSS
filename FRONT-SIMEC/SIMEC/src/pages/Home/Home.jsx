// import { Ola } from "../../components/Ola/Ola";
import { useEffect } from "react";
import JSConfetti from "js-confetti";

import "./Home_style.scss";

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
              Tu Sistema de invetario para mantenimiento <br />
              de equipos de computo!!
            </p>
            <div className="z-3">
              <button type="button" className="btn btn-success p-2">
                Revisa tus consultas
              </button>
              <button type="button" className="btn btn-secondary p-2 mx-2">
                Mira tus mantenimientos
              </button>
              <button type="button" className="btn btn-success p-2">
                Monitorea tus unidades
              </button>
            </div>
          </div>
        </section>
        {/* <section className="col-xl-6 container-side-img z-3">
          <picture className="">
            <img
              src="/imgs/it-support-welcome.png"
              className="z-3"
              alt="it-support-welcome-img"
              style={{ width: "55rem" }}
            />
          </picture>
        </section> */}
        {/* <footer className="position-absolute bottom-0 start-0 m-0 p-0">
          <Ola />
        </footer> */}
      </article>
    </section>
  );
};
