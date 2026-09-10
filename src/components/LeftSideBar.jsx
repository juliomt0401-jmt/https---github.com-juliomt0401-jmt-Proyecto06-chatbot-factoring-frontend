function LeftSidebar() {
  return (
    <aside className="left-sidebar">
      <h2>Agente de Factoring</h2>

      <div className="provider-card">
        <h3>Proveedor nuevo</h3>
        <p>Documentación requerida</p>

        <ul>
          <li>Copia literal</li>
          <li>Ficha RUC</li>
          <li>Reporte Tributario de Terceros</li>
          <li>DNI de cada representante legal</li>
          <li>Vigencia de poder</li>
        </ul>
      </div>

      <p className="provider-note">
        Los documentos deben provenir de fuentes oficiales.
      </p>
    </aside>
  )
}

export default LeftSidebar