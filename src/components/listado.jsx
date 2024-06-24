//import { useEffect, useState } from "react";
//import {citas, setCitas} from "App.jsx";
function Listado({citas, setCitas}){ //citas para recorrer, setCitas para borrarlas. 

    const eliminarCita = (i) => {
        const nuevasCitas = [...citas];
        nuevasCitas.splice(i, 1);
        setCitas(nuevasCitas);
    }


    return (
        <>
                {citas.map((cita, i) => (
                    <div className="cita" key={i}>
                    <p>Mascota: <span>{cita.mascota}</span></p>
                    <p>Dueño: <span>{cita.duenio}</span></p>
                    <p>Fecha: <span>{cita.fecha}</span></p>
                    <p>Hora: <span>{cita.hora}</span></p>
                    <p>Sintomas: <span>{cita.sintomas}</span></p>
                    <button onClick={() => eliminarCita(i)}>Eliminar</button>
                    </div>
                ))}
        </>
        );
      }
export default Listado;