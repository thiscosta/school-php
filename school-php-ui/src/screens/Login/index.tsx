import React from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Loader,
  Message,
  Segment,
} from "semantic-ui-react";
import { useAppSelector, useAppDispatch } from "@hooks/index";
import { login } from "@stores/login/thunk";

const Login: React.FC = () => {
  const logging = useAppSelector((state) => state.login.logging);
  const token = useAppSelector((state) => state.login.token);
  const dispatch = useAppDispatch();

  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 500 }}>
        <Header as="h2">Entre ou cadastre-se</Header>
        <Form size="large">
          <Segment>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="E-mail"
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Senha"
              type="password"
            />
            {token}
            {logging ? "true" : "false"}
            {logging && <Loader active inline />}
            <div>
              <button
                aria-label="Increment value"
                onClick={() =>
                  dispatch(login({ email: "teste", password: "teste" }))
                }
              >
                Increment
              </button>
            </div>

            <Button color="blue" fluid size="large">
              Login
            </Button>
          </Segment>
        </Form>
        <Message>
          Precisa cadastrar sua instituição de ensino?{" "}
          <a href="#">Clique aqui</a>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default Login;
