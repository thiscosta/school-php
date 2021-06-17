import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Debt } from "@schoolApi/types/debt";
import {
  listDebts,
  createDebt,
  updateDebt,
  deleteDebt,
} from "@stores/debts/thunk";
import { notify } from "react-notify-toast";

interface DebtState {
  finding: boolean;
  creating: boolean;
  created: boolean;
  updating: boolean;
  updated: boolean;
  removing: boolean;
  removed: boolean;
  debts: Debt[];
  editingDebt: Debt | null;
  dropdownDebts: any[];
}

const initialState: DebtState = {
  finding: false,
  creating: false,
  created: false,
  updating: false,
  updated: false,
  removing: false,
  removed: false,
  debts: [],
  editingDebt: null,
  dropdownDebts: []
};

export const debtSlice = createSlice({
  name: "debt",
  initialState,
  reducers: {
    selectDebt(state, action: PayloadAction<Debt | null>) {
      state.editingDebt = action.payload ? { ...action.payload } : action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(listDebts.pending, (state) => {
      state.finding = true;
    });
    builder.addCase(listDebts.fulfilled, (state, action) => {
      state.finding = false;
      state.debts = [...action.payload.debts];
      state.dropdownDebts = [...state.debts.map(debt => {
        return {
          key: debt.id,
          value: debt.id,
          text: debt.id + " - " + debt.student?.name
        }
      })];
    });
    builder.addCase(listDebts.rejected, (state, action) => {
      state.finding = false;
      state.debts = [];
    });
    builder.addCase(createDebt.pending, (state) => {
      state.creating = true;
      state.created = false;
    });
    builder.addCase(createDebt.fulfilled, (state, action) => {
      state.creating = false;
      state.created = true;
      state.debts = [...state.debts, { ...action.payload.debt }];
      notify.show('Dívida criada com sucesso', 'success', 2000)
    });
    builder.addCase(updateDebt.pending, (state) => {
      state.updating = true;
      state.updated = false;
    });
    builder.addCase(updateDebt.fulfilled, (state, action) => {
      state.updating = false;
      state.updated = true;
      state.editingDebt = null;
      state.debts = [
        ...state.debts.map((debt) =>
          debt.id === action.payload.debt.id
            ? { ...action.payload.debt }
            : debt
        ),
      ];
      notify.show('Dívida atualizada com sucesso', 'success', 2000)
    });
    builder.addCase(deleteDebt.pending, (state) => {
      state.removing = true;
      state.removed = false;
    });
    builder.addCase(deleteDebt.fulfilled, (state, action) => {
      state.removing = false;
      state.removed = true;
      state.debts = [
        ...state.debts.filter((debt) => debt.id !== action.payload.id),
      ];
      notify.show('Dívida excluída com sucesso', 'success', 2000)
    });
  },
});

export const { selectDebt } = debtSlice.actions;

export default debtSlice.reducer;
