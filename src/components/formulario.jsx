import React, { useState } from "react";

function Formulario({ citas, setCitas }) {
  const [nuevaCita, setNuevaCita] = useState({
    mascota: "",
    duenio: "",
    fecha: "",
    hora: "",
    sintomas: ""
  });

  function AgregarCita(e) {
    setNuevaCita({ ...nuevaCita, [e.target.name]: e.target.value });
  }

  function EnviarCita(e) {
    e.preventDefault();
    console.log(nuevaCita); // Imprime los valores del formulario en la consola
    setCitas([...citas, nuevaCita]);
    setNuevaCita({
      mascota: "",
      duenio: "",
      fecha: "",
      hora: "",
      sintomas: ""
    });
  }

  return (
    <form onSubmit={EnviarCita}>
      <label>Nombre Mascota</label>
      <input
        type="text"
        name="mascota"
        value={nuevaCita.mascota}
        onChange={AgregarCita}
        placeholder="Nombre de la mascota"
      />

      <label>Nombre Dueño</label>
      <input
        type="text"
        name="duenio"
        value={nuevaCita.duenio}
        onChange={AgregarCita}
        placeholder="Nombre del dueño"
      />

      <label>Fecha</label>
      <input
        type="date"
        name="fecha"
        value={nuevaCita.fecha}
        onChange={AgregarCita}
      />

      <label>Hora</label>
      <input
        type="time"
        name="hora"
        value={nuevaCita.hora}
        onChange={AgregarCita}
      />

      <label>Síntomas</label>
      <input
        type="text"
        name="sintomas"
        value={nuevaCita.sintomas}
        onChange={AgregarCita}
      />

      <button type="submit" className="botonAgregar">
        Agregar cita
      </button>
    </form>
  );
}

export default Formulario;
