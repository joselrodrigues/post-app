'use client'

import { Card, Post } from '@joselrodrigues/comment-ui'

const PostComponent = ({ data }) => {
  return (
    <main className="flex min-h-screen flex-wrap justify-center p-24">
      {data?.map(({ title, id, body, user: { name } }) => (
        <Card
          title={title}
          username={name}
          description={body}
          key={id}
          onClick={(e) => console.log(title, id, body)}
        />
      ))}
    </main>
  )
}
export default PostComponent
