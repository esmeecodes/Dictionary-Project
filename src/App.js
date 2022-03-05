import "./App.css";
import logo from "./logo.png";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="footer mb-5">
          Coded by{" "}
          <a href="https://www.linkedin.com/in/esmeezootjes/" target="_blank">
            Esmée Zootjes
          </a>
        </footer>
        <div className="mt-5">
          <br />
          <br />
          <br />
          <img src={logo} className="App-logo img-fluid mt-5" alt="logo" />
        </div>
      </div>
    </div>
  );
}
