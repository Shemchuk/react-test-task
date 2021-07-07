import './logoutButton.scss';

import React from 'react';

const LogoutButton: React.FC<any> = (props: any) => {

  return (
    <button className="logout_button">
      <span className="material-icons">
        logout
      </span> 
    </button>
  );
};

export default LogoutButton;
