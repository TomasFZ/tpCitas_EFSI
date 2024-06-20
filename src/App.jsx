import './App.css';
import React, { useState } from "react";
import Formulario from './components/formulario.jsx';
import Listado from './components/listado.jsx';

function App() {
  const [citas, setCitas] = useState([]);

  return (
    <div>
      <head>
        <title>Administración de Pacientes</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"></link>
        <link href="https://fonts.googleapis.com/css?family=Staatliches" rel="stylesheet"></link>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css"></link>
      </head>

      <div id="root">
        <h1>ADMINISTRADOR DE PACIENTES</h1>
        <div className="container">
          <div className="row">
            <div className="one-half column">
              <h2>Crear mi Cita</h2>
              <Formulario citas={citas} setCitas={setCitas}></Formulario>
            </div>
            <div className="one-half column">
              <h2>Administra tus citas</h2>
              <Listado citas={citas} setCitas={setCitas}></Listado>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
