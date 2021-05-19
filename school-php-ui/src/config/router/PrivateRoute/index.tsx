import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute: React.FC<any> = ({ children, ...rest }) => {
  return (
    <Route {...rest} render={() => {
        return true
          ? children
          : <Redirect to='/login' />
      }} />
  );
}

export default PrivateRoute;