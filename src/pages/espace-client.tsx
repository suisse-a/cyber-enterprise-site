import AuthGuard from '@/components/AuthGuard'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'

type Service = { id: number; name: string; status: string; createdAt: string }
type Message = { id: number; content: string; createdAt: string }

export default function EspaceClient() {
  const { data: session } = useSession()
  const [services, setServices] = useState<Service[]>([])
  const [messages, setMessages] = useState<Message[]>([])
  const [newMsg, setNewMsg] = useState('')
  const [password, setPassword] = useState('')
  const [confirmText, setConfirmText] = useState('')
  const [showDelete, setShowDelete] = useState(false)

  useEffect(() => {
    fetch('/api/services').then(r => r.json()).then(setServices)
    fetch('/api/messages').then(r => r.json()).then(setMessages)
  }, [])

  const sendMessage = async () => {
    if (!newMsg.trim()) return
    const msg = await fetch('/api/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: newMsg })
    }).then(r => r.json())
    setMessages([msg, ...messages])
    setNewMsg('')
  }

  const deleteAccount = async () => {
    if (confirmText !== 'SUPPRIMER') return alert('Veuillez taper SUPPRIMER')
    const res = await fetch('/api/account/delete', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password, confirmation: confirmText })
    })
    if (res.ok) {
      alert('Compte supprimé')
      location.href = '/'
    } else {
      alert('Erreur – mot de passe ou texte incorrect')
    }
  }

  const statusLabel: Record<string, string> = {
    DISPONIBLE: 'Disponible',
    EN_COURS: 'En cours',
    TERMINE: 'Terminé'
  }

  return (
    <AuthGuard>
      <div className="card">
        <h1>Mon espace client</h1>
        <p>Connecté en tant que <strong>{session?.user?.email}</strong></p>

        <h2>Mes services</h2>
        {services.length === 0 && <p>Aucun service commandé pour le moment.</p>}
        <ul className="service-list">
          {services.map(s => (
            <li key={s.id}>
              <span>{s.name}</span>
              <span className={`status ${s.status}`}>{statusLabel[s.status]}</span>
            </li>
          ))}
        </ul>

        <h2>Contacter l’administrateur</h2>
        <textarea
          value={newMsg}
          onChange={e => setNewMsg(e.target.value)}
          placeholder="Votre question ou commentaire…"
          rows={4}
        />
        <button onClick={sendMessage}>Envoyer</button>

        <h3>Historique</h3>
        {messages.length === 0 && <p>Aucun message envoyé.</p>}
        <ul className="msg-list">
          {messages.map(m => (
            <li key={m.id}>
              <p>{m.content}</p>
              <small>{new Date(m.createdAt).toLocaleString()}</small>
            </li>
          ))}
        </ul>

        <h2 className="danger">Zone de danger</h2>
        {!showDelete ? (
          <button className="btn-danger" onClick={() => setShowDelete(true)}>Supprimer mon compte</button>
        ) : (
          <div className="delete-box">
            <p>Pour confirmer, tapez <strong>SUPPRIMER</strong> ci-dessous et entrez votre mot de passe.</p>
            <input
              type="password"
              placeholder="Mot de passe"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <input
              type="text"
              placeholder="SUPPRIMER"
              value={confirmText}
              onChange={e => setConfirmText(e.target.value)}
            />
            <div className="delete-actions">
              <button onClick={deleteAccount} className="btn-danger">Confirmer la suppression</button>
              <button onClick={() => setShowDelete(false)}>Annuler</button>
            </div>
          </div>
        )}

        <style jsx>{`
          h2 { margin-top: 2rem; margin-bottom: 1rem; }
          .service-list { list-style: none; padding: 0; }
          .service-list li {
            display: flex;
            justify-content: space-between;
            padding: 0.5rem 0;
            border-bottom: 1px solid #e5e7eb;
          }
          .status {
            padding: 0.2rem 0.6rem;
            border-radius: 12px;
            font-size: 0.75rem;
            font-weight: 600;
          }
          .DISPONIBLE { background: #dbeafe; color: #1e40af; }
          .EN_COURS { background: #fef3c7; color: #92400e; }
          .TERMINE { background: #d1fae5; color: #065f46; }

          textarea {
            width: 100%;
            padding: 0.75rem;
            border: 1px solid #d1d5db;
            border-radius: 6px;
            margin-bottom: 1rem;
          }
          button {
            background: #0b1220;
            color: #fff;
            padding: 0.5rem 1rem;
            border-radius: 6px;
            font-weight: 600;
          }
          .msg-list { list-style: none; padding: 0; margin-top: 1rem; }
          .msg-list li {
            background: #f9fafb;
            border-left: 4px solid #0369a1;
            padding: 0.75rem 1rem;
            margin-bottom: 0.75rem;
          }
          .msg-list small { color: #6b7280; }

          .danger { color: #b91c1c; }
          .btn-danger {
            background: #b91c1c;
            color: #fff;
          }
          .btn-danger:hover { background: #dc2626; }
          .delete-box {
            background: #fef2f2;
            border: 1px solid #fca5a5;
            border-radius: 8px;
            padding: 1rem;
            margin-top: 1rem;
          }
          .delete-actions {
            display: flex;
            gap: 1rem;
            margin-top: 1rem;
          }
        `}</style>
      </div>
    </AuthGuard>
  )
}
