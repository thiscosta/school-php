import { createAsyncThunk } from "@reduxjs/toolkit";
import StudentService from "@schoolApi/services/students.service";
import {
  CreateStudentRequest,
  CreateStudentResponse,
  DeleteStudentRequest,
  DeleteStudentResponse,
  ListStudentRequest,
  ListStudentResponse,
  UpdateStudentRequest,
  UpdateStudentResponse,
} from "@schoolApi/types/student";

export const listStudents = createAsyncThunk<
  ListStudentResponse,
  ListStudentRequest
>("students/list", async ({ token }, { rejectWithValue }) => {
  try {
    const response = await StudentService.list({ token });
    return response;
  } catch (err) {
    console.log(err.response.data);
    return rejectWithValue(err.response.data);
  }
});

export const createStudent = createAsyncThunk<
  CreateStudentResponse,
  CreateStudentRequest
>("students/create", async ({ token, student }, { rejectWithValue }) => {
  try {
    const response = await StudentService.create({ student, token });
    return response;
  } catch (err) {
    console.log(err.response.data);
    return rejectWithValue(err.response.data);
  }
});

export const updateStudent = createAsyncThunk<
  UpdateStudentResponse,
  UpdateStudentRequest
>("students/update", async ({ token, student }, { rejectWithValue }) => {
  try {
    const response = await StudentService.update({ token, student });
    return response;
  } catch (err) {
    console.log(err.response.data);
    return rejectWithValue(err.response.data);
  }
});

export const deleteStudent = createAsyncThunk<
  DeleteStudentResponse,
  DeleteStudentRequest
>("students/delete", async ({ token, id }, { rejectWithValue }) => {
  try {
    const response = await StudentService.delete({ id, token });
    return response;
  } catch (err) {
    console.log(err.response.data);
    return rejectWithValue(err.response.data);
  }
});
