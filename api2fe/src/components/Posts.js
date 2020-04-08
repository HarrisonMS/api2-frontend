import React, {useState, useEffect} from 'react';
import axios from 'axios';
import PostList from './PostList'

const Posts = () => {
  const [posts, setPosts] = useState([])
  console.log(posts)

  useEffect(() => {
    axios.get('http://localhost:5000/api/posts')
    .then((res) => {
      
      setPosts(res.data)
      console.log('fuckingaaa',res.data)
    })
    .catch((error) => {
      console.log(error)
    })
  },[])

  return (
    <>
    <h1>Not Instagram</h1>
    <div className='friends-list'>
      {posts.map((post, i)=> <PostList key={i} title={post.title} content={post.content}  />) }
    </div>
    <footer>@copyright not jian yang</footer>
    </>
  )
}
export default Posts
{/* console.log(post)) */}