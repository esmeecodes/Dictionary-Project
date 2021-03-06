import "./App.css";
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
          <a
            href="https://www.linkedin.com/in/esmeezootjes/"
            target="_blank"
            rel="noreferrer"
          >
            Esmée Zootjes
          </a>
        </footer>
      </div>
    </div>
  );
}
