import Records from "../../records.json";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Itens()  {
  return (
    <div className="d-flex p-2 justify-content-around">
      {Records.map((Records) => {
        return (
            <div>
              <Card style={{ width: "17rem" }}>
                <Card.Img
                  variant="top"
                  src={Records.img}
                />
                <Card.Body>
                  <Card.Title>{Records.titulo}</Card.Title>
                  <Card.Text>{Records.descricao}</Card.Text>
                  <Card.Text>R$ {Records.preco}</Card.Text>
                  <Button variant="primary">Comprar</Button>
                </Card.Body>
              </Card>
            </div>
        );
      })}
    </div>
  );
}

export default Itens;
