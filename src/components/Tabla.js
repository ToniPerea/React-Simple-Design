
import { Table } from "react-bootstrap";
import { Container, Col, Card, Row } from "react-bootstrap";
import Ejercicio from "./Ejercicio";


const entrenamiento= [
    {
        'identificador':'1',
        'nombre':'Crunch',
        'peso':'Peso Corporal',
        'repes':'3x12',
        'gif':'https://4.bp.blogspot.com/-jquDVaUrVRs/WoshBheh37I/AAAAAAAAbH0/sEQAoT3iH1c0BIH8Oj_VuTvKo08ooL7EQCLcBGAs/s1600/step%2Bby%2Bstep%2Bexercises%2Babdominales%2Bcrunch.gif'
    },
    {
        'identificador':'2',
        'nombre':'Dominadas',
        'peso':'Peso Corporal',
        'repes':'3x10',
        'gif':'https://j.gifs.com/663Zkz.gif'
    },
    {
        'identificador':'3',
        'nombre':'Press Banca',
        'peso':'50',
        'repes':'3x14',
        'gif':'https://www.deportrainer.com/img/cms/Post%20de%20blog/press_banca_inclinado/movimiento-del-press-inclinado-hacia-abajo.gif'
    }
]

const Tabla = (props) => {
    

    return (
      <>
        <Container fluid className="mt-5 mb-5">
          <Row className="justify-content-center">
            <Col className="text-center" md={6}>
              <Table className="mt-5 mb-5" striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Ejercicio</th>
                    <th>Peso(KG)</th>
                    <th>Series x Repeticiones</th>
                  </tr>
                </thead>
                <tbody>
                    {entrenamiento.map((elemento) => {
                        return (
                          <Ejercicio
                            id={elemento.identificador}
                            nombre={elemento.nombre}
                            peso={elemento.peso}
                            repes={elemento.repes}
                            gif={elemento.gif}
                            
                          ></Ejercicio>
                        );
                    })
                }
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </>
    );
}

export default Tabla;