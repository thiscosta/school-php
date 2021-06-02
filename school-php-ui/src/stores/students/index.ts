import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Student } from "@schoolApi/types/student";
import {
  listStudents,
  createStudent,
  updateStudent,
  deleteStudent,
} from "@stores/students/thunk";

interface StudentState {
  finding: boolean;
  creating: boolean;
  created: boolean;
  updating: boolean;
  updated: boolean;
  removing: boolean;
  removed: boolean;
  students: Student[];
  editingStudent: Student | null;
}

const initialState: StudentState = {
  finding: false,
  creating: false,
  created: false,
  updating: false,
  updated: false,
  removing: false,
  removed: false,
  students: [],
  editingStudent: null,
};

export const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    selectStudent(state, action: PayloadAction<Student | null>) {
      state.editingStudent = action.payload ? { ...action.payload } : action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(listStudents.pending, (state) => {
      state.finding = true;
    });
    builder.addCase(listStudents.fulfilled, (state, action) => {
      state.finding = false;
      state.students = [...action.payload.students];
    });
    builder.addCase(createStudent.pending, (state) => {
      state.creating = true;
      state.created = false;
    });
    builder.addCase(createStudent.fulfilled, (state, action) => {
      state.creating = false;
      state.created = true;
      state.students = [...state.students, { ...action.payload.student }];
    });
    builder.addCase(updateStudent.pending, (state, { payload }: any) => {
      state.updating = true;
      state.updated = false;
      state.editingStudent = { ...payload.student };
    });
    builder.addCase(updateStudent.fulfilled, (state, action) => {
      state.updating = false;
      state.updated = true;
      state.editingStudent = null;
      state.students = [
        ...state.students.map((student) =>
          student.id === action.payload.student.id
            ? { ...action.payload.student }
            : student
        ),
      ];
    });
    builder.addCase(deleteStudent.pending, (state) => {
      state.removing = true;
      state.removed = false;
    });
    builder.addCase(deleteStudent.fulfilled, (state, action) => {
      state.removing = false;
      state.removed = true;
      state.students = [
        ...state.students.filter((student) => student.id !== action.payload.id),
      ];
    });
  },
});

export const { selectStudent } = studentSlice.actions;

export default studentSlice.reducer;
