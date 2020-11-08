import { useEffect, useState } from "react";
import { getBlogPosts } from "../contentful";



export default function usePosts() {
  const promise = getBlogPosts();
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    promise.then((blogPosts) => {

      const posts = blogPosts.sort(function (a, b) {
        return new Date(b.fields.date) - new Date(a.fields.date);
      });
      setPosts(posts);
      setLoading(false);
    });
  }, []);
  return [posts, isLoading];
}
