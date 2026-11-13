import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListaTurnos from './components/ListaTurnos';

function App() {
  const [turnos, setTurnos] = useState([
    { id: 1, paciente: 'Marcelo Gallardo', especialidad: 'Clínica médica', fecha: '2026-11-15', hora: '08:30' },
    { id: 2, paciente: 'Enzo Pérez', especialidad: 'Kinesiología', fecha: '2026-11-15', hora: '09:15' },
    { id: 3, paciente: 'Franco Armani', especialidad: 'Clínica médica', fecha: '2026-11-15', hora: '10:00' },
    { id: 4, paciente: 'Julián Álvarez', especialidad: 'Odontología', fecha: '2026-11-15', hora: '11:30' },
    { id: 5, paciente: 'Ignacio Scocco', especialidad: 'Traumatología', fecha: '2026-11-15', hora: '14:00' }
  ]);

  const agregarTurno = (nuevoTurno) => {
    setTurnos([...turnos, { ...nuevoTurno, id: Date.now() }]);
  };

  return (
    <div className="dark-dashboard">
      <aside className="sidebar">
        <div className="sidebar-logo">📅 Gestión de Turnos</div>
        <nav>
          <div className="nav-group">
            <h4>Especialidad</h4>
            <ul>
              <li className="active">✓ Clínica médica</li>
              <li>Odontología</li>
              <li>Kinesiología</li>
              <li>Traumatología</li>
            </ul>
          </div>
          <div className="nav-group">
            <h4>Médicos de Guardia</h4>
            <ul>
              <li>👨‍⚕️ Dr. Fernando López</li>
              <li>👩‍⚕️ Dra. Valeria Castro</li>
              <li>👨‍⚕️ Dr. Ricardo Silva</li>
            </ul>
          </div>
        </nav>
      </aside>
      
      <main className="main-content">
        <Header />
        <div className="dashboard-grid">
          <section className="panel turnos-panel">
            <div className="panel-header">
              <h3>Turnos del Día</h3>
              <div className="acciones-top">
                <button className="btn-outline-red">Cancelar</button>
                <button className="btn-outline-blue">Reagendar</button>
              </div>
            </div>
            <ListaTurnos turnos={turnos} />
          </section>
          
          <section className="panel form-panel">
            <div className="panel-header">
              <h3>Nuevo Turno</h3>
              <button className="close-btn">✕</button>
            </div>
            <p className="form-help">Por favor, confirmá tu asistencia con 24hs de anticipación.</p>
            <Formulario onAgregar={agregarTurno} />
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;