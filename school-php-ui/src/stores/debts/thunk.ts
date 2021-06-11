import { createAsyncThunk } from "@reduxjs/toolkit";
import DebtService from "@schoolApi/services/debts.service";
import {
  CreateDebtRequest,
  CreateDebtResponse,
  DeleteDebtRequest,
  DeleteDebtResponse,
  ListDebtRequest,
  ListDebtResponse,
  UpdateDebtRequest,
  UpdateDebtResponse,
} from "@schoolApi/types/debt";

export const listDebts = createAsyncThunk<
  ListDebtResponse,
  ListDebtRequest
>("debts/list", async ({ token }, { rejectWithValue }) => {
  try {
    const response = await DebtService.list({ token });
    return response;
  } catch (err) {
    return rejectWithValue(err.response.data);
  }
});

export const createDebt = createAsyncThunk<
  CreateDebtResponse,
  CreateDebtRequest
>("debts/create", async ({ token, debt }, { rejectWithValue }) => {
  try {
    const response = await DebtService.create({ debt, token });
    return response;
  } catch (err) {
    return rejectWithValue(err.response.data);
  }
});

export const updateDebt = createAsyncThunk<
  UpdateDebtResponse,
  UpdateDebtRequest
>("debts/update", async ({ token, debt }, { rejectWithValue }) => {
  try {
    const response = await DebtService.update({ token, debt });
    return response;
  } catch (err) {
    return rejectWithValue(err.response.data);
  }
});

export const deleteDebt = createAsyncThunk<
  DeleteDebtResponse,
  DeleteDebtRequest
>("debts/delete", async ({ token, id }, { rejectWithValue }) => {
  try {
    const response = await DebtService.delete({ id, token });
    return response;
  } catch (err) {
    return rejectWithValue(err.response.data);
  }
});
