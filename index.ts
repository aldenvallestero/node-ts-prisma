import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const newUser = await prisma.user.create({
    data: {
      name: 'Alden',
      email: 'alden@prisma.io',
      password: 'pass123',
      profile: {
        create: {
          role: 'Student'
        }
      }
    },
  })
  console.log('Created new user: ', newUser)

  const allUsers = await prisma.user.findMany()
  console.log('All users: ')
  console.dir(allUsers, { depth: null })
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect())
