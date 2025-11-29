import { useSession, signOut } from 'next-auth/react'
import Link from 'next/link'

export default function Layout({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession()

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-slate-800 text-white p-4 flex justify-between items-center">
        <Link href="/" className="font-bold text-lg">Cyber Enterprise</Link>
        <nav className="space-x-4">
          <Link href="/formation" className="hover:underline">Formation</Link>
          <Link href="/phishing" className="hover:underline">Phishing</Link>
          <Link href="/consulting" className="hover:underline">Consulting</Link>
          {session ? (
            <>
              <Link href="/espace-client" className="hover:underline">Mon espace</Link>
              {session.user?.role === 'ADMIN' && (
                <Link href="/admin" className="hover:underline">Admin</Link>
              )}
              <button onClick={() => signOut()} className="hover:underline">Déconnexion</button>
            </>
          ) : (
            <>
              <Link href="/auth/connexion" className="hover:underline">Connexion</Link>
              <Link href="/auth/inscription" className="hover:underline">Inscription</Link>
            </>
          )}
        </nav>
      </header>
      <main className="flex-1 p-6">{children}</main>
      <footer className="text-center text-sm text-gray-500 p-4">
        © 2025 Cyber Enterprise – Tous droits réservés
      </footer>
    </div>
  )
}
