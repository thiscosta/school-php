import React from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import { useAppSelector } from "@hooks/index";
import { Container, Grid, Menu, Image } from "semantic-ui-react";
import Home from "@screens/Home";
import Students from "@screens/Students";
import { Link } from "react-router-dom";
import Negotiations from "@screens/Negotiations";
import StudentsNegotiations from "@screens/StudentNegociations";
import Debts from "@screens/Debts";

const AuthenticatedRoutesContainer: React.FC = () => {
  let match = useRouteMatch();
  const isAdmin = useAppSelector(
    (state) => state.login.userProfile === 'Admin'
  );

  return (
    <div>
      <Grid>
        <Grid.Row>
          <Menu fixed="top" inverted style={{ height: 55, backgroundColor: "#004e85"}}>
            <Container>
            <Menu.Item header>
              <Image centered src="https://images.ctfassets.net/rgflnjrp89sd/4lASpceUOyAAg5MwgQg5ap/dcc33eb3fe8347aa30a588bef0641c9f/logo.png" width="32px"/></Menu.Item>
              <Menu.Item as={Link} to="/">
                Home
              </Menu.Item>
              {isAdmin &&(
              <Menu.Item as={Link} to="/negociacoes-aluno">
                Negociações
              </Menu.Item>
              )}
              {isAdmin &&(
              <Menu.Item as={Link} to="/dividas">
                Dívidas
              </Menu.Item>
              )}
            </Container>
            <Menu.Menu position="right">
              <Menu.Item as={Link} to="/login">
                Sair
              </Menu.Item>
            </Menu.Menu>
          </Menu>
        </Grid.Row>
        <Grid.Row centered>
          <Grid.Column width={14} style={{ marginTop: 60 }}>
            <Switch>
              <Route path={`${match.path}/`} exact>
              {isAdmin &&(
                <Students />
              )}
              {!isAdmin &&(
                <Negotiations />
              )}
              </Route>
              <Route path="/negociacoes-aluno" exact strict>
                <StudentsNegotiations />
              </Route>
              <Route path="/dividas" exact strict>
                <Debts />
              </Route>
            </Switch>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default AuthenticatedRoutesContainer;
