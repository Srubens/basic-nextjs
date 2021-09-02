import { GetStaticPaths, GetStaticProps } from "next"
import { useRouter } from "next/router"

interface Comment{
    id: string 
    body: string
}

interface CommentsProps{
    comments:Comment[]
}

export default function Post({comments}:CommentsProps) {
    /** PARA PEGAR O VALOR NA ROTA */
    const router = useRouter()

    if(router.isFallback){
        return(
            <p>Carregando...</p>
        )
    }

    return(
        <>
            <h1>Post  {router.query.id}</h1>
            <p>{router.asPath}</p>
            <ul>
                {comments.map(comment =>(
                    <li key={comment.id} >{comment.body}</li>
                ))}
            </ul>
        </>
    )
}

export const getStaticPaths:GetStaticPaths = async() =>{
    // const response = await fetch('http://localhost:3333/posts')
    // const posts = await response.json()
    // const paths = posts.map((post:any) =>{
    //     return {
    //         params:{
    //             id:String(post.id)
    //         }
    //     }
    // })

    return {
        paths:[],
        fallback:true
    }

}


export const getStaticProps: GetStaticProps<CommentsProps> = async context =>{

    const { id }:any = context.params
    const response = await fetch(`http://localhost:3333/comments?postId=${id}`)
    const comments = await response.json()

    return {
        props:{
            comments
        },
        revalidate:5
    }

}

