import { Navbar, Container, Nav } from "react-bootstrap";

const NavbarComponent = (props) =>{
    return (
      <>
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="#home">
              <img
                src="https://i.pinimg.com/originals/33/88/64/338864d9e7a7cd25a02b57b893e424c3.gif"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
              Training
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
}

export default NavbarComponent