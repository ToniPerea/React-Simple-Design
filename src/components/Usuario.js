import { Container, Row ,Col, Card, Image, Button} from "react-bootstrap";

const Usuario = (props) => {
    return(
        <>
        <Container className="mt-4 mb-5">
            <Row>
                <Col md={12}>
                    <Card  className="d-block m-auto shadow-lg" style={{width:'350px', height:'100%'}}>
                    <Image  className="d-block mt-2 m-auto" style={{width:'240px'}} src="https://cdnb.20m.es/sites/112/2019/04/cara6-620x618.jpg" roundedCircle />
                    <Card.Body className="text-center fs-3">Maria Josefa</Card.Body>
                    <Container className="text-center mb-3">
                        <Button className="mx-1">
                            Ajustes
                        </Button>
                        <Button className="mx-1">
                            Salir
                        </Button>
                    </Container>
                    </Card>
                </Col>
                
            </Row>
            <Row>
                <Card>
                    <h1>Entrenos</h1>
                </Card>
            </Row>
        </Container>
        </>
    );
}

export default Usuario;