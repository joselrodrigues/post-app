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

export async function GET(request: Request, { params }) {
  const commentsResponse = await fetch(
    `${process.env.API}/posts/${params.id}/comments`
  )
  const comments: Post[] = await commentsResponse.json()
  //
  const postResponse = await fetch(`${process.env.API}/posts/${params.id}`)
  const post: User[] = await postResponse.json()
  //
  // const userMap: Record<number, User> = users.reduce(
  //   (acc: Record<number, User>, user) => {
  //     acc[user.id] = user
  //     return acc
  //   },
  //   {}
  // )
  //
  // const postsWithUser: PostWithUser[] = posts.map((post) => {
  //   return { ...post, user: userMap[post.userId] }
  // })
  return NextResponse.json({ comments, post })
}
