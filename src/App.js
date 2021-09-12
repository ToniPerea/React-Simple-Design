import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import NavbarComponent from './components/Navbar';
import FooterComponent from './components/Footer';


function App() {
  return (
    <>
      <NavbarComponent />

      <Login />
      <FooterComponent/>
      
    </>
  );
}

export default App;
