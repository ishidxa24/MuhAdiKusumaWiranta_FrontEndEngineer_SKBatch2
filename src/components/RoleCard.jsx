import { useState } from "react"

function RoleCard({ role }) {
  const [isOpen, setIsOpen] = useState(false)
  const buttonText = isOpen ? "Tutup detail" : "Lihat detail"

  return (
    <article className="role-card">
      <div className="role-card-top">
        <span className={"dept-tag dept-tag--" + role.department.toLowerCase()}>{role.department}</span>
        <span className="role-card-deadline">Tutup {role.deadline}</span>
      </div>

      <h3 className="role-card-title">{role.title}</h3>

      <dl className="role-card-meta">
        <div>
          <dt>Lokasi</dt>
          <dd>{role.location}</dd>
        </div>
        <div>
          <dt>Tipe</dt>
          <dd>{role.type}</dd>
        </div>
        <div>
          <dt>Level</dt>
          <dd>{role.level}</dd>
        </div>
      </dl>

      {isOpen && <p className="role-card-desc">{role.description}</p>}

      <button
        className="role-card-link"
        aria-expanded={isOpen}
        aria-label={buttonText + " " + role.title}
        onClick={() => setIsOpen(!isOpen)}
      >
        {buttonText}
      </button>
    </article>
  )
}

export default RoleCard