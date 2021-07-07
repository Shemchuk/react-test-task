import './logoutButton.scss';

import React from 'react';
import { appActions } from '../../store/actions';
import { connect } from 'react-redux';
import IState from '../../store/state';

const LogoutButton: React.FC<any> = (props: any) => {
  const { setIsLoggedAdmin } = props;
  const clickHandle = () => {
    setIsLoggedAdmin(false);
  }

  return (
    <button className="logout_button" onClick={clickHandle}>
      <span className="material-icons">
        logout
      </span> 
    </button>
  );
};

const mapDispatchToProps = appActions;
const mapStateToProps = (state: IState) => ({
  isLoggedAdmin: state.isLoggedAdmin,
});
export default connect(mapStateToProps, mapDispatchToProps)(LogoutButton);

