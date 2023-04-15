import { NextResponse } from 'next/server'

interface Params {
  id: string
}
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

/**
 * Fetches the comments and post data for the given post ID.
 * @param {Request} request - The request object.
 * @param {{params: Params}} params - The parameters object containing the post ID.
 * @returns {Promise<NextResponse>} A NextResponse containing the comments and post data.
 */
export async function GET(request: Request, { params }: { params: Params }) {
  const commentsResponse = await fetch(
    `${process.env.API}/posts/${params.id}/comments`
  )
  const comments: Post[] = await commentsResponse.json()

  const postResponse = await fetch(`${process.env.API}/posts/${params.id}`)
  const post: User[] = await postResponse.json()

  return NextResponse.json({ comments, post })
}
