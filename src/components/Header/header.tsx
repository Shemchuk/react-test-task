import './header.scss';

import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// import Search from './search';
import IState from '../../store/state';
import LogoutButton from '../LogoutButton/logoutButton';

const Header: React.FC<any> = (props: any) => {
  const { lang } = props;
  const { isMainPage } = props;
  const { isLoggedAdmin } = props;

  return (
    <header className="header">
      <div className="header_wrapper">
        <div className="header_logo">
        </div>

        <div className="header_menu">

          {isLoggedAdmin ? <LogoutButton /> : null}
          {/* <LogoutButton /> */}
        </div>
      </div>
    </header>
  );
};

const mapStateToProps = (state: IState) => ({
  lang: state.language,
  isMainPage: state.isMainPage,
  isLoggedAdmin: state.isLoggedAdmin,
});

export default connect(mapStateToProps)(Header);
