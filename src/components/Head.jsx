import "./Head.css";
import NavBar from "./NavBar";

export function Head() {
  return (
    <>
      <div className="headersection">
        <div className="headerimage">
          <img
            src="/ARTSTARTER-header.png"
            className="headerimage"
            id="artstarterimage"
            alt="Artstarter, Crowdfunding for Creatives"
          />
        </div>
      </div>
    </>
  );
}
