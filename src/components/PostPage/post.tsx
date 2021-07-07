import './post.scss';

import React from 'react';
import { connect } from 'react-redux';
import IState from '../../store/state';
import { withRouter } from 'react-router-dom';
import IPost from '../../models/post';

const Post: React.FC<any> = (props: any) => {
  const { 
    posts,     
    match: {
      params: { id },
    }, 
  } = props;
  
  const post = posts.find((item: IPost) => item.id == id);
  
  return (
    <div className='post-wrapper'>
      <h2>Post page</h2>
      <h3>{post.title}</h3>
      <div className="post-info">Post id: {post.id}</div>
      <div className="post-info">{post.body}</div>
    </div>
  );
}

const mapStateToProps = (state: IState) => ({
  posts: state.posts,
});

export default withRouter(connect(mapStateToProps)(Post));
