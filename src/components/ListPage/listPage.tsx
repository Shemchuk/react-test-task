import './listPage.scss';

import React, { useEffect } from 'react';
import Posts from './Posts/posts';
import IState from '../../store/state';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { appActions } from '../../store/actions';
import Pagination from '../Pagination/pagination';

const ListPage: React.FC<any> = (props: any) => {
  const { posts, loadPosts, isLoggedAdmin, currentPage } = props;
  const postsPerPage = 10;

  if (!isLoggedAdmin) {
    return (
      <Redirect to='/login' />
    );
  }

  useEffect(() => {
    loadPosts();
  }, [loadPosts]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className='list-page'>
      <h2>List page</h2>
      <Posts posts={currentPosts} />
      <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} />
    </div>
  );
}

const mapDispatchToProps = appActions;
const mapStateToProps = (state: IState) => ({
  isLoggedAdmin: state.isLoggedAdmin,
  posts: state.posts,
  currentPage: state.currentPage,
});

export default connect(mapStateToProps, mapDispatchToProps)(ListPage);
