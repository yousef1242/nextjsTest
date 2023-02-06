import Link from "next/link"
import { useEffect, useState } from "react"



export default function Posts(props){
    return(
      <div>
      Posts page
      {
        props.posts.map((post) => (
          <div className="col-4" key={post.id}>
             <Link href={`/posts/${post.id}`}>
             {post.title}
             </Link>
          </div>
        ))
      }
      </div>
    )
  }

  export async function getStaticProps(){
    const res = await fetch("http://localhost:3000/api/posts");
    const data = await res.json();


    return{
      props : {
        posts:data
      }
    }
  }