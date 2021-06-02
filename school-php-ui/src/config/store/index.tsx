import { configureStore } from "@reduxjs/toolkit";
import loginReducer from '@stores/login';
import studentsReducer from '@stores/students';

export const store = configureStore({
  reducer: {
      login: loginReducer,
      students: studentsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
