import React from 'react';

const PostList = (props) => {
  const { title, contents } = props;
  return (
  
      <div className='postCard'>
        <h2>{title}</h2>
        <p>{contents}</p>
      </div>
    
  )
}
export default PostList