import NavbarComponent from "../components/Navbar";
import Login from "../components/Login";
import FooterComponent from "../components/Footer";

const LoginPage = (props) => {
    return (
      <>
        <NavbarComponent />

        <Login />
        <FooterComponent />
      </>
    );
}

export default LoginPage;