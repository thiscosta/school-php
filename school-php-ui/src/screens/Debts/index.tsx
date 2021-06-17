import { useAppDispatch } from "@hooks/index";
import { useAppSelector } from "@hooks/index";
import { deleteDebt, listDebts } from "@stores/debts/thunk";
import React, { useEffect, useState } from "react";
import {
  Button,
  Icon,
  Table,
  Grid,
  Popup,
  Loader,
  Segment,
  Dimmer,
} from "semantic-ui-react";
import ListHeader from "@components/ListHeader";
import UpsertDebts from "./components/UpsertDebts";
import { Debt } from "@schoolApi/types/debt";
import { selectDebt } from "@stores/debts";
import { listStudents } from "@stores/students/thunk";

const Debts: React.FC = () => {
  const [open, setOpen] = useState(false);
  const finding = useAppSelector((state) => state.debts.finding);
  const token = useAppSelector((state) => state.login.token);
  const debts = useAppSelector((state) => state.debts.debts);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(listDebts({ token }));
    dispatch(listStudents({ token }))
  }, []);

  const unselectDebt = () => {
    dispatch(selectDebt(null));
    setOpen(!open);
  };

  const updateDebt = (debt: Debt) => {
    dispatch(selectDebt(debt));
    setOpen(!open);
  };

  const removeDebt = (debt: Debt) => {
    dispatch(deleteDebt({ id: debt.id!, token }));
  };

  return (
    <Grid>
      <ListHeader
        description="Visualize, e gerencia as dívidas"
        title="Dívidas"
        icon="user circle outline"
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
            <Table.HeaderCell>Curso</Table.HeaderCell>
            <Table.HeaderCell>Semestre</Table.HeaderCell>
            <Table.HeaderCell>Mês</Table.HeaderCell>
            <Table.HeaderCell>Valor</Table.HeaderCell>
            <Table.HeaderCell>Status</Table.HeaderCell>
            <Table.HeaderCell>#</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {debts.map((debt, index) => (
              <Table.Row key={index}>
                <Table.Cell>{debt.id}</Table.Cell>
                <Table.Cell>{debt.student?.name}</Table.Cell>
                <Table.Cell>{debt.course}</Table.Cell>
                <Table.Cell>{debt.semester}</Table.Cell>
                <Table.Cell>{debt.month}</Table.Cell>
                <Table.Cell>{debt.value}</Table.Cell>
                <Table.Cell>{debt.status}</Table.Cell>
                <Table.Cell>
                  <Button.Group>
                    <Button
                      icon="edit"
                      primary
                      onClick={() => {
                        updateDebt(debt);
                      }}
                    ></Button>
                    <Button.Or text="ou" />
                    <Popup
                      trigger={<Button icon="remove" color="red" />}
                      content={
                        <Button
                          color="red"
                          content="Excluir divída"
                          onClick={() => {
                            removeDebt(debt);
                          }}
                        />
                      }
                      on="click"
                      position="top right"
                    />
                  </Button.Group>
                </Table.Cell>
              </Table.Row>
            ))}
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
                  onClick={unselectDebt}
                >
                  <Icon name="user" /> Adicionar dívida
                </Button>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
      )}

      <UpsertDebts open={open} setOpen={unselectDebt} />
    </Grid>
  );
};

export default Debts;
