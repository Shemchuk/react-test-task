import './posts.scss';

import React from 'react';

const Posts: React.FC<any> = (props: any) => {
  const {posts, IsLoadingData} = props;
  
  if (IsLoadingData) {
    return <h2>Loading data...</h2>
  }

  return (
    <ul className='posts-list'>
      { posts.map( (post: any) => (
        <li key={post.id} className='posts-list__item'>
          {post.title}
        </li>
      ))}
    </ul>
  );
}

export default Posts;
