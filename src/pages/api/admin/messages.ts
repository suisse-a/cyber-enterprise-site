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
    const messages = await prisma.message.findMany({
      include: { user: { select: { email: true } } },
      orderBy: { createdAt: 'desc' }
    })
    return res.json(messages)
  }

  res.status(405).end()
}
