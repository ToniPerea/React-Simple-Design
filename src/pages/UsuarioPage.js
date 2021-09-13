import FooterComponent from "../components/Footer";
import NavbarComponent from "../components/Navbar";
import Usuario from "../components/Usuario";

const UsuarioPage = (props) => {
    return(
        <>
        <NavbarComponent/>
        <Usuario></Usuario>
        <FooterComponent/>
        </>
    );
}

export default UsuarioPage;