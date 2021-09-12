import { Route,  Switch,  } from "react-router";
import { BrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import TablaEntreno from "./pages/TablaEntreno";


const Routes = () => {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LoginPage}></Route>
          <Route exact path="/tabla" component={TablaEntreno}></Route>
        </Switch>
      </BrowserRouter>
    );
}

export default Routes;