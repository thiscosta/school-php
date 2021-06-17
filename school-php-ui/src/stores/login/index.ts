import { createSlice } from "@reduxjs/toolkit";
import { login } from "@stores/login/thunk";

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
  },
});

export default loginSlice.reducer;
