import React, { useEffect, useState } from "react";
import {
  Image,
  Button,
  Form,
  Grid,
  Header,
  Loader,
  Message,
  Segment,
} from "semantic-ui-react";
import { useAppSelector, useAppDispatch } from "@hooks/index";
import { login, logout } from "@stores/login/thunk";
import { useHistory } from "react-router-dom";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const logging = useAppSelector((state) => state.login.logging);
  const logged = useAppSelector((state) => state.login.logged);
  const token = useAppSelector((state) => state.login.token);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(logout());
  }, []);

  const doLogin = () => {
    dispatch(login({ email, password }));
  };

  useEffect(() => {
    if (logged && token) {
      history.push("/");
    }
  }, [logged, token]);

  return (
    <Grid textAlign="center" style={{ height: "70vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 500}}>
      <Image centered src="https://images.ctfassets.net/rgflnjrp89sd/2lsuNFz6mWtVZtEoycBHKi/594b9d112663efade467b89d8ec3ddc8/opennLogo.png" height="100px"/>
        <Form size="large" style={{ marginTop: "40px" }}>
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
            {logging && <Loader active inline style={{ marginBottom: "20px" }}/>}
            <Button style={{ backgroundColor: "#004E85" }}color="facebook" fluid size="large" onClick={doLogin}>
              Login
            </Button>
          </Segment>
        </Form>
        <Message>
          Precisa cadastrar sua instituição de ensino?{" "} <a href="#">Clique aqui</a>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default Login;
