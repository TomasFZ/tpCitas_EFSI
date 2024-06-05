import { useEffect, useState } from "react";
function Formulario(citas){
    
    const cita = {}
    function setCitas(cita){
        citas.push(cita)
    }

    return (
        <>
            <form onSubmit={setCitas(cita)}>
                <label>Nombre Mascota</label>
                <input type="text" name="mascota" placeholder="Nombre de la mascota"></input>
                {cita.nombreMascota = document.getElementsByName("mascota")}

                <label>Nombre Dueño</label>
                <input type="text" name="duenio" placeholder="Nombre del dueño"></input>
                {cita.nombreDuenio = document.getElementsByName("duenio")}

                <label>Fecha</label>
                <input type="date" name="fecha"></input>
                {cita.fecha = document.getElementsByName("fecha")}

                <label>Hora</label>
                <input type="time" name="hora"></input>
                {cita.hora = document.getElementsByName("hora")}

                <label>Síntomas</label>
                <input type="text" name="sintomas"></input>
                {cita.sintomas = document.getElementsByName("sintomas")}

                <button type="submit" className="botonAgregar">Agregar cita</button>
            </form>
        </>
        );
      }
    export default Formulario;