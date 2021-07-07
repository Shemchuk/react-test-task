import './pagination.scss';

import { appActions } from '../../store/actions';
import IState from '../../store/state';
import React from 'react';
import { connect } from 'react-redux';

const Pagination: React.FC<any> = (props: any) => {
  const { postsPerPage, totalPosts, setCurrentPage } = props;
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className='nav-pagination'>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a onClick={() => {setCurrentPage(number); return false; }} href='#' className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>

  );
};

const mapDispatchToProps = appActions;
const mapStateToProps = (state: IState) => ({
  currentPage: state.currentPage,
});

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);

