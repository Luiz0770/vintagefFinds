import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Produto() {
  return (
    <div>
      <h1 className="d-flex justify-content-center">PRODUTOS RELEVANTES</h1>
      <br /> 
      <div className="d-flex p-2 justify-content-around">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://cdn.awsli.com.br/600x700/2386/2386537/produto/153531456f137f93fd1.jpg"
          />
          <Card.Body>
            <Card.Title>Disco de Vinil</Card.Title>
            <Card.Text>
              A aveia tem sido um alimento básico em muitas partes do mundo.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://cdn.awsli.com.br/600x700/2386/2386537/produto/153550159b7e5b9700b.jpg"
          />
          <Card.Body>
            <Card.Title>Espelho Classico</Card.Title>
            <Card.Text>
              O Girassol Graúdo é uma ração indicada para pássaros de grande
              porte.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://cdn.awsli.com.br/600x700/2386/2386537/produto/216293686a901d40e08.jpg"
          />
          <Card.Body>
            <Card.Title>Relógio Antigo</Card.Title>
            <Card.Text>
              O Chocoboll é um cereal rico em vitaminas, minerais e fibras que
              proporciona mais saúde.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Produto;
