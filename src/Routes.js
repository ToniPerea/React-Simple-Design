import { Route,  Switch,  } from "react-router";
import { BrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import TablaEntreno from "./pages/TablaEntreno";
import UsuarioPage from "./pages/UsuarioPage";


const Routes = () => {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LoginPage}></Route>
          <Route exact path="/tabla" component={TablaEntreno}></Route>
          <Route exact path="/user" component={UsuarioPage}></Route>
        </Switch>
      </BrowserRouter>
    );
}

export default Routes;