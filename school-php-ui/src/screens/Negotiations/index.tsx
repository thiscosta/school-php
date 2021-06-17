import { useAppDispatch } from "@hooks/index";
import { useAppSelector } from "@hooks/index";
import {
  listNegotiations,
} from "@stores/negotiations/thunk";
import React, { useEffect, useState } from "react";
import {
  Button,
  Table,
  Grid,
  Popup,
  Loader,
  Segment,
  Dimmer,
} from "semantic-ui-react";
import ListHeader from "@components/ListHeader";
import { selectNegotiation } from "@stores/negotiations";

const Negotiations: React.FC = () => {
  const [open, setOpen] = useState(false);
  const finding = useAppSelector((state) => state.negotiations.finding);
  const token = useAppSelector((state) => state.login.token);
  const negotiations = useAppSelector(
    (state) => state.negotiations.negotiations
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(listNegotiations({ token }));
  }, []);

  const unselectNegotiation = () => {
    dispatch(selectNegotiation(null));
    setOpen(!open);
  };

  return (
    <Grid>
      <ListHeader
        description="Gerencie as negociações"
        title="Negociações"
        icon="money bill alternate outline"
      />
      {finding ? (
        <Segment style={{ width: "100vw", height: "20vh" }}>
          <Dimmer active inverted>
            <Loader inverted>Loading</Loader>
          </Dimmer>
        </Segment>
      ) : (
        <Table basic celled>
          <Table.Header fullWidth>
            <Table.Row>
              <Table.HeaderCell>ID</Table.HeaderCell>
              <Table.HeaderCell>Aluno</Table.HeaderCell>
              <Table.HeaderCell>Dívida</Table.HeaderCell>
              <Table.HeaderCell>Proposta</Table.HeaderCell>
              <Table.HeaderCell>#</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {negotiations.map((negotiation, index) => (
              <Table.Row key={index}>
                <Table.Cell>{negotiation.id}</Table.Cell>
                <Table.Cell>{negotiation.student!.id + " - " + negotiation.student!.name}</Table.Cell>
                <Table.Cell><b>{negotiation.debt?.course}</b> - {negotiation.debt?.semester + "º Semestre - R$" + negotiation.debt?.value}</Table.Cell>
                <Table.Cell>{negotiation.proposal}</Table.Cell>
                <Table.Cell>
                  <Button.Group>
                    <Popup
                      trigger={<Button positive>Aceitar</Button>}
                      content={
                        <Button color="green" content="Confirmar a proposta" />
                      }
                      on="click"
                      position="top right"
                    />
                    <Button.Or text="ou" />
                    <Popup
                      trigger={<Button color="red">Recusar</Button>}
                      content={
                        <Button color="red" content="Recusar proposta" />
                      }
                      on="click"
                      position="top right"
                    />
                  </Button.Group>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      )}
    </Grid>
  );
};

export default Negotiations;
