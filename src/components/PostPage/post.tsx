import './post.scss';

import IState from '../../store/state';
import IPost from '../../models/post';
import React from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';

const Post: React.FC<any> = (props: any) => {
  const { 
    isLoggedAdmin, 
    posts,     
    match: {
      params: { id },
    }, 
  } = props;
  
  if (!isLoggedAdmin) {
    return (
      <Redirect to='/login' />
    );
  }

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
  isLoggedAdmin: state.isLoggedAdmin,
});

export default withRouter(connect(mapStateToProps)(Post));
