import "./App.css";
import HomePage from "./Components/Home";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import Registration from "./Components/Registration";
import LoginPage from "./Components/Login";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/register"><Registration/></Route> 
          <Route path="/login"><LoginPage/></Route> 
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
