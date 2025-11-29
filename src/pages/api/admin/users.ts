import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth/next'
import authOptions from '../auth/[...nextauth]'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions)
  if (!session) return res.status(401).end()

  const typedSession = session as {
    user: { id: string; email: string; role: string }
  }
  if (typedSession.user.role !== 'ADMIN') return res.status(403).end()

  if (req.method === 'GET') {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        email: true,
        role: true,
        createdAt: true,
        _count: { select: { services: true, messages: true } }
      },
      orderBy: { createdAt: 'desc' }
    })
    return res.json(users)
  }

  if (req.method === 'PATCH') {
    const { id, role } = req.body
    await prisma.user.update({ where: { id: Number(id) }, data: { role } })
    return res.json({ ok: true })
  }

  if (req.method === 'DELETE') {
    const { id } = req.body
    await prisma.user.delete({ where: { id: Number(id) } })
    return res.json({ ok: true })
  }

  res.status(405).end()
}
