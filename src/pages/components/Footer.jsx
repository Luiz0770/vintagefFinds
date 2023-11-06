import React from "react";
import Container from "react-bootstrap/Container";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <br />
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section container">
            <div className="d-flex ">
            <img
              alt=""
              src="/src/assets/vinyl.svg"
              height="30"
              className="d-inline-block align-top"
            />
            <h3>Vintage Finds</h3>
            </div>
            <p>
              Uma breve descrição sobre a nossa loja e os valores que
              compartilhamos.
            </p>
          </div>
          <div className="footer-section">
            <h3>Links Úteis</h3>
            <ul>
              <li>
                <a href="/">Página Inicial</a>
              </li>
              <li>
                <a href="/sobre">Sobre</a>
              </li>
              <li>
                <a href="/contato">Contato</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Redes Sociais</h3>
            <ul>
              <li>
                <a href="https://facebook.com">Facebook</a>
              </li>
              <li>
                <a href="https://twitter.com">Twitter</a>
              </li>
              <li>
                <a href="https://instagram.com">Instagram</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Vintage Finds. Todos os direitos
            reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
