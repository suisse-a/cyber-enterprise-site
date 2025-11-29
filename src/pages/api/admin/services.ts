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
    const services = await prisma.service.findMany({
      include: { user: { select: { email: true } } },
      orderBy: { createdAt: 'desc' }
    })
    return res.json(services)
  }

  if (req.method === 'PATCH') {
    const { id, status } = req.body
    await prisma.service.update({ where: { id: Number(id) }, data: { status } })
    return res.json({ ok: true })
  }

  if (req.method === 'DELETE') {
    const { id } = req.body
    await prisma.service.delete({ where: { id: Number(id) } })
    return res.json({ ok: true })
  }

  res.status(405).end()
}
