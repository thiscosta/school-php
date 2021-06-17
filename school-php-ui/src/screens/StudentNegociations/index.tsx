import { useAppDispatch } from "@hooks/index";
import { useAppSelector } from "@hooks/index";
import {
  deleteStudentNegotiation,
  listStudentNegotiations,
} from "@stores/studentNegotiations/thunk";
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
import UpsertStudentNegotiations from "./components/UpsertStudentNegotiations";
import { Negotiation } from "@schoolApi/types/negotiation";
import { selectStudentNegotiation } from "@stores/studentNegotiations";
import { listStudents } from "@stores/students/thunk";
import { listDebts } from "@stores/debts/thunk";


const StudentNegotiations: React.FC = () => {
  const [open, setOpen] = useState(false);
  const finding = useAppSelector((state) => state.studentNegotiations.finding);
  const token = useAppSelector((state) => state.login.token);
  const studentNegotiations = useAppSelector(
    (state) => state.studentNegotiations.negotiations
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(listStudentNegotiations({ token }));
    dispatch(listStudents({ token }))
    dispatch(listDebts({ token }));
  }, []);

  const unselectStudentNegotiation = () => {
    dispatch(selectStudentNegotiation(null));
    setOpen(!open);
  };

  const updateStudentNegotiation = (studentNegotiation: Negotiation) => {
    dispatch(selectStudentNegotiation(studentNegotiation));
    setOpen(!open);
  };

  const removeStudentNegotiation = (studentNegotiation: Negotiation) => {
    dispatch(deleteStudentNegotiation({ id: studentNegotiation.id!, token }));
  };

  return (
    <Grid>
      <ListHeader
        description="Visualize e gerencia as suas negociações"
        title="Negociações"
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
              <Table.HeaderCell>Dívida</Table.HeaderCell>
              <Table.HeaderCell>Status</Table.HeaderCell>
              <Table.HeaderCell>Proposta</Table.HeaderCell>
              <Table.HeaderCell>#</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {studentNegotiations.map((studentNegotiation, index) => (
              <Table.Row key={index}>
                <Table.Cell>{studentNegotiation.id}</Table.Cell>
                <Table.Cell>
                  <b>{studentNegotiation.debt?.course}</b> -{" "}
                  {studentNegotiation.debt?.semester +
                    "º Semestre - R$" +
                    studentNegotiation.debt?.value}
                </Table.Cell>
                <Table.Cell>{studentNegotiation.debt?.status}</Table.Cell>
                <Table.Cell>{studentNegotiation.proposal}</Table.Cell>
                <Table.Cell>
                  <Button.Group>
                    <Button
                      icon="edit"
                      primary
                      onClick={() => {
                        updateStudentNegotiation(studentNegotiation);
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
                            removeStudentNegotiation(studentNegotiation);
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
                  onClick={unselectStudentNegotiation}
                >
                  <Icon name="user" /> Adicionar negociação
                </Button>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
      )}

      <UpsertStudentNegotiations
        open={open}
        setOpen={unselectStudentNegotiation}
      />
    </Grid>
  );
};

export default StudentNegotiations;
