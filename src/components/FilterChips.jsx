import { DEPARTMENTS, ROLES } from "../data/roles"

function countRoles(dept) {
    if (dept === "Semua") {
        return ROLES.length
    }
    return ROLES.filter((role) => role.department === dept).length
}

function FilterChips({ selected, onSelect }) {
  return (
    <div className="chips">
      <button className="chip" aria-pressed={selected === "Semua"} onClick={() => onSelect("Semua")}>Semua <span className="chip-count">{countRoles("Semua")}</span></button>

      {DEPARTMENTS.map((dept) => (
        <button className="chip" key={dept} aria-pressed={selected === dept} onClick={() => onSelect(dept)}>{dept} <span className="chip-count">{countRoles(dept)}</span></button>
      ))}
    </div>
  )
}

export default FilterChips