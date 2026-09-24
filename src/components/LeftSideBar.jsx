function LeftSidebar() {
  return (
    <aside className="left-sidebar">
      <h2>Asistente Virtual (IA) de Factoring</h2>

      <div className="provider-card">
        <h3 className="sidebar-title">
          <span className="sidebar-icon">✓</span>
          Quiénes somos
        </h3>
        <p>Una fintech especializada en factoring con procesos 100% digitales.</p>

        <h3 className="sidebar-title">
          <span className="sidebar-icon">S</span>
          SBS
        </h3>
        <p>
          Inscritos en el Registro de Empresas de Factoring no comprendidas
          en el ámbito de la Ley General.
        </p>

        <h3 className="sidebar-title">
          <span className="sidebar-icon">C</span>
          CAVALI
        </h3>
        <p>Registrados como participantes de CAVALI.</p>

        <h3 className="sidebar-title">
          <span className="sidebar-icon">$</span>
          Factoring sin recurso
        </h3>
        <p>Convierte tus facturas por cobrar en liquidez.</p>
        <ul>
          <li>Operaciones en soles</li>
          <li>Desde S/ 100</li>
          <li>Plazo mínimo: 15 días</li>
          <li>Tasa y adelanto según pagador</li>
        </ul>

        <h3 className="sidebar-title">
          <span className="sidebar-icon">!</span>
          Libro de reclamaciones
        </h3>
          <ul><li>Libro de reclamaciones</li></ul>
      </div>
    </aside>
  )
}

export default LeftSidebar