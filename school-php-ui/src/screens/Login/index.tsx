import React, { useState } from "react";
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

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const logging = useAppSelector((state) => state.login.logging);
  const dispatch = useAppDispatch();

  const doLogin = () => {
    dispatch(login({ email, password }))
  }

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
              value={email}
              onChange={(_e, { value }) => setEmail(value)}
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Senha"
              type="password"
              value={password}
              onChange={(_e, { value }) => setPassword(value)}
            />
            {logging && <Loader active inline />}
            <Button color="blue" fluid size="large" onClick={doLogin}>
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
