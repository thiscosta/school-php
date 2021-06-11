import { configureStore } from "@reduxjs/toolkit";
import loginReducer from '@stores/login';
import studentsReducer from '@stores/students';
import debtsReducer from '@stores/debts';
import negotiationsReducer from '@stores/negotiations';
import studentNegotiationsReducer from '@stores/studentNegotiations';

export const store = configureStore({
  reducer: {
      login: loginReducer,
      students: studentsReducer,
      debts: debtsReducer,
      negotiations: negotiationsReducer,
      studentNegotiations: studentNegotiationsReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
