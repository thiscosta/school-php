import { createAsyncThunk } from "@reduxjs/toolkit";
import NegotiationService from "@schoolApi/services/negotiations.service";
import {
  CreateNegotiationRequest,
  CreateNegotiationResponse,
  DeleteNegotiationRequest,
  DeleteNegotiationResponse,
  ListNegotiationRequest,
  ListNegotiationResponse,
  UpdateNegotiationRequest,
  UpdateNegotiationResponse,
} from "@schoolApi/types/negotiation";

export const listStudentNegotiations = createAsyncThunk<
  ListNegotiationResponse,
  ListNegotiationRequest
>("studentNegotiations/list", async ({ token }, { rejectWithValue }) => {
  try {
    const response = await NegotiationService.list({ token });
    return response;
  } catch (err) {
    return rejectWithValue(err.response.data);
  }
});

export const createStudentNegotiation = createAsyncThunk<
  CreateNegotiationResponse,
  CreateNegotiationRequest
>("studentNegotiations/create", async ({ token, negotiation }, { rejectWithValue }) => {
  try {
    const response = await NegotiationService.create({ negotiation, token });
    return response;
  } catch (err) {
    return rejectWithValue(err.response.data);
  }
});

export const updateStudentNegotiation = createAsyncThunk<
  UpdateNegotiationResponse,
  UpdateNegotiationRequest
>("studentNegotiations/update", async ({ token, negotiation }, { rejectWithValue }) => {
  try {
    const response = await NegotiationService.update({ token, negotiation });
    return response;
  } catch (err) {
    return rejectWithValue(err.response.data);
  }
});

export const deleteStudentNegotiation = createAsyncThunk<
  DeleteNegotiationResponse,
  DeleteNegotiationRequest
>("studentNegotiations/delete", async ({ token, id }, { rejectWithValue }) => {
  try {
    const response = await NegotiationService.delete({ id, token });
    return response;
  } catch (err) {
    return rejectWithValue(err.response.data);
  }
});
