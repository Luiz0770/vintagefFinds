import "./Usuario.css";

function FormularioLogin() {
  return (
    <div>
      <div className="containerLogin">
        <header className="header">
          <h1>Faça o Login</h1>
        </header>

        <form>
          <div className="inputContainer">
            <label>Usuario</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="exemplo@email.com"
            ></input>
          </div>

          <div className="inputContainer">
            <label>Senha</label>
            <input
              type="password"
              name="senha"
              id="password"
              placeholder="***********"
            ></input>
          </div>

          <button className="button">Login</button>

          <div className="footerLogin">
            <p>Não tenho conta?</p>
            <a href="/contato">Crie um conta!</a>
          </div>
        </form>
        <div className="menuLogin">
            <a href="/"> ← Voltar para tela principal</a>&nbsp;&nbsp;&nbsp;
            <a href="/contato">Ir para tela de produtos →</a>&nbsp;&nbsp;&nbsp;
        </div>
      </div>
    </div>
  );
}

export default FormularioLogin;
