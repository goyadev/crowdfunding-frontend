import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default App;
