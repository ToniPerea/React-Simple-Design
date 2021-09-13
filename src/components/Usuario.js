import { faSignOutAlt, faUserCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Row ,Col, Card, Image, Button} from "react-bootstrap";
import Entrenos from "./Entrenos";

const entrenoId = [
  {
    id: "1",
  },
  {
    id: "2",
  },
  {
    id: "3",
  },
  {
    id: "4",
  },
  {
    id: "5",
  },
  {
    id: "6",
  },
  {
    id: "7",
  }
];

const Usuario = (props) => {

    
    return (
      <>
        <Container className="mt-4 mb-5">
          <Row>
            <Col md={12}>
              <Card
                className="d-block m-auto shadow-lg"
                style={{ width: "350px", height: "100%" }}
              >
                <Image
                  className="d-block mt-2 m-auto"
                  style={{ width: "240px" }}
                  src="https://cdnb.20m.es/sites/112/2019/04/cara6-620x618.jpg"
                  roundedCircle
                />
                <Card.Body className="text-center fs-3">Maria Josefa</Card.Body>
                <Container className="text-center mb-3">
                  <Button className="mx-1">
                  <FontAwesomeIcon icon={faUserCog}/>
                  </Button>
                  <Button className="mx-1">
                    <FontAwesomeIcon icon={faSignOutAlt} />
                  </Button>
                </Container>
              </Card>
            </Col>
          </Row>
          <Row>
            <Container className="mt-4 mb-5 shadow w-50 text-center">
              {entrenoId.map((elemento) => {
                return <Entrenos id={elemento.id} />;
              })}
            </Container>
          </Row>
        </Container>
      </>
    );
}

export default Usuario;