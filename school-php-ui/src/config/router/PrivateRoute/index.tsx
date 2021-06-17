import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useAppSelector } from "@hooks/index";


const PrivateRoute: React.FC<any> = ({ children, ...rest }) => {
  const logged = useAppSelector(
    (state) => state.login.logged
  );

  return (
    <Route {...rest} render={() => {
        return logged ? children : <Redirect to='/login' />
      }} />
  );
}

export default PrivateRoute;