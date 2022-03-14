import React from 'react'
import Link from 'next/link'
import { server } from '../../../config'
import Meta from '../../../components/Meta'

export default function article({article}) {
    
  return (
    <div className="card">
        <Meta title={article.title}/>
            <div className="card-header fw-bolder">
            {article.title}
        </div>
        <div className="card-body">
            <ul className="list-group list-group-flush">
                <li className="list-group-item justify-content-between d-flex">
                    <span className="text-muted roc-attr-name">Body:</span> 
                    <span className="fw-bold">{article.body}</span>
                </li>
               <Link href='/'>Back</Link>
            </ul>
        </div>
    </div>
  )
}


// export const getServerSideProps = async (context)=>{
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
//     const article = await res.json()

//     return {
//         props:{
//             article:article
//         }
//     }
// }

// export const getServerSideProps = async (context)=>{
//     const res = await fetch(`${server}/api/articles/${context.params.id}`)
//     const article = await res.json()

//     return {
//         props:{
//             article:article
//         }
//     }
// }

export const getStaticPaths = async ()=> {
    const res = await fetch(`${server}/api/articles`)
    const data = await res.json()

    return {
        paths: data.map(item=>{
            return {
                params:{id:item.id.toString()}
            }
        }),

        fallback:false
    }
};

export const getStaticProps = async (context)=>{
    const res = await fetch(`${server}/api/articles/${context.params.id}`)
    const article = await res.json()

    return {
        props:{
            article:article
        }
    }
}
