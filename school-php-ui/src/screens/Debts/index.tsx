import React, { useState } from "react";
import { Button, Table, Grid } from "semantic-ui-react";
import ListHeader from "src/components/ListHeader";
import UpsertDebtsNegotiation from "./components/UpsertDebtsNegotiation";

const Debts: React.FC = () => {
  const [open, setOpen] = useState(false);

  const changeIsOpen = () => {
    setOpen(!open);
  };

  return (
    <Grid>
      <ListHeader
        description="Visualizar seus débitos e proponha negociações"
        title="Débitos"
        icon="dollar sign"
      />
      <Table basic celled>
        <Table.Header fullWidth>
          <Table.Row>
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>Curso</Table.HeaderCell>
            <Table.HeaderCell>Semestre</Table.HeaderCell>
            <Table.HeaderCell>Mês</Table.HeaderCell>
            <Table.HeaderCell>Valor</Table.HeaderCell>
            <Table.HeaderCell>Status</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>ID</Table.Cell>
            <Table.Cell>Curso</Table.Cell>
            <Table.Cell>Semestre</Table.Cell>
            <Table.Cell>Mês</Table.Cell>
            <Table.Cell>Valor</Table.Cell>
            <Table.Cell>Em análise</Table.Cell>
            <Table.Cell>
              <Button icon="money" primary onClick={changeIsOpen}>
                Propor negociação
              </Button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <UpsertDebtsNegotiation open={open} setOpen={changeIsOpen} />
    </Grid>
  );
};

export default Debts;
