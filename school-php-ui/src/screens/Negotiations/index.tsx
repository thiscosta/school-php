import React from "react";
import { Button, Table, Grid, Popup } from "semantic-ui-react";
import ListHeader from "src/components/ListHeader";

const Negotiations: React.FC = () => {
  return (
    <Grid>
      <ListHeader
        description="Gerencie as negociações"
        title="Negociações"
        icon="money bill alternate outline"
      />
      <Table basic celled>
        <Table.Header fullWidth>
          <Table.Row>
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>Aluno</Table.HeaderCell>
            <Table.HeaderCell>Responsável</Table.HeaderCell>
            <Table.HeaderCell>Proposta</Table.HeaderCell>
            <Table.HeaderCell>#</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>Aluno</Table.Cell>
            <Table.Cell>Responsável</Table.Cell>
            <Table.Cell>Proposta</Table.Cell>
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
        </Table.Body>
      </Table>
    </Grid>
  );
};

export default Negotiations;
