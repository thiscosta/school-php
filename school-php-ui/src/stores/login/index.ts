import { createSlice } from "@reduxjs/toolkit";
import { login, logout } from "@stores/login/thunk";
import { notify } from "react-notify-toast";

interface LoginState {
  logging: boolean;
  logged: boolean;
  token: string;
  userId?: number;
  userName?: string;
  userProfile?: string;
}

const initialState: LoginState = {
  logging: false,
  logged: false,
  token: ""
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(logout.fulfilled, (state) => {
      state.logging = false;
      state.logged = false;
      state.token = "";
      state.userName =  "";
      state.userId =  0;
      state.userProfile =  "";
    });
    builder.addCase(login.pending, (state) => {
      state.logging = true;
      state.logged = false;
      state.token = "";
      state.userName =  "";
      state.userId =  0;
      state.userProfile =  "";
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.logging = false;
      state.logged = true;
      state.token = action.payload.token;
      state.userName = action.payload.user.name;
      state.userId = action.payload.user.id;
      state.userProfile = action.payload.user.profile;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.logging = false;
      state.logged = false;
      state.token = '';
      state.userName =  '';
      state.userId =  undefined;
      state.userProfile =  '';
      notify.show('Login inválido', 'error', 2000)
    });
  },
});

export default loginSlice.reducer;
