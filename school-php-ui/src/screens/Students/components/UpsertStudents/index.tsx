import { useAppDispatch, useAppSelector } from "@hooks/index";
import React, { useEffect, useState } from "react";
import { Button, Form, Icon, Modal } from "semantic-ui-react";
import { updateStudent, createStudent } from "@stores/students/thunk";

interface UpsertStudentsProps {
  open: boolean;
  setOpen: () => void;
}

const UpsertStudents: React.FC<UpsertStudentsProps> = ({ open, setOpen }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const [semester, setSemester] = useState("");
  const [responsible, setResponsible] = useState("");

  const student = useAppSelector((state) => state.students.editingStudent);
  const token = useAppSelector((state) => state.login.token);
  const dispatch = useAppDispatch();

  useEffect(() => {
    function getInitialStudentParams() {
      setName(student?.name!);
      setEmail(student?.email!);
      setCourse(student?.course!);
      setSemester(student?.semester!);
      setResponsible(student?.responsible!);
    }

    getInitialStudentParams();

    return () => {
      setName("");
      setEmail("");
      setCourse("");
      setSemester("");
      setResponsible("");
    };
  }, [student]);

  const handleConfirm = () => {
    dispatch(
      student
        ? updateStudent({ student, token })
        : createStudent({ student: student!, token })
    );
    setOpen();
  };

  return (
    <Modal open={open} onClose={setOpen} onOpen={setOpen}>
      <Modal.Header>{student?.name || "Novo aluno"}</Modal.Header>
      <Modal.Content scrolling>
        <Form>
          <Form.Group unstackable widths={2}>
            <Form.Input
              label="Nome"
              placeholder="Nome"
              value={name}
              onChange={(_e, { value }) => {
                setName(value);
              }}
            />
            <Form.Input
              type="email"
              label="E-mail"
              placeholder="E-mail"
              value={email}
              onChange={(_e, { value }) => {
                setEmail(value);
              }}
            />
          </Form.Group>
          <Form.Group widths={3}>
            <Form.Input
              label="Curso"
              placeholder="Curso"
              value={course}
              onChange={(_e, { value }) => {
                setCourse(value);
              }}
            />
            <Form.Input
              label="Semestre"
              placeholder="Semestre"
              value={semester}
              onChange={(_e, { value }) => {
                setSemester(value);
              }}
            />
            <Form.Input
              label="Responsável"
              placeholder="Responsável"
              value={responsible}
              onChange={(_e, { value }) => {
                setResponsible(value);
              }}
            />
          </Form.Group>
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={setOpen} icon labelPosition="left">
          <Icon name="remove" />
          Cancelar
        </Button>
        <Button onClick={handleConfirm} positive icon labelPosition="left">
          <Icon name="checkmark" />
          Confirmar
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default UpsertStudents;
