import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function AuthGuard({ children, role }: { children: React.ReactNode; role?: string }) {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'loading') return
    if (!session) router.push('/auth/connexion')
    if (role && session?.user?.role !== role) router.push('/')
  }, [session, status, router, role])

  if (status === 'loading') return <p>Chargement…</p>
  if (!session) return null

  return <>{children}</>
}
