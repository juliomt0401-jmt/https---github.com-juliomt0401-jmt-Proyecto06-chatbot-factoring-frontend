function ProcessStatus({ etapa }) {
  return (
    <aside className="process-status">
      <div className="status-card">
        <h2>Estado de la cotización</h2>

        <div className={`process-step ${etapa === 'identificacion' ? 'active' : ''}`}>
          <span>1</span>
          <p>Identificación</p>
        </div>

        <div className={`process-step ${etapa === 'facturas' ? 'active' : ''}`}>
          <span>2</span>
          <p>Datos (facturas)</p>
        </div>

        <div className={`process-step ${etapa === 'evaluacion' ? 'active' : ''}`}>
          <span>3</span>
          <p>Evaluación</p>
        </div>

        <div className={`process-step ${etapa === 'cotizacion' ? 'active' : ''}`}>
          <span>4</span>
          <p>Cotización</p>
        </div>
      </div>
    </aside>
  )
}

export default ProcessStatus