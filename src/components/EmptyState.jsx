function EmptyState({ department, onReset }) {
  return (
    <section className="empty-state">
      <h2 className="empty-state-title">Belum ada role di {department}</h2>
      <p className="empty-state-text">
        Posisi untuk department ini sedang disiapkan. Coba pilih department lain, atau lihat semua role yang sedang dibuka.
      </p>
      <button className="empty-state-button" onClick={onReset}>Lihat semua role</button>
    </section>
  )
}

export default EmptyState