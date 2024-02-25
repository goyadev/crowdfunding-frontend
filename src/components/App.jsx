import { Outlet } from "react-router-dom";
import { Head } from "./Head";
import NavBar from "./NavBar";

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
