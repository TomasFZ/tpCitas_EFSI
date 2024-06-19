//import { useEffect, useState } from "react";
// formulario.jsx
import React, { useState } from "react";

function Formulario() {
  var [nuevaCita, setNuevaCita] = useState({
    mascota: "",
    duenio: "",
    fecha: "",
    hora: "",
    sintomas: ""
  });

  function AgregarCita(e){
    setNuevaCita({ ...nuevaCita, [e.target.name]: e.target.value });
    console.log(e);
  }

  function EnviarCita(e){
    console.log(e)
    e.preventDefault();
   setNuevaCita = ({
        mascota: "",
        duenio: "",
        fecha: "",
        hora: "",
        sintomas: ""})
  }

  return (
    <>
      <form>
        <label>Nombre Mascota</label>
        <input
          type="text"
          name="mascota"
          value={nuevaCita.mascota}
          onChange={AgregarCita}
          placeholder="Nombre de la mascota"
        ></input>

        <label>Nombre Dueño</label>
        <input
          type="text"
          name="duenio"
                 value={nuevaCita.duenio}
          onChange={AgregarCita}
          placeholder="Nombre del dueño"
        ></input>

        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          value={nuevaCita.fecha}
          onChange={AgregarCita}
        ></input>

        <label>Hora</label>
        <input
          type="time"
          name="hora"
          value={nuevaCita.hora}
          onChange={AgregarCita}
        ></input>

        <label>Síntomas</label>
        <input
          type="text"
          name="sintomas"
          value={nuevaCita.sintomas}
          onChange={AgregarCita}
        ></input>

        <button type="submit" onSubmit={EnviarCita} className="botonAgregar">
          Agregar cita
        </button>
      </form>
    </>
  );
}

export default Formulario;
