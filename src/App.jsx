import './App.css';
import { useEffect, useState } from "react";
import Formulario from './components/formulario.jsx';
import Listado from './components/listado.jsx';

function App() {

  const [citas, setCitas] = useState([]);

  // const agregarCita = (cita) => {
  //   citas.push(cita)
  // };

  return (
    <div>
      
    <h1>ADMINISTRADOR DE PACIENTES</h1>

    <h2>CREAR MI CITA</h2>
    <Formulario setCitas={setCitas}></Formulario>

    <h2>ADMINISTRA TUS CITAS</h2> 
    {/* Listado de citas */}
    <Listado citas={citas} setCitas={setCitas}></Listado>


    </div>
  );
}

export default App;
