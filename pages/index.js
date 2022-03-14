import { server } from '../config'
import ArticleList from '../components/ArticleList'

export default function Home({articles}) {
  return (
    <div className='container'>
      

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