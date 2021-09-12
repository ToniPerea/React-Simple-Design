import { useState } from "react";

const Ejercicio = (props) => {
    const [getGifVisibility, setGifVisibility] = useState(false);

    function desplegar(){
        setGifVisibility(!getGifVisibility);
    }
    
    return (
      <>
        <tr onClick={desplegar}>
          <td>{props.id}</td>
          <td>{props.nombre}</td>
          <td>{props.peso}</td>
          <td>{props.repes}</td>
        </tr>
        {getGifVisibility && (
          <tr>
            <td colSpan={4}>
              <img className="w-50" src={props.gif} alt="Logo" />
            </td>
          </tr>
        )}
      </>
    );
}


export default Ejercicio;