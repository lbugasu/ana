import React from "react"
// import {Link, useParams} from "react-router-dom"

export default function ArticlePreview({post}){
    // const {article} = useParams() 
    console.log(post)
    const renderArticlePreview = () =>{
        return(
            <div>
                <h2>{post.fields.title}</h2>
                <img
                    src={post.fields.feature_image.fields.file.url}
                    alt={post.fields.title}
                />
            </div>
        )
    }
    return (
        <>
                {renderArticlePreview()}
        </>
        )
}