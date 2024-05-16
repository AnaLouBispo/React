import "./App.css";
import { Header } from "./Components/Header";
import { Lista } from "./Components/Lista";


function App() {
  return (
    <>
      <div className="container">
        <Header title="Projeto React" subTitulo="Sistema" />
        <Lista/>
      </div>
    </>
  );
}

export default App;
