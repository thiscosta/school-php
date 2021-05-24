import React from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import { Container, Grid, Menu } from "semantic-ui-react";
import Home from "@screens/Home";
import Students from "@screens/Students";
import { Link } from "react-router-dom";
import Negotiations from "@screens/Negotiations";
import StudentsNegotiations from "@screens/StudentNegociations";
import Debts from "@screens/Debts";

const AuthenticatedRoutesContainer: React.FC = () => {
  let match = useRouteMatch();

  return (
    <div>
      <Grid>
        <Grid.Row>
          <Menu fixed="top" inverted>
            <Container>
              <Menu.Item as={Link} to="/">
                Home
              </Menu.Item>
              <Menu.Item as={Link} to="/alunos">
                Alunos
              </Menu.Item>
              <Menu.Item as={Link} to="/negociacoes">
                Negociações
              </Menu.Item>
              <Menu.Item as={Link} to="/negociacoes-aluno">
                Negociações (Aluno)
              </Menu.Item>
              <Menu.Item as={Link} to="/dividas">
                Dívidas
              </Menu.Item>
            </Container>
            <Menu.Menu position="right">
              <Menu.Item as={Link} to="/login">
                Sair
              </Menu.Item>
            </Menu.Menu>
          </Menu>
        </Grid.Row>
        <Grid.Row centered>
          <Grid.Column width={14} style={{ marginTop: "3%" }}>
            <Switch>
              <Route path={`${match.path}/`} exact>
                <Home />
              </Route>
              <Route path="/alunos" exact strict>
                <Students />
              </Route>
              <Route path="/negociacoes" exact strict>
                <Negotiations />
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
