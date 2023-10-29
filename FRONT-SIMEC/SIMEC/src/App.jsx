import { Navbar } from "./layout/Navbar/Navbar";
import { Home } from "./pages/Home/Home";

function App() {
  return (
    <section className="container-fluid container-home bg-white">
      <article className="row min-vh-100">
        <aside className="col-xl-2 overflow-y-hidden m-0 p-0">
          <Navbar />
        </aside>
        <main className="col-xl-10 p-0 m-0">
          <Home />
        </main>
      </article>
    </section>
  );
}

export default App;
