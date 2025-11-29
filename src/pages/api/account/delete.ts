import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth/next'
import authOptions from '../auth/[...nextauth]'
import bcrypt from 'bcryptjs'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions)
  if (!session) return res.status(401).end()

  // Force le type explicitement
  const typedSession = session as {
    user: { id: string; email: string; role: string }
  }
  const email = typedSession.user.email
  const user = await prisma.user.findUnique({
    where: { email },
    select: { id: true, password: true }
  })
  if (!user) return res.status(404).json({ error: 'Utilisateur introuvable' })

  const userId = user.id
  const { password, confirmation } = req.body

  if (confirmation !== 'SUPPRIMER')
    return res.status(400).json({ error: 'Texte incorrect' })
  if (!bcrypt.compareSync(password, user.password))
    return res.status(403).json({ error: 'Mot de passe invalide' })

  await prisma.user.delete({ where: { id: userId } })
  res.json({ ok: true })
}
