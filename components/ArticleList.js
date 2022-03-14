import Link from 'next/link'
import React from 'react'

export default function ArticleList({articles}) {
  return articles.map((article, index)=>(
        <h3 key={index}>
            <Link href={`/articles/${article.id}`}>
              {article.title}    
            </Link></h3>
    ))
}
