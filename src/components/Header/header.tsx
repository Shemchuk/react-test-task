import './header.scss';

import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// import Search from './search';
import IState from '../../store/state';
import LogoutButton from '../LogoutButton/logoutButton';

const Header: React.FC<any> = (props: any) => {

  const { isLoggedAdmin } = props;

  return (
    <header className="header">
      <div className="header_wrapper">
        <div className="header_logo">
        </div>

        <div className="header_menu">

          {isLoggedAdmin ? <LogoutButton /> : null}
        </div>
      </div>
    </header>
  );
};

const mapStateToProps = (state: IState) => ({
  isLoggedAdmin: state.isLoggedAdmin,
});

export default connect(mapStateToProps)(Header);
