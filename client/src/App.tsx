import "./App.css";
import HomePage from "./components/Home";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import Registration from "./components/Registration";
import LoginPage from "./components/Login";
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
