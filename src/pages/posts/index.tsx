import { GetStaticProps } from 'next'
import React from 'react'

interface PostsProps{
  posts:Posts[]
}

interface Posts {
  id:string
  title:string
}

const Posts = ({posts}:PostsProps) =>{
    return(
        <>
            <h1>Listagem de posts</h1>
            <ul>
            {posts.map(post =>(
                <li key={post.id} >{post.title}</li>
            ))}
            </ul>
        </>
    )
}

export const getStaticProps: GetStaticProps<PostsProps> = async () =>{
    const response = await fetch('http://localhost:3333/posts')
    const posts = await response.json()
    return{
        props:{
            posts
        }
    }
}

export default Posts