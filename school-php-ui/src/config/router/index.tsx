import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../../screens/Login";
import AuthenticatedRoutesContainer from "./AuthenticatedRoutesContainer";
import PrivateRoute from "./PrivateRoute";

const AppRouter: React.FC = () => {
    return (
    <Router>
      <div>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/">
            <AuthenticatedRoutesContainer />
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}

export default AppRouter;
