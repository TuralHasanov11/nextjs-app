import { server } from '../config'
import ArticleList from '../components/ArticleList'
import Image from 'next/image'

export default function Home({articles}) {
  return (
    <div className='container'>
      
      <Image src={'/logo.jpeg'} width={300} height={180}/>

      <main className='main'>
       <ArticleList articles={articles}/>
      </main>

    </div>
  )
}

// export const getStaticProps= async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
//   const articles = await res.json()

//   return {
//     props:{
//       articles
//     }
//   }
// }

export const getStaticProps= async () => {
  const res = await fetch(`${server}/api/articles`)
  const articles = await res.json()

  return {
    props:{
      articles
    }
  }
}