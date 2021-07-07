import './posts.scss';

import React from 'react';

const Posts: React.FC<any> = (props: any) => {
  const { posts } = props;

  return (
    <ul className='posts-list'>
      { posts.map( (post: any) => (
        <li key={post.id} className='posts-list__item'>
          {post.id}. {post.title}
        </li>
      ))}
    </ul>
  );
}

export default Posts;
