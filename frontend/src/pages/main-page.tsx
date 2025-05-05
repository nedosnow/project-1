import logo from "/logo.svg";
import "../App.css";

function MainPage() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={logo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Hey i am a red panda</h1>
      <div className="card">
        <p className="read-the-docs">Click on the icon</p>
      </div>
    </>
  );
}

export default MainPage;
