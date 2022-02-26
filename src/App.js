import './App.css';
import logo from "./logo.png"
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        
      </header>
        <main>
          <Dictionary/>
        </main>
      <footer className="text-center mb-5">
        Coded by Esmée Zootjes
      </footer><div className="mt-5">
      <img src={logo} className="App-logo img-fluid" alt="logo" />
      </div>

      </div>
    </div>
  );
}

