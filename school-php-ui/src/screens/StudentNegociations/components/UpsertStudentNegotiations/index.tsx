import React from "react";
import { Button, Form, Icon, Modal, TextArea } from "semantic-ui-react";

interface UpsertStudentNegotiationsProps {
  open: boolean;
  setOpen: () => void;
  negotiation?: any;
}

const UpsertStudentNegotiations: React.FC<UpsertStudentNegotiationsProps> = ({
  open,
  setOpen,
  negotiation,
}) => {
  return (
    <Modal open={open} onClose={setOpen} onOpen={setOpen}>
      <Modal.Header>
        {negotiation ? "Editar negociação" : "Nova negociação"}
      </Modal.Header>
      <Modal.Content scrolling>
        <Form>
          <Form.Group unstackable widths={3}>
            <Form.Input label="Curso" placeholder="Curso" />
            <Form.Input label="Semestre" placeholder="Semestre" />
            <Form.Input label="Mês" placeholder="Mês" />
          </Form.Group>
          <Form.Field
            control={TextArea}
            label="Proposta"
            placeholder="Descreva sua proposta..."
          />
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

export default UpsertStudentNegotiations;
