import Carrosel from "./components/Carrosel";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Itens from "./components/Itens";

function Home() {
  return (
    <div>
      <div className="menu">
        <Menu />
      </div>
      <Carrosel />
      <br />
      <h1 className="d-flex justify-content-center">PRODUTOS RELEVANTES</h1>
      <Itens />
      <br />
      <Footer />
    </div>
  );
}

export default Home;
