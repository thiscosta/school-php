import { useAppDispatch, useAppSelector } from "@hooks/index";
import React, { useEffect, useState } from "react";
import { Button, Form, Icon, Modal } from "semantic-ui-react";
import { updateStudentNegotiation, createStudentNegotiation } from "@stores/studentNegotiations/thunk";

interface UpsertStudentNegotiationsProps {
  open: boolean;
  setOpen: () => void;
}

const UpsertStudentNegotiations: React.FC<UpsertStudentNegotiationsProps> = ({ open, setOpen }) => {
  const [student, setStudent] = useState<number | null>();
  const [debt, setDebt] = useState<number | null>();
  const [proposal, setProposal] = useState("");

  const dropdownStudents = useAppSelector((state) => state.students.dropdownStudents);
  const dropdownDebts = useAppSelector((state) => state.debts.dropdownDebts);

  const studentNegotiation = useAppSelector((state) => state.studentNegotiations.editingNegotiation);
  const token = useAppSelector((state) => state.login.token);
  const dispatch = useAppDispatch();

  useEffect(() => {
    function getInitialStudentNegotiationParams() {
      setProposal(studentNegotiation?.proposal!);
      setDebt(studentNegotiation?.debt!.id || null);
      setStudent(studentNegotiation?.student!.id || null);
    }

    getInitialStudentNegotiationParams();

    return () => {
      setProposal("");
      setDebt(null);
      setStudent(null);
    };
  }, [studentNegotiation]);

  const handleConfirm = async () => {
    const modifiedStudentNegotiation = {
      ...studentNegotiation,
      proposal,
      debt_id: Number(debt),
      student_id: Number(student),
      accepted: false,
      finished: false,
    };
    const action = studentNegotiation ? updateStudentNegotiation : createStudentNegotiation;
    dispatch(action({ negotiation: modifiedStudentNegotiation, token }));
    setOpen();
    };

  return (
    <Modal open={open} onClose={setOpen} onOpen={setOpen}>
      <Modal.Header>{studentNegotiation?.id || "Nova negociação"}</Modal.Header>
      <Modal.Content >
        <Form>
          <Form.Group unstackable widths={3}>
            <Form.Select
              label="Aluno"
              placeholder="Aluno"
              options={dropdownStudents}
              value={student!}
              onChange={(_e, { value }) => {
                setStudent(Number(value));
              }}
            />
            <Form.Select
              label="Dívida"
              placeholder="Dívida"
              options={dropdownDebts}
              value={student!}
              onChange={(_e, { value }) => {
                setDebt(Number(value));
              }}
            />
            <Form.Input
              label="Proposta"
              placeholder="Proposta"
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
