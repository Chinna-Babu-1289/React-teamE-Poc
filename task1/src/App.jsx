import { UserContextProvider } from "./Components/Context/UserContext";
import Routers from "./Components/NavBar/Routers";
// import "./Styles/App.css";

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <Routers />
      </UserContextProvider>
    </div>
  );
}

export default App;
