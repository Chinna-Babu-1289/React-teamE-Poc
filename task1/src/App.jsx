import "./Styles/App.css";
import Home from "./Components/Pages/Home/Home";
import LoginForm from "./Components/Pages/Login/LoginForm";
import SignUpForm from "./Components/Pages/Login/SignUpForm";
import AddTask from "./Components/Pages/Home/AddTask";

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      <LoginForm />
      <SignUpForm />
      <AddTask />
    </div>
  );
}

export default App;
