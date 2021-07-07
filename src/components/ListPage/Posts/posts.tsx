import './posts.scss';

import React from 'react';
import { Link } from 'react-router-dom';
import IPost from '../../../models/post';

const Posts: React.FC<any> = (props: any) => {
  const { posts } = props;

  return (
    <ul className='posts-list'>
      { posts.map( (post: IPost) => (
        <li key={post.id} className='posts-list__item'>
          <Link to={ `/post/${post.id}` }>
            {post.id}. {post.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Posts;
