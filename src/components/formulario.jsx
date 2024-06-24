import React, { useState } from "react";

function Formulario({ citas, setCitas }) {
  const [nuevaCita, setNuevaCita] = useState({
    mascota: "",
    duenio: "",
    fecha: "",
    hora: "",
    sintomas: ""
  });

  const [errores, setErrores] = useState({
    mascota: false,
    duenio: false,
    fecha: false
  });

  // Función para obtener la fecha actual en formato YYYY-MM-DD
  function obtenerFechaHoy() {
    const hoy = new Date();
    const anio = hoy.getFullYear();
    const mes = String(hoy.getMonth() + 1).padStart(2, '0');
    const dia = String(hoy.getDate()).padStart(2, '0');
    return `${anio}-${mes}-${dia}`;
  }

  // Función para validar que la primera letra sea mayúscula
  function validarMayuscula(nombre) {
    if (nombre.length === 0) {
      return false
    };
    const primeraLetra = nombre.charAt(0);
    return primeraLetra === primeraLetra.toUpperCase();
  }

  // Función para validar que la fecha no sea del pasado
  function validarFecha(fecha) {
    const fechaActual = obtenerFechaHoy();
    return fecha >= fechaActual;
  }

  function AgregarCita(e) {
    const { name, value } = e.target;

    if (name === "mascota" || name === "duenio") {
      const esValido = validarMayuscula(value);
      setErrores({ ...errores, [name]: !esValido });
    }

    if (name === "fecha") {
      const esValida = validarFecha(value);
      setErrores({ ...errores, [name]: !esValida });
    }

    setNuevaCita({ ...nuevaCita, [name]: value });
  }

  function EnviarCita(e) {
    e.preventDefault();

    // Verificar si los nombres y la fecha son válidos
    if (!validarMayuscula(nuevaCita.mascota) || !validarMayuscula(nuevaCita.duenio) || !validarFecha(nuevaCita.fecha)) {
      return;
    }

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
      {errores.mascota && <p>El nombre de la mascota debe comenzar con una letra mayúscula.</p>}

      <label>Nombre Dueño</label>
      <input
        type="text"
        name="duenio"
        value={nuevaCita.duenio}
        onChange={AgregarCita}
        placeholder="Nombre del dueño"
      />
      {errores.duenio && <p>El nombre del dueño debe comenzar con una letra mayúscula.</p>}

      <label>Fecha</label>
      <input
        type="date"
        name="fecha"
        value={nuevaCita.fecha}
        onChange={AgregarCita}
        min={obtenerFechaHoy()}
      />
      {errores.fecha && <p style={{ color: 'red' }}>No puedes seleccionar una fecha pasada.</p>}

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
