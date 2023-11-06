import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Menu.css";

function Menu() {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="/src/assets/vinyl.svg"
              height="30"
              className="imagem"
            />{" "}
            Vintage Finds
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <div className="links">
            <Nav.Link href="/contato">Cadastro</Nav.Link>
            <Nav.Link href="/login" slot="end">Login</Nav.Link>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Menu;
