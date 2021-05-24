import React from "react";
import { Button, Form, Icon, Modal } from "semantic-ui-react";

interface UpsertStudentsProps {
  open: boolean;
  setOpen: () => void;
  student?: any;
}

const UpsertStudents: React.FC<UpsertStudentsProps> = ({
  open,
  setOpen,
  student,
}) => {
  return (
    <Modal open={open} onClose={setOpen} onOpen={setOpen}>
      <Modal.Header>{student?.name || "Novo aluno"}</Modal.Header>
      <Modal.Content scrolling>
        <Form>
          <Form.Group unstackable widths={2}>
            <Form.Input label="Nome" placeholder="Nome" />
            <Form.Input type="email" label="E-mail" placeholder="E-mail" />
          </Form.Group>
          <Form.Group widths={3}>
            <Form.Input label="Curso" placeholder="Curso" />
            <Form.Input label="Semestre" placeholder="Semestre" />
            <Form.Input label="Responsável" placeholder="Responsável" />
          </Form.Group>
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={setOpen} icon labelPosition="left">
          <Icon name="remove" />
          Cancelar
        </Button>
        <Button onClick={setOpen} positive icon labelPosition="left">
          <Icon name="checkmark" />
          Confirmar
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default UpsertStudents;
