import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  const email = 'admin@cyber-enterprise.fr' // ← ton e-mail
  const password = 'Admin1234!' // ← change ici
  const hashed = bcrypt.hashSync(password, 10)

  await prisma.user.upsert({
    where: { email },
    update: { role: 'ADMIN' },
    create: { email, password: hashed, role: 'ADMIN' }
  })

  console.log('✅ Admin créé / mis à jour')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
