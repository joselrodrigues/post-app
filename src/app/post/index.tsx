'use client'

import { PostWithUser } from '@/app/api/posts/route'
import { Card } from '@joselrodrigues/comment-ui'
import { useRouter } from 'next/navigation'

interface PostComponentProps {
  data: PostWithUser[]
}

/**
 * Renders a list of posts as cards.
 * @param {PostComponentProps} props - The props for the PostComponent.
 * @returns {JSX.Element} The rendered PostComponent.
 */
const PostComponent = ({ data: posts }: PostComponentProps): JSX.Element => {
  const router = useRouter()

  return (
    <main className="flex min-h-screen flex-wrap justify-center p-24">
      {posts?.map(({ title, id, body, user: { name } }) => (
        <Card
          key={id}
          title={title}
          username={name}
          description={body}
          onClick={() => router.push(`post/${id}`)}
        />
      ))}
    </main>
  )
}
export default PostComponent
