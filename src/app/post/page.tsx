import Post from '@/app/post/index'

export async function getData() {
  let resp = await fetch(`${process.env.HOST}/api/posts`, { cache: 'no-store' })

  return resp.json()
}
export default async function Home() {
  const data = await getData()

  return <Post data={data.posts} />
}
