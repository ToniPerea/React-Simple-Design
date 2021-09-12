import { Form,Button, Container,Row, Col, Card } from "react-bootstrap";


const Login = (props) => {
    return (
      <>
        <Container fluid className="mt-5 mb-5">
          <Row className="justify-content-center">
            <Col className="text-center" md={5}>
              <Card className="px-3">
                <Form>
                  <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <Button className="mb-3" variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
}

export default Login;