import {useEffect, useState} from "react"
import Parser from 'rss-parser'

let parser = new Parser()

const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"
const sites = require("../pages/indexed-sites.json")

async function getFeedFromUrl (){
  return (await parser.parseURL(CORS_PROXY+sites[0].feedUrl));
}

const promise = getFeedFromUrl()

export default function useFeed(){
    const [feed, setFeed] = useState([])
    const [isLoading, setLoading] = useState(true)

    useEffect(()=>{
        promise.then((posts)=>{
            const feed = posts.items
            setFeed(feed)
            setLoading(false)
        })
        
    })
    // console.log(feed)
    return [feed, isLoading]
}