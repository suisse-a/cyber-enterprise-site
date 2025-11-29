import AuthGuard from '@/components/AuthGuard'
import { useEffect, useState } from 'react'

type User = { id: number; email: string; role: string; createdAt: string; _count: { services: number; messages: number } }
type Service = { id: number; name: string; status: string; user: { email: string }; createdAt: string }
type Message = { id: number; content: string; createdAt: string; user: { email: string } }

export default function Admin() {
  const [users, setUsers] = useState<User[]>([])
  const [services, setServices] = useState<Service[]>([])
  const [messages, setMessages] = useState<Message[]>([])

  useEffect(() => {
    fetch('/api/admin/users').then(r => r.json()).then(setUsers)
    fetch('/api/admin/services').then(r => r.json()).then(setServices)
    fetch('/api/admin/messages').then(r => r.json()).then(setMessages)
  }, [])

  const changeRole = async (id: number, role: string) => {
    await fetch('/api/admin/users', { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id, role }) })
    setUsers(users.map(u => u.id === id ? { ...u, role } : u))
  }

  const deleteUser = async (id: number) => {
    if (!confirm('Supprimer cet utilisateur ?')) return
    await fetch('/api/admin/users', { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id }) })
    setUsers(users.filter(u => u.id !== id))
  }

  const updateStatus = async (id: number, status: string) => {
    await fetch('/api/admin/services', { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id, status }) })
    setServices(services.map(s => s.id === id ? { ...s, status } : s))
  }

  const deleteService = async (id: number) => {
    if (!confirm('Supprimer ce service ?')) return
    await fetch('/api/admin/services', { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id }) })
    setServices(services.filter(s => s.id !== id))
  }

  return (
    <AuthGuard role="ADMIN">
      <div className="admin">
        <h1>Tableau de bord Admin</h1>

        <section>
          <h2>Utilisateurs ({users.length})</h2>
          <table>
            <thead>
              <tr><th>ID</th><th>Email</th><th>Rôle</th><th>Créé le</th><th>Services</th><th>Messages</th><th>Actions</th></tr>
            </thead>
            <tbody>
              {users.map(u => (
                <tr key={u.id}>
                  <td>{u.id}</td>
                  <td>{u.email}</td>
                  <td>
                    <select value={u.role} onChange={e => changeRole(u.id, e.target.value)}>
                      <option value="USER">USER</option>
                      <option value="ADMIN">ADMIN</option>
                    </select>
                  </td>
                  <td>{new Date(u.createdAt).toLocaleDateString()}</td>
                  <td>{u._count.services}</td>
                  <td>{u._count.messages}</td>
                  <td><button className="btn-danger" onClick={() => deleteUser(u.id)}>Supprimer</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section>
          <h2>Services ({services.length})</h2>
          <table>
            <thead>
              <tr><th>ID</th><th>Nom</th><th>Client</th><th>Statut</th><th>Créé le</th><th>Actions</th></tr>
            </thead>
            <tbody>
              {services.map(s => (
                <tr key={s.id}>
                  <td>{s.id}</td>
                  <td>{s.name}</td>
                  <td>{s.user.email}</td>
                  <td>
                    <select value={s.status} onChange={e => updateStatus(s.id, e.target.value)}>
                      <option value="DISPONIBLE">DISPONIBLE</option>
                      <option value="EN_COURS">EN_COURS</option>
                      <option value="TERMINE">TERMINE</option>
                    </select>
                  </td>
                  <td>{new Date(s.createdAt).toLocaleDateString()}</td>
                  <td><button className="btn-danger" onClick={() => deleteService(s.id)}>Supprimer</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section>
          <h2>Messages ({messages.length})</h2>
          <ul className="msg-list">
            {messages.map(m => (
              <li key={m.id}>
                <strong>{m.user.email}</strong> – {new Date(m.createdAt).toLocaleString()}
                <p>{m.content}</p>
              </li>
            ))}
          </ul>
        </section>

        <style jsx>{`
          .admin { max-width: 1200px; margin: auto; padding: 2rem 1rem; }
          h1 { margin-bottom: 2rem; }
          h2 { margin-top: 3rem; margin-bottom: 1rem; }
          table { width: 100%; border-collapse: collapse; font-size: 0.9rem; }
          th, td { padding: 0.5rem 0.75rem; border-bottom: 1px solid #e5e7eb; text-align: left; }
          th { background: #f9fafb; font-weight: 600; }
          select { padding: 0.25rem 0.5rem; font-size: 0.875rem; }
          .btn-danger { background: #b91c1c; color: #fff; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.875rem; }
          .msg-list { list-style: none; padding: 0; }
          .msg-list li { background: #f9fafb; border-left: 4px solid #0369a1; padding: 1rem; margin-bottom: 1rem; }
        `}</style>
      </div>
    </AuthGuard>
  )
}
