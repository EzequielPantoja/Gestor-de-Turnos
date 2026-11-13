import React, { useState } from 'react';

const FormularioTurno = ({ onAgregar }) => {
  const [datos, setDatos] = useState({ paciente: '', especialidad: '', fecha: '', hora: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!datos.paciente || !datos.fecha) return;
    onAgregar(datos);
    setDatos({ paciente: '', especialidad: '', fecha: '', hora: '' }); // Resetea el form
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Nombre del Paciente</label>
        <input type="text" placeholder="Ej. Ezequiel Pantoja" value={datos.paciente} onChange={e => setDatos({...datos, paciente: e.target.value})} required />
      </div>
      <div className="form-group">
        <label>Especialidad</label>
        <select value={datos.especialidad} onChange={e => setDatos({...datos, especialidad: e.target.value})} required>
          <option value="">Seleccione...</option>
          <option value="Clínica Médica">Clínica Médica</option>
          <option value="Cardiología">Cardiología</option>
          <option value="Odontología">Odontología</option>
          <option value="Traumatología">Traumatología</option>
        </select>
      </div>
      <div className="form-group-row">
        <div className="form-group half">
          <label>Fecha</label>
          <input type="date" value={datos.fecha} onChange={e => setDatos({...datos, fecha: e.target.value})} required />
        </div>
        <div className="form-group half">
          <label>Hora</label>
          <input type="time" value={datos.hora} onChange={e => setDatos({...datos, hora: e.target.value})} required />
        </div>
      </div>
      <button type="submit" className="btn-primary">Agendar Turno</button>
    </form>
  );
};

export default FormularioTurno;