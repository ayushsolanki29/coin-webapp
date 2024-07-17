import "./App.css";
import HomePage from "./Components/Home.tsx";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import Registration from "./Components/Registration.tsx";
import LoginPage from "./Components/Login.tsx";
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
