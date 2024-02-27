import { Outlet } from "react-router-dom";
import { Head } from "./Head";
import NavBar from "./NavBar";
// import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <Head />
      <Outlet />
    </>
  );
}

export default App;
