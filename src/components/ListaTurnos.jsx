import React from 'react';

const ListaTurnos = ({ turnos }) => {
  if (turnos.length === 0) return <p className="empty-state">No hay turnos agendados para hoy.</p>;

  return (
    <div className="lista-turnos">
      {turnos.map(turno => (
        <div key={turno.id} className="turno-item">
          <div className="turno-info">
            <h4>{turno.paciente}</h4>
            <p className="especialidad">🩺 {turno.especialidad}</p>
            <p className="fecha-hora">📅 {turno.fecha} | ⏰ {turno.hora}</p>
          </div>
          <div className="turno-estado">
            <span className="badge">Confirmado</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListaTurnos;