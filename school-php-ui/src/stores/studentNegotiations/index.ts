import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Negotiation } from "@schoolApi/types/negotiation";
import {
  deleteStudentNegotiation,
  createStudentNegotiation,
  updateStudentNegotiation,
  listStudentNegotiations,
} from "@stores/studentNegotiations/thunk";
import { notify } from "react-notify-toast";

interface StudentNegotiationState {
  finding: boolean;
  creating: boolean;
  created: boolean;
  updating: boolean;
  updated: boolean;
  removing: boolean;
  removed: boolean;
  negotiations: Negotiation[];
  editingNegotiation: Negotiation | null;
}

const initialState: StudentNegotiationState = {
  finding: false,
  creating: false,
  created: false,
  updating: false,
  updated: false,
  removing: false,
  removed: false,
  negotiations: [],
  editingNegotiation: null,
};

export const studentNegotiationSlice = createSlice({
  name: "studentNegotiation",
  initialState,
  reducers: {
    selectStudentNegotiation(state, action: PayloadAction<Negotiation | null>) {
      state.editingNegotiation = action.payload ? { ...action.payload } : action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(listStudentNegotiations.pending, (state) => {
      state.finding = true;
    });
    builder.addCase(listStudentNegotiations.fulfilled, (state, action) => {
      state.finding = false;
      state.negotiations = [...action.payload.negotiations];
    });
    builder.addCase(listStudentNegotiations.rejected, (state) => {
      state.finding = false;
      state.negotiations = [];
    });
    builder.addCase(createStudentNegotiation.pending, (state) => {
      state.creating = true;
      state.created = false;
    });
    builder.addCase(createStudentNegotiation.fulfilled, (state, action) => {
      state.creating = false;
      state.created = true;
      state.negotiations = [...state.negotiations, { ...action.payload.negotiation }];
      notify.show('Negociação criada com sucesso', 'success', 2000)
    });
    builder.addCase(updateStudentNegotiation.pending, (state) => {
      state.updating = true;
      state.updated = false;
    });
    builder.addCase(updateStudentNegotiation.fulfilled, (state, action) => {
      state.updating = false;
      state.updated = true;
      state.editingNegotiation = null;
      state.negotiations = [
        ...state.negotiations.map((negotiation) =>
          negotiation.id === action.payload.negotiation.id
            ? { ...action.payload.negotiation }
            : negotiation
        ),
      ];
      notify.show('Negociação atualizada com sucesso', 'success', 2000)
    });
    builder.addCase(deleteStudentNegotiation.pending, (state) => {
      state.removing = true;
      state.removed = false;
    });
    builder.addCase(deleteStudentNegotiation.fulfilled, (state, action) => {
      state.removing = false;
      state.removed = true;
      state.negotiations = [
        ...state.negotiations.filter((negotiation) => negotiation.id !== action.payload.id),
      ];
      notify.show('Negociação excluída com sucesso', 'success', 2000)
    });
  },
});

export const { selectStudentNegotiation } = studentNegotiationSlice.actions;

export default studentNegotiationSlice.reducer;
