import { NextResponse } from 'next/server'

interface User {
  id: number
  name: string
}

interface Post {
  userId: number
  id: number
  title: string
  body: string
}

export interface PostWithUser extends Post {
  user: User
}
/**
 * Fetches the posts and users data, and combines them into an array of PostWithUser objects.
 * @param {Request} request - The request object.
 * @returns {Promise<NextResponse>} A NextResponse containing the combined posts and users data as PostWithUser objects.
 */
export async function GET(request: Request) {
  const postsResponse = await fetch(`${process.env.API}/posts`)
  const posts: Post[] = await postsResponse.json()

  const usersResponse = await fetch(`${process.env.API}/users`)
  const users: User[] = await usersResponse.json()

  const userMap: Record<number, User> = users.reduce(
    (acc: Record<number, User>, user) => {
      acc[user.id] = user
      return acc
    },
    {}
  )

  const postsWithUser: PostWithUser[] = posts.map((post) => {
    return { ...post, user: userMap[post.userId] }
  })
  return NextResponse.json({ posts: postsWithUser })
}
