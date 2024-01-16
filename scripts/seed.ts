const { PrismaClient } = require('@prisma/client')

const database = new PrismaClient()

async function main() {
  try {
    await database.category.createMany({
      data: [
        { name: 'Running Races' },
        { name: 'Fitness Races' },
        { name: 'Bike Races' },
        { name: 'Sports' },
        { name: 'Body Composition' },
        { name: 'Health' },
      ]
    })

    console.log('Success')
  } catch (error) {
    console.log('Error seeding the database categories', error)
  } finally {
    await database.$disconnect()
  }
}

main()