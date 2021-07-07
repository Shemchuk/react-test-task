import './header.scss';

import IState from '../../store/state';
import LogoutButton from '../LogoutButton/logoutButton';
import React from 'react';
import { connect } from 'react-redux';

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
