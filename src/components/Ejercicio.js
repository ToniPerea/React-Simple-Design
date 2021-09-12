const Ejercicio = (props) => {
    return (
      <>
        <tr>
          <td>{props.id}</td>
          <td>{props.nombre}</td>
          <td>{props.peso}</td>
          <td>{props.repes}</td>
          <td>
            <img
              className="w-75"
              src={props.gif}
              alt="Logo"
            />
          </td>
        </tr>
      </>
    );
}


export default Ejercicio;