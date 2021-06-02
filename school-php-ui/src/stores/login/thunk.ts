import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoginRequest, LoginResponse } from "@schoolApi/types/login";
import LoginService from "@schoolApi/services/login.service";

export const login = createAsyncThunk<LoginResponse, LoginRequest>(
  "login/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await LoginService.login({ email, password });
      return response;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
