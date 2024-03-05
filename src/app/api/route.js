import { PrismaClient } from "@prisma/client"

const db = new PrismaClient()

async function main() {
  // await db.user.create({
  //   data: {
  //     name: 'Alice',
  //     email: 'alice@db.io',
  //     posts: {
  //       create: { title: 'Hello World' },
  //     },
  //     profile: {
  //       create: { bio: 'I like turtles' },
  //     },
  //   },
  // })
  await db.post.create({
    data: {
      title: 'title',
      authorId: 1
    },
  })

  const allUsers = await db.user.findMany({
    include: {
      posts: true,
      profile: true,
    },
  })

  const post1 = await db.post.findFirst({
    include: {
      author: true
    }
  })
  console.log(allUsers[0], post1)
}

// main()
//   .then(async () => {
//     await db.$disconnect()
//   })
//   .catch(async (e) => {
//     console.error(e)
//     await db.$disconnect()
//   })

export const GET = () => {
  return new Response(JSON.stringify("GET"))
}

export const POST = async (request) => {

  const data = request.formData()
  // const data = request.body
  console.log(data)
  return new Response('POST')
}