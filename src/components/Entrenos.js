import { Row,Card } from "react-bootstrap";
import { useHistory } from "react-router";

const Entrenos = (props) =>{

    let history = useHistory();

    function ejercicio(){
        history.push("/tabla")
    }
    
    return (
      <>
        <Row>
          <Card>
            <Card.Text onClick={ejercicio} className="fs-2">Entreno {props.id}</Card.Text>
          </Card>
        </Row>
      </>
    );
}

export default Entrenos;