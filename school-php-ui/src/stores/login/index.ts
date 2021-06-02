import { createSlice } from "@reduxjs/toolkit";
import { login } from "@stores/login/thunk";

interface LoginState {
  logging: boolean;
  logged: boolean;
  token: string;
}

const initialState: LoginState = {
  logging: false,
  logged: false,
  token: "",
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.logging = true;
      state.logged = false;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      //state.logging = false;
      state.logged = true;
      state.token = action.payload.token;
    });
  },
});

export default loginSlice.reducer;
