import { useState } from "react"
import FilterChips from './components/FilterChips'
import RoleCard from './components/RoleCard'
import { ROLES } from './data/roles'
import EmptyState from './components/EmptyState'
import './App.css'


function App() {

  const [selected, setSelected] = useState("Semua")
  const filteredRoles = ROLES.filter((role) => role.department === selected || selected === "Semua")

  return (
    <main className="page">
      <header className="page-header">
        <h1>
          Temukan role yang cocok buat kamu
        </h1>
        <p>Pilih department untuk melihat posisi yang sedang dibuka</p>
      </header>
      
      <FilterChips selected={selected} onSelect={setSelected} />

      <div className="result-bar">
        <p>
          <strong>{filteredRoles.length}</strong> role {selected === "Semua" ? "di semua department" : "di " + selected}
        </p>
         {selected !== "Semua" && (
            <button className="reset-link" onClick={() => setSelected("Semua")}>Reset Filter</button>
          )} 
      </div>

      <div className="role-grid">
        {filteredRoles.map((role) => (
          <RoleCard key={role.id} role={role} />
        ))}
      </div>
      
      {filteredRoles.length === 0 && <EmptyState department={selected} onReset={() => setSelected("Semua")} />}
    </main>
  )
}

export default App