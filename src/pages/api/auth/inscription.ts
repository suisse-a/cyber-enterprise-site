import bcrypt from 'bcryptjs'
import { prisma } from '../../../lib/prisma'
import { z } from 'zod'

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') return res.status(405).end()

  const { email, password } = schema.parse(req.body)
  const hashed = bcrypt.hashSync(password, 10)

  try {
    const user = await prisma.user.create({
      data: { email, password: hashed },
    })
    res.status(201).json({ message: 'Utilisateur créé' })
  } catch (e) {
    res.status(400).json({ error: 'Email déjà utilisé' })
  }
}
