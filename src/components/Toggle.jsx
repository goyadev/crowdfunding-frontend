import "./Toggle.css";

function Toggle() {
  return (
    <div className="toggle">
      <span className="switch">
        <input id="switch-rounded" type="checkbox" />
        <label htmlFor="switch-rounded"></label>
      </span>
    </div>
  );
}
export default Toggle;
