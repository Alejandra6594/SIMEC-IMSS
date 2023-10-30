import { Navbar } from "./layout/Navbar/Navbar";

import { MyRoutes } from "./Routers/MyRoutes";

function App() {
  return (
    <section className="container-fluid bg-white">
      <article className="row min-vh-100">
        <aside className="col-xl-2  m-0 p-0">
          <Navbar />
        </aside>
        <main className="col-xl-10 p-0 m-0">
          <MyRoutes></MyRoutes>
        </main>
      </article>
    </section>
  );
}

export default App;
