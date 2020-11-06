import React from "react"
import {Link} from "react-router-dom"
import Parser from'rss-parser';

/**
 * Import Components
 */
import Navbar from "../components/BlogNavBar"
import ArticlePreview from "../components/ArticlePreview"
import Footer from "../components/Footer"

const sites = require("./indexed-sites.json")

const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"
let parser = new Parser();
(async () => {
  
  let feed = await parser.parseURL(CORS_PROXY+sites[0].feedUrl);
  console.log(feed.title);
  console.log(feed.items)
  feed.items.forEach(item => {
    
    console.log(item.title + ':' + item.link)
  });

})();


export default function HomePage(){
    const home=()=>{
        return (
            <>
              <h1>in Homepage</h1>
              {/* <ArticlePreview/> */}
                
            </>
        )
    }
    return(
      <>
        <Navbar/>
        {home()}
        {/* <Footer/> */}

      </>
    )
}