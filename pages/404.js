import React, { useEffect } from 'react';
import {useRouter} from 'next/router'

export default function NotFound() {

    const router = useRouter()

    useEffect(()=>{
        setTimeout(() => {
            router.push('/')
        }, 2000);
    },[])

  return <div>
      <h1>Not found</h1>
  </div>;
}
