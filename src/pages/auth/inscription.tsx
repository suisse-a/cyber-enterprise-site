import { useState } from 'react'
import { useRouter } from 'next/router'

export default function Inscription() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await fetch('/api/auth/inscription', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    })
    const data = await res.json()
    if (res.ok) router.push('/auth/connexion')
    else alert(data.error || 'Erreur inconnue')
  }

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Inscription</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          required
          className="w-full border px-3 py-2 rounded"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Mot de passe (6 car.)"
          required
          className="w-full border px-3 py-2 rounded"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bg-slate-800 text-white px-4 py-2 rounded">Créer mon compte</button>
      </form>
    </div>
  )
}
