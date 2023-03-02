import "./assets/styles/app.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <main>
        <div className="intro">
          <h1>
            <span>SPLI</span>
            <span>TTER</span>
          </h1>
        </div>

        <Card />
      </main>
    </>
  );
}

export default App;
