import FooterComponent from "../components/Footer";
import NavbarComponent from "../components/Navbar";
import Tabla from "../components/Tabla";

const TablaEntreno = (props) =>{
    return (
      <>
        <NavbarComponent />
        <Tabla/>
        <FooterComponent />
      </>
    );
}
export default TablaEntreno;