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

  const email = session.user?.email as string
  const user = await prisma.user.findUnique({ where: { email }, select: { id: true } })
  if (!user) return res.status(404).json({ error: 'Utilisateur introuvable' })

  const userId = user.id

  if (req.method === 'GET') {
    const messages = await prisma.message.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' }
    })
    return res.json(messages)
  }

  if (req.method === 'POST') {
    const { content } = req.body
    const msg = await prisma.message.create({ data: { content, userId } })
    return res.json(msg)
  }

  res.status(405).end()
}
