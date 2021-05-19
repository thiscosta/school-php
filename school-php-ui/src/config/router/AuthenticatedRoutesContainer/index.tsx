import React from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import { Container, Dropdown, Menu } from "semantic-ui-react";
import Home from "../../../screens/Home";
import Students from "../../../screens/Students";

const AuthenticatedRoutesContainer: React.FC = () => {
  let match = useRouteMatch();

  return (
    <div>
      <Menu fixed="top" inverted>
        <Container>
          <Menu.Item as="a" header>
            School
          </Menu.Item>
          <Menu.Item as="a">Home</Menu.Item>

          <Dropdown item simple text="Dropdown">
            <Dropdown.Menu>
              <Dropdown.Item>List Item</Dropdown.Item>
              <Dropdown.Item>List Item</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Header>Header Item</Dropdown.Header>
              <Dropdown.Item>
                <i className="dropdown icon" />
                <span className="text">Submenu</span>
                <Dropdown.Menu>
                  <Dropdown.Item>List Item</Dropdown.Item>
                  <Dropdown.Item>List Item</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown.Item>
              <Dropdown.Item>List Item</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </Menu>

      <Container text style={{ marginTop: "2.6em", backgroundColor: "red" }}>
        <Switch>
          <Route path={`${match.path}/`} exact>
            <Home />
          </Route>
          <Route path="/students" exact strict>
            <Students />
          </Route>
        </Switch>
      </Container>
    </div>
  );
};

export default AuthenticatedRoutesContainer;
