import { IAuthenticatedRequest, IResponse } from "./http";

export interface Student {
  id: number;
  name: string;
  email: string,
  course: string;
  semester: string,
  responsible: string;
}

export interface ListStudentRequest extends IAuthenticatedRequest {}

export interface ListStudentResponse extends IResponse {
    students: Student[];
}

export interface CreateStudentRequest extends IAuthenticatedRequest {
  student: Student;
}

export interface CreateStudentResponse extends IResponse {
    student: Student;
}

export interface UpdateStudentRequest extends IAuthenticatedRequest {
  student: Student;
}

export interface UpdateStudentResponse extends IResponse {
    student: Student;
}

export interface DeleteStudentRequest extends IAuthenticatedRequest {
  id: number;
}

export interface DeleteStudentResponse extends IResponse {
  id: number;
}