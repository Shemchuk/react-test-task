import './loginErrorMessage.scss';

import React from 'react';

const LoginErrorMessage: React.FC<any> = (props: any) => {
  return (
    <div className="login_error_message">
      <span>{props.loginMessage}</span>
    </div> 
  );
}

export default LoginErrorMessage;
