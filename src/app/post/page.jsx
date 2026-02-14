'use client';

import { useEffect, useState } from "react";

export default function Post() {
  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    async function fetchPosts() {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');

      const data = await response.json();
      setPosts(data);
    }

    fetchPosts();

  },[])

  console.log(posts);
  if(posts.length == 0) return <p>loading...</p>
  return (
    <div className='text-center'>
      <h1 className='text-2xl '>Post</h1>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 mx-10 mt-4 text-left"> 
        {
          posts.map(({id, title, body}) => (
            <div key={id} className="border rounded-2xl p-2">
              <h2 className="font-semibold mb-4">{title}</h2>
              <p>{body}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}
