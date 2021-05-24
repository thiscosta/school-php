import React, { useState } from "react";
import { Button, Icon, Table, Grid, Popup } from "semantic-ui-react";
import ListHeader from "src/components/ListHeader";
import UpsertStudentNegotiations from "./components/UpsertStudentNegotiations";

const StudentsNegotiations: React.FC = () => {
  const [open, setOpen] = useState(false);

  const changeIsOpen = () => {
    setOpen(!open);
  };

  return (
    <Grid>
      <ListHeader
        description="Proponha e gerencia suas negociações"
        title="Negociações"
        icon="money bill alternate outline"
      />
      <Table basic celled>
        <Table.Header fullWidth>
          <Table.Row>
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>Curso</Table.HeaderCell>
            <Table.HeaderCell>Semestre</Table.HeaderCell>
            <Table.HeaderCell>Mês</Table.HeaderCell>
            <Table.HeaderCell>Proposta</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>Curso</Table.Cell>
            <Table.Cell>Semestre</Table.Cell>
            <Table.Cell>Mês</Table.Cell>
            <Table.Cell>Proposta</Table.Cell>
            <Table.Cell>
              <Button.Group>
                <Button icon="edit" primary onClick={changeIsOpen} />
                <Button.Or text="ou" />
                <Popup
                  trigger={<Button icon="remove" color="red" />}
                  content={<Button color="red" content="Excluir negociação" />}
                  on="click"
                  position="top right"
                />
              </Button.Group>
            </Table.Cell>
          </Table.Row>
        </Table.Body>

        <Table.Footer fullWidth>
          <Table.Row>
            <Table.HeaderCell colSpan="6">
              <Button
                floated="left"
                icon
                labelPosition="left"
                primary
                size="small"
                onClick={changeIsOpen}
              >
                <Icon name="dollar sign" /> Propor nova negociação
              </Button>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
      <UpsertStudentNegotiations open={open} setOpen={changeIsOpen} />
    </Grid>
  );
};

export default StudentsNegotiations;
