import { useAppDispatch, useAppSelector } from "@hooks/index";
import React, { useEffect, useState } from "react";
import { Button, Form, Icon, Modal } from "semantic-ui-react";
import { updateDebt, createDebt } from "@stores/debts/thunk";

interface UpsertDebtsProps {
  open: boolean;
  setOpen: () => void;
}

const UpsertDebts: React.FC<UpsertDebtsProps> = ({ open, setOpen }) => {
  const [student, setStudent] = useState("");
  const [course, setCourse] = useState("");
  const [semester, setSemester] = useState("");
  const [month, setMonth] = useState("");
  const [value, setValue] = useState("");
  const [status, setStatus] = useState("");

  const debt = useAppSelector((state) => state.debts.editingDebt);
  const token = useAppSelector((state) => state.login.token);
  const dispatch = useAppDispatch();

  useEffect(() => {
    function getInitialDebtParams() {
      setStudent(debt?.student!);
      setValue(debt?.value!);
      setCourse(debt?.course!);
      setSemester(debt?.semester!);
      setStatus(debt?.status!);
    }

    getInitialDebtParams();

    return () => {
      setStudent("");
      setValue("");
      setCourse("");
      setSemester("");
      setStatus("");
    };
  }, [debt]);

  const handleConfirm = async () => {
    const modifiedDebt = {
      ...debt,
      student,
      value,
      course,
      status,
      semester,
      month,
    };
    const action = debt ? updateDebt : createDebt;
    dispatch(action({ debt: modifiedDebt, token: "123" }));
    setOpen();
  };

  return (
    <Modal open={open} onClose={setOpen} onOpen={setOpen}>
      <Modal.Header>{debt?.id || "Nova dívida"}</Modal.Header>
      <Modal.Content scrolling>
        <Form>
          <Form.Group unstackable widths={2}>
            <Form.Input
              label="Aluno"
              placeholder="Aluno"
              value={student}
              onChange={(_e, { value }) => {
                setStudent(value);
              }}
            />
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
          </Form.Group>
          <Form.Group widths={3}>
            <Form.Input
              type="month"
              label="Mês"
              placeholder="Mês"
              value={month}
              onChange={(_e, { value }) => {
                setMonth(value);
              }}
            />
            <Form.Input
              type="value"
              label="Valor"
              placeholder="Valor"
              value={value}
              onChange={(_e, { value }) => {
                setValue(value);
              }}
            />
            <Form.Input
              label="Status"
              placeholder="Status"
              value={status}
              onChange={(_e, { value }) => {
                setStatus(value);
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

export default UpsertDebts;
