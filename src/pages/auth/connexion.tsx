import { signIn } from 'next-auth/react'
import { useState } from 'react'
import { useRouter } from 'next/router'

export default function Connexion() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const res = await signIn('credentials', { redirect: false, email, password })
      console.log('signIn result', res)
      if (res?.ok) router.push('/espace-client')
      else alert('Identifiants invalides')
    } catch (err: any) {
      console.error('signIn error', err)
      alert('Erreur serveur : ' + err.message)
    }
  }

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Connexion</h1>
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
          placeholder="Mot de passe"
          required
          className="w-full border px-3 py-2 rounded"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bg-slate-800 text-white px-4 py-2 rounded">Se connecter</button>
      </form>
    </div>
  )
}
