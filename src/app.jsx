import Formulario from "./components/formulario";
import Header from "./components/header";
import ListadoPacientes from "./components/listadoPacientes";

function App() {
  return (
    <div className="container mx-auto mt-20">
      <Header></Header>
      <Formulario></Formulario>
      <ListadoPacientes></ListadoPacientes>
    </div>
  );
}

export default App;
