import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Formulario() {
  return (
    <div>
      <div className="container">
        <InputGroup className="mb-3">
          <InputGroup.Text>Nome do Produto</InputGroup.Text>
          <Form.Control aria-label="First name" />
        </InputGroup>

        <InputGroup className="mb-3" name="id_produtovintage">
          <InputGroup.Text id="inputGroup-sizing-default">
            ID do Produto
          </InputGroup.Text>
          <Form.Control
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">
            Marca
          </InputGroup.Text>
          <Form.Control
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>

        <Form>
          <Row>
            <Col>
              <InputGroup className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-default">
                  Quantidade no Estoque
                </InputGroup.Text>
                <Form.Control
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                />
              </InputGroup>
            </Col>

            <Col>
              <InputGroup className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-default">
                  Data de validação
                </InputGroup.Text>
                <Form.Control
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                />
              </InputGroup>

            </Col>
          </Row>
        </Form>

        <FloatingLabel controlId="floatingTextarea2" label="Descrição">
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: "100px" }}
          />
        </FloatingLabel>
        <br />
        <Button variant="primary">Enviar</Button>
      </div>
    </div>
  );
}

export default Formulario;
