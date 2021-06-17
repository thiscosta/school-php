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

export const listNegotiations = createAsyncThunk<
  ListNegotiationResponse,
  ListNegotiationRequest
>("negotiations/list", async ({ token }, { rejectWithValue }) => {
  try {
    const response = await NegotiationService.list({ token });
    return response;
  } catch (err) {
    console.log(err.response.data);
    return rejectWithValue(err.response.data);
  }
});

export const createNegotiation = createAsyncThunk<
  CreateNegotiationResponse,
  CreateNegotiationRequest
>("negotiations/create", async ({ token, negotiation }, { rejectWithValue }) => {
  try {
    const response = await NegotiationService.create({ negotiation, token });
    return response;
  } catch (err) {
    console.log(err.response.data);
    return rejectWithValue(err.response.data);
  }
});

export const updateNegotiation = createAsyncThunk<
  UpdateNegotiationResponse,
  UpdateNegotiationRequest
>("negotiations/update", async ({ token, negotiation }, { rejectWithValue }) => {
  try {
    const response = await NegotiationService.update({ token, negotiation });
    return response;
  } catch (err) {
    console.log(err.response.data);
    return rejectWithValue(err.response.data);
  }
});

export const deleteNegotiation = createAsyncThunk<
  DeleteNegotiationResponse,
  DeleteNegotiationRequest
>("negotiations/delete", async ({ token, id }, { rejectWithValue }) => {
  try {
    const response = await NegotiationService.delete({ id, token });
    return response;
  } catch (err) {
    console.log(err.response.data);
    return rejectWithValue(err.response.data);
  }
});
