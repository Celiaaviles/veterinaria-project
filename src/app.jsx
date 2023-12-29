import { useState } from "react";
import Formulario from "./components/formulario";
import Header from "./components/header";
import ListadoPacientes from "./components/listadoPacientes";

function App() {
  const [pacientes, setPacientes] = useState([]);

  return (
    <div className="container mx-auto mt-20">
      <Header></Header>
      <div className="mt-12 md:flex">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
        ></Formulario>
        <ListadoPacientes pacientes={pacientes}></ListadoPacientes>
      </div>
    </div>
  );
}

export default App;
