import type { GetServerSideProps, NextPage } from 'next'
import { useEffect, useState } from 'react'
import styles from '../styles/home.module.scss'

interface HomeProps{
  posts:Posts[]
}

interface Posts {
  id:string
  title:string
}
const Home = ({posts}:HomeProps) => {

  // const [posts, setPosts] = useState<Posts[]>([])

  // useEffect(() => {
  //   fetch('http://localhost:3333/posts').then(response =>{
  //     response.json().then(data =>{
  //       setPosts(data)
  //     })
  //   })
  // }, [])

  return (
    <>
      <div>
        <h1 className={styles.title} >Posts</h1>
        <ul>
          {posts.map(post =>(
            <li key={post.id} >{post.title}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export const getServerSideProps:GetServerSideProps<HomeProps> = async () =>{
  const response = await fetch('http://localhost:3333/posts')
  const posts = await response.json()

  return{
    props:{
      posts,
    }
  }
}

export default Home
