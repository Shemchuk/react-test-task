import './listPage.scss';

import React, { useEffect } from 'react';
import Posts from './Posts/posts';
import IState from '../../store/state';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { appActions } from '../../store/actions';

const ListPage: React.FC<any> = (props: any) => {
  const { posts, loadPosts, isLoggedAdmin } = props;
  
  if (!isLoggedAdmin) {
    console.log('Redirecting to login page from list page...');
    return (
      <Redirect to='/login' />
    );
  }

    useEffect(() => {
      loadPosts();
    }, [loadPosts]);

  console.log(`isLoggedAdmin: ${isLoggedAdmin}`);
  return (
    <div className='list-page'>
      <h2>List page</h2>
      <Posts posts={posts} />
    </div>
  );
}

const mapDispatchToProps = appActions;
const mapStateToProps = (state: IState) => ({
  isLoggedAdmin: state.isLoggedAdmin,
  posts: state.posts,
});

export default connect(mapStateToProps, mapDispatchToProps)(ListPage);
