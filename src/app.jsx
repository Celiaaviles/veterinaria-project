import Formulario from "./components/formulario";
import Header from "./components/header";
import ListadoPacientes from "./components/listadoPacientes";

function App() {
  return (
    <div className="container mx-auto mt-20">
      <Header></Header>
      <div className="mt-12 md:flex">
        <Formulario></Formulario>
        <ListadoPacientes></ListadoPacientes>
      </div>
    </div>
  );
}

export default App;
