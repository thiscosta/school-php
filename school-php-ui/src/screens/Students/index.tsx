import React, { useState } from "react";
import { Button, Icon, Table, Grid, Popup } from "semantic-ui-react";
import ListHeader from "src/components/ListHeader";
import UpsertStudents from "./components/UpsertStudents";

const Students: React.FC = () => {
  const [open, setOpen] = useState(false);

  const changeIsOpen = () => {
    setOpen(!open);
  };

  return (
    <Grid>
      <ListHeader
        description="Visualizar, adicione ou edite"
        title="Alunos"
        icon="user circle outline"
      />
      <Table basic celled>
        <Table.Header fullWidth>
          <Table.Row>
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>Nome</Table.HeaderCell>
            <Table.HeaderCell>E-mail</Table.HeaderCell>
            <Table.HeaderCell>Curso</Table.HeaderCell>
            <Table.HeaderCell>Semestre</Table.HeaderCell>
            <Table.HeaderCell>Responsável</Table.HeaderCell>
            <Table.HeaderCell>#</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>Aluno</Table.Cell>
            <Table.Cell>aluno@email.com</Table.Cell>
            <Table.Cell>Sistemas de informação</Table.Cell>
            <Table.Cell>7º</Table.Cell>
            <Table.Cell>Responsável</Table.Cell>
            <Table.Cell>
              <Button.Group>
                <Button icon="edit" primary onClick={changeIsOpen}></Button>
                <Button.Or text="ou" />
                <Popup
                  trigger={<Button icon="remove" color="red" />}
                  content={<Button color="red" content="Excluir aluno" />}
                  on="click"
                  position="top right"
                />
              </Button.Group>
            </Table.Cell>
          </Table.Row>
        </Table.Body>

        <Table.Footer fullWidth>
          <Table.Row>
            <Table.HeaderCell colSpan="7">
              <Button
                floated="left"
                icon
                labelPosition="left"
                primary
                size="small"
                onClick={changeIsOpen}
              >
                <Icon name="user" /> Adicionar aluno
              </Button>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
      <UpsertStudents open={open} setOpen={changeIsOpen} />
    </Grid>
  );
};

export default Students;
