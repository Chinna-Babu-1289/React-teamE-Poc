import "./Styles/App.css";
import NavBar from "./Components/NavBar/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import AddTask from "./Components/Pages/Home/AddTask";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Home />
        <Switch>
          <Route path="/addtask" exact component={AddTask} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
