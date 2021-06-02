import { useAppDispatch } from "@hooks/index";
import { useAppSelector } from "@hooks/index";
import { deleteStudent, listStudents } from "@stores/students/thunk";
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
import UpsertStudents from "./components/UpsertStudents";
import { Student } from "@schoolApi/types/student";
import { selectStudent } from "@stores/students";

const Students: React.FC = () => {
  const [open, setOpen] = useState(false);
  const finding = useAppSelector((state) => state.students.finding);
  const token = useAppSelector((state) => state.login.token);
  const students = useAppSelector((state) => state.students.students);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(listStudents({ token }));
  }, []);

  const unselectStudent = () => {
    dispatch(selectStudent(null));
    setOpen(!open);
  };

  const updateStudent = (student: Student) => {
    dispatch(selectStudent(student));
    setOpen(!open);
  };

  const removeStudent = (student: Student) => {
    dispatch(deleteStudent({ id: student.id, token }));
  };

  return (
    <Grid>
      <ListHeader
        description="Visualize, adicione ou edite alunos"
        title="Alunos"
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
              <Table.HeaderCell>Nome</Table.HeaderCell>
              <Table.HeaderCell>E-mail</Table.HeaderCell>
              <Table.HeaderCell>Curso</Table.HeaderCell>
              <Table.HeaderCell>Semestre</Table.HeaderCell>
              <Table.HeaderCell>Responsável</Table.HeaderCell>
              <Table.HeaderCell>#</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {students.map((student, index) => (
              <Table.Row key={index}>
                <Table.Cell>{student.id}</Table.Cell>
                <Table.Cell>{student.name}</Table.Cell>
                <Table.Cell>{student.email}</Table.Cell>
                <Table.Cell>{student.course}</Table.Cell>
                <Table.Cell>{student.semester}</Table.Cell>
                <Table.Cell>{student.responsible}</Table.Cell>
                <Table.Cell>
                  <Button.Group>
                    <Button
                      icon="edit"
                      primary
                      onClick={() => {
                        updateStudent(student);
                      }}
                    ></Button>
                    <Button.Or text="ou" />
                    <Popup
                      trigger={<Button icon="remove" color="red" />}
                      content={
                        <Button
                          color="red"
                          content="Excluir aluno"
                          onClick={() => {
                            removeStudent(student);
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
                  onClick={unselectStudent}
                >
                  <Icon name="user" /> Adicionar aluno
                </Button>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
      )}

      <UpsertStudents open={open} setOpen={unselectStudent} />
    </Grid>
  );
};

export default Students;
