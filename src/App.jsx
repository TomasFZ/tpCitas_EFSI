import './App.css';
import { useEffect, useState } from "react";
import Formulario from './components/formulario.jsx';
import Listado from './components/listado.jsx';
function App() {

  const [citas, setCitas] = useState([]);
  console.log("citas: "+ citas)
  // const agregarCita = (cita) => {
  //   citas.push(cita)
  // };

  return (
    <div>
      
    {/* <h1>ADMINISTRADOR DE PACIENTES</h1>

    <h2>CREAR MI CITA</h2>
    <Formulario citas={citas} setCitas={setCitas}></Formulario>

    <h2>ADMINISTRA TUS CITAS</h2> 
    {/* Listado de citas */}
    {/* <Listado citas={citas} setCitas={setCitas}></Listado> */}
    <head>
    <title>Administración de Pacientes</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"></link>
    <link href="https://fonts.googleapis.com/css?family=Staatliches" rel="stylesheet"></link>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css"></link>
    </head>

    <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root">
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div class="container">
        <div class="row">
          <div class="one-half column">
            <h2>Crear mi Cita</h2>
            <Formulario citas={citas} setCitas={setCitas}></Formulario>
          </div>
          <div class="one-half column">
            <h2>Administra tus citas</h2>
            <Listado citas={citas} setCitas={setCitas}></Listado>
            {/* <div class="cita">
              <p>Mascota: <span>Nina</span></p>
              <p>Dueño: <span>Martin</span></p>
              <p>Fecha: <span>2021-08-05</span></p>
              <p>Hora: <span>08:20</span></p>
              <p>Sintomas: <span>Le duele la pierna</span></p><button class="button elimnar u-full-width">Eliminar ×</button>
            </div>
            <div class="cita">
              <p>Mascota: <span>Sifon</span></p>
              <p>Dueño: <span>Flecha</span></p>
              <p>Fecha: <span>2023-08-05</span></p>
              <p>Hora: <span>09:24</span></p>
              <p>Sintomas: <span>Duerme mucho</span></p><button class="button elimnar u-full-width">Eliminar ×</button>
            </div>
            <div class="cita">
              <p>Mascota: <span>Floki</span></p>
              <p>Dueño: <span>Ari</span></p>
              <p>Fecha: <span>2023-08-05</span></p>
              <p>Hora: <span>16:15</span></p>
              <p>Sintomas: <span>No está comiendo</span></p><button class="button elimnar u-full-width">Eliminar ×</button>
            </div>*/}
          </div>
        </div>
      </div>
    </div>
    <script src="/static/js/bundle.js"></script>
    <script src="/static/js/vendors~main.chunk.js"></script>
    <script src="/static/js/main.chunk.js"></script>

  </body>
    </div>
  );
}

export default App;
