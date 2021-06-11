import { useAppDispatch, useAppSelector } from "@hooks/index";
import React, { useEffect, useState } from "react";
import { Button, Form, Icon, Modal } from "semantic-ui-react";
import { updateStudentNegotiation, createStudentNegotiation } from "@stores/studentNegotiations/thunk";

interface UpsertStudentNegotiationsProps {
  open: boolean;
  setOpen: () => void;
}

const UpsertStudentNegotiations: React.FC<UpsertStudentNegotiationsProps> = ({ open, setOpen }) => {
  const [proposal, setProposal] = useState("");
  const [debt, setDebt] = useState("");

  const studentNegotiation = useAppSelector((state) => state.studentNegotiations.editingNegotiation);
  const token = useAppSelector((state) => state.login.token);
  const dispatch = useAppDispatch();

  useEffect(() => {
    function getInitialStudentNegotiationParams() {
      setProposal(studentNegotiation?.proposal!);
      setDebt(studentNegotiation?.debt!);
    }

    getInitialStudentNegotiationParams();

    return () => {
      setProposal("");
      setDebt("");
    };
  }, [studentNegotiation]);

  const handleConfirm = async () => {
    const modifiedStudentNegotiation = {
      ...studentNegotiation,
      proposal,
      debt,
      student: '123'
    };
    const action = studentNegotiation ? updateStudentNegotiation : createStudentNegotiation;
    dispatch(action({ negotiation: modifiedStudentNegotiation, token: "123" }));
    setOpen();
  };

  return (
    <Modal open={open} onClose={setOpen} onOpen={setOpen}>
      <Modal.Header>{studentNegotiation?.id || "Nova dívida"}</Modal.Header>
      <Modal.Content scrolling>
        <Form>
          <Form.Group unstackable widths={2}>
            <Form.Input
              label="Dívida"
              placeholder="Dívida"
              value={debt}
              onChange={(_e, { value }) => {
                setDebt(value);
              }}
            />
            <Form.Input
              label="Semestre"
              placeholder="Semestre"
              value={proposal}
              onChange={(_e, { value }) => {
                setProposal(value);
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

export default UpsertStudentNegotiations;
