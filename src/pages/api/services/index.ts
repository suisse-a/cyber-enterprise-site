import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '../auth/[...nextauth]'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions)
  if (!session) return res.status(401).end()

  // ⚠️ NextAuth ne renvoie pas « id » par défaut → on le récupère via l’e-mail
  const email = session.user?.email as string
  const user = await prisma.user.findUnique({ where: { email }, select: { id: true } })
  if (!user) return res.status(404).json({ error: 'Utilisateur introuvable' })

  const userId = user.id

  if (req.method === 'GET') {
    const services = await prisma.service.findMany({ where: { userId } })
    return res.json(services)
  }

  if (req.method === 'POST') {
    const { name } = req.body
    const service = await prisma.service.create({ data: { name, userId } })
    return res.json(service)
  }

  res.status(405).end()
}
