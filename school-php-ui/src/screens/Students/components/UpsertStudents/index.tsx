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
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const [semester, setSemester] = useState("");
  const [responsible, setResponsible] = useState("");
  const [zipcode, setZipCode] = useState("");
  const [number, setNumber] = useState("");
  const [street, setStreet] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [city, setCity] = useState("");
  const [state, setUF] = useState("");

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
      setZipCode(student?.zipcode!);
      setNumber(student?.number!);
      setStreet(student?.street!);
      setNeighborhood(student?.neighborhood!);
      setCity(student?.city!);
      setUF(student?.state!);
    }

    getInitialStudentParams();

    return () => {
      setName("");
      setEmail("");
      setCourse("");
      setSemester("");
      setResponsible("");
      setZipCode("");
      setNumber("");
      setStreet("");
      setNeighborhood("");
      setCity("");
      setUF("");
    };
  }, [student]);

  const handleConfirm = async () => {
    const modifiedStudent = { ...student, name, email, course, responsible, semester, zipcode, number, street, neighborhood, city, state, ...(!student && { password }) };
    const action  = student ? updateStudent : createStudent;

    dispatch(action({ student: modifiedStudent, token }))
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
            {!student && (<Form.Input
              type="password"
              label="Senha"
              placeholder="Senha"
              value={password}
              onChange={(_e, { value }) => {
                setPassword(value);
              }}
            />)}
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
              label="Respons??vel"
              placeholder="Respons??vel"
              value={responsible}
              onChange={(_e, { value }) => {
                setResponsible(value);
              }}
            />
          </Form.Group>
          <Form.Group widths={3}>
            <Form.Input
              label="CEP"
              placeholder="CEP"
              value={zipcode}
              onChange={(_e, { value }) => {
                setZipCode(value);
              }}
            />
            <Form.Input
              label="N??mero"
              placeholder="N??mero"
              value={number}
              onChange={(_e, { value }) => {
                setNumber(value);
              }}
            />
            <Form.Input
              label="Rua"
              placeholder="Rua"
              value={street}
              readOnly
            />
          </Form.Group>
          <Form.Group widths={3}>
            <Form.Input
              label="Bairro"
              placeholder="Bairro"
              value={neighborhood}
            />
            <Form.Input
              label="Cidade"
              placeholder="Cidade"
              value={city}
            />
            <Form.Input
              label="Estado"
              placeholder="Estado"
              value={state}
              readOnly
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
