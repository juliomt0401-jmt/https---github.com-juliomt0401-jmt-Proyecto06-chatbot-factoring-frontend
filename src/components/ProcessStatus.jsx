function ProcessStatus() {
  return (
    <aside className="process-status">
      <h2>Estado de la cotización</h2>

      <div className="process-step active">
        <span>1</span>
        <p>Identificación</p>
      </div>

      <div className="process-step">
        <span>2</span>
        <p>Datos (facturas)</p>
      </div>

      <div className="process-step">
        <span>3</span>
        <p>Evaluación</p>
      </div>

      <div className="process-step">
        <span>4</span>
        <p>Cotización</p>
      </div>
    </aside>
  )
}

export default ProcessStatus