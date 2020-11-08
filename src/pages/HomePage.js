import React from "react"
import { usePosts } from "../custom-hooks/";

import Navbar from "../components/BlogNavBar"
import ArticlePreview from "../components/ArticlePreview"

export default function HomePage(){
  const [posts, isLoading] = usePosts()

  const home=()=>{
    if(isLoading) return <p>Loading...</p>
    console.log(posts.length)
    posts.map((p)=>{
      console.log(p)
    })
    return posts.map((post) =>(
        <>
         <div>
            <h2>{post.fields.title}</h2>
            <img
                src={post.fields.feature_image.fields.file.url}
                alt={post.fields.title}
            />
          </div>
        </>
    ))
  }
  return(
    <>
      <Navbar/>
      {home()}
      {/* <Footer/> */}

    </>
  )
}