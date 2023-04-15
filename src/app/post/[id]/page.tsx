'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import useSWR from 'swr'
import { Post } from '@joselrodrigues/comment-ui'
import { fetcher } from '@/app/utils'

/**
 * The expected shape of the props for the PostComponent.
 * @typedef {Object} PostComponentProps
 * @property {Object} params - The params object containing the post id.
 * @property {string} params.id - The id of the post.
 */
interface PostComponentProps {
  params: {
    id: string
  }
}

/**
 * The PostComponent displays a post with its comments.
 * @param {PostComponentProps} props - The props for the PostComponent.
 * @returns {JSX.Element} The PostComponent.
 */
const PostComponent: React.FC<PostComponentProps> = ({ params }) => {
  const [post, setPost] = useState({ title: null, id: null, body: null })
  const router = useRouter()
  const { data, error } = useSWR(`/api/posts/${params.id}/comments`, fetcher)

  return (
    <main className="flex min-h-screen flex-wrap justify-center p-24">
      {data && !error && (
        <Post
          title={data?.post?.title}
          body={data?.post?.body}
          comments={data?.comments}
          isOpen={true}
          onClose={() => router.push('/')}
        />
      )}
    </main>
  )
}

export default PostComponent
