// "use client"
//
// import {Card, Post} from "@joselrodrigues/comment-ui";
// import useSWR from "swr";
// import Link from "next/link";
// import {useState} from "react";
// const fetcher = (...args) => fetch(...args).then(res => res.json())
// export default function Home({searchParams}) {
//     const [showFullPostInfo, setShowFullPostInfo] = useState(false)
//
//     const { data, error, isLoading } = useSWR(`api/posts`, fetcher)
//     console.log(data)
//     return (
//         <main className="flex min-h-screen flex-wrap justify-center p-24">
//             {searchParams?.id && (
//                 <Post title={'hola'} body={'hola'} comments={[{
//                     id: 1,
//                     name: 'John Doe',
//                     email: 'john@example.com',
//                     body: 'This is a sample comment.',
//                 }]} isOpen={showFullPostInfo} onClose={()=>setShowFullPostInfo(false)}/>
//             )}
//
//             {data?.posts?.map(({body,title,id,name})=> {
//                     return <Link href={`?id=${id}`} key={id}>
//                         <Card title={title} username={name} description={body} onClick={() => setShowFullPostInfo(true)}/>
//                     </Link>
//                 }
//             )}
//         </main>
//     )
// }


// import { Card, Post } from "@joselrodrigues/comment-ui";
// import useSWR from "swr";
// import { useRouter } from 'next/navigation';
// import { useState, useEffect } from "react";
//
// const fetcher = (...args) => fetch(...args).then((res) => res.json());
//
// export default function Home({searchParams}) {
//     const router = useRouter()
//     const postId = searchParams?.id;
//     const [selectedPost, setSelectedPost] = useState(null);
//
//     const { data, error, isLoading } = useSWR("api/posts", fetcher);
//
//     useEffect(() => {
//
//         if (postId) {
//             const fetchPost = async () => {
//                 const postData = await fetcher(`https://jsonplaceholder.typicode.com/posts/${postId}`);
//                 const postComments = await fetcher(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
//                 setSelectedPost({...postData,comments: [...postComments]});
//             };
//             fetchPost();
//         } else {
//             setSelectedPost(null);
//         }
//     }, [postId]);
//
//     const closePost = () => {
//         setSelectedPost(null);
//         router.push("/", undefined, { shallow: true });
//     };
//
//     return (
//         <main className="flex min-h-screen flex-wrap justify-center p-24">
//             {selectedPost &&(
//                 <Post
//                     title={selectedPost?.title}
//                     body={selectedPost?.body}
//                     comments={selectedPost.comments}
//                     isOpen={true}
//                     onClose={closePost}
//                 />
//             )}
//
//             {data?.posts?.map(({ body, title, id, name }) => (
//                     <Card
//                         title={title}
//                         username={name}
//                         description={body}
//                         key={id}
//                         onClick={()=>{
//                             router.push(`?id=${id}`)
//                         }}
//                     />
//             ))}
//         </main>
//     );
// }



// import useSWR from "swr";
// import { useRouter } from 'next/navigation';
// import { useState, useEffect } from "react";

// const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default async function Home({searchParams}) {
    // const router = useRouter()
    // const postId = searchParams?.id;
    // const [selectedPost, setSelectedPost] = useState(null);
    //
    // const { data, error, isLoading } = useSWR("api/posts", fetcher);

    // useEffect(() => {
    //
    //     if (postId) {
    //         const fetchPost = async () => {
    //             const postData = await fetcher(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    //             const postComments = await fetcher(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
    //             setSelectedPost({...postData,comments: [...postComments]});
    //         };
    //         fetchPost();
    //     } else {
    //         setSelectedPost(null);
    //     }
    // }, [postId]);

    // const closePost = () => {
    //     setSelectedPost(null);
    //     router.push("/", undefined, { shallow: true });
    // };

    return (
        // <main className="flex min-h-screen flex-wrap justify-center p-24">
        //     <Card
        //         title={'hola'}
        //         username={'hola'}
        //         description={'hola'}
        //
        //         onClick={()=>{
        //             console.log('test')
        //             // router.push(`?id=${id}`)
        //         }}
        //     />

            {/*{selectedPost &&(*/}
            {/*    <Post*/}
            {/*        title={selectedPost?.title}*/}
            {/*        body={selectedPost?.body}*/}
            {/*        comments={selectedPost.comments}*/}
            {/*        isOpen={true}*/}
            {/*        onClose={closePost}*/}
            {/*    />*/}
            {/*)}*/}

            {/*{data?.posts?.map(({ body, title, id, name }) => (*/}
            {/*    <Card*/}
            {/*        title={title}*/}
            {/*        username={name}*/}
            {/*        description={body}*/}
            {/*        key={id}*/}
            {/*        onClick={()=>{*/}
            {/*            router.push(`?id=${id}`)*/}
            {/*        }}*/}
            {/*    />*/}
            {/*))}*/}
        // </main>
    );
}
