import { IAuthenticatedRequest, IResponse } from "./http";

export interface Debt {
  id?: number;
  student?: {
    id: number;
    name: string;
    email: string;
    course: string;
    semester: string;
    responsible: string;
    user_id: number;
  };
  course: string;
  semester: number;
  month: number;
  value: string;
  status: string
  student_id: number;
  school_id: number;
  school?: {
    id: number;
    name: string;
    user_id: number;
  }
}

export interface ListDebtRequest extends IAuthenticatedRequest {}

export interface ListDebtResponse extends IResponse {
    debts: Debt[];
}

export interface CreateDebtRequest extends IAuthenticatedRequest {
  debt?: Debt;
}

export interface CreateDebtResponse extends IResponse {
    debt: Debt;
}

export interface UpdateDebtRequest extends IAuthenticatedRequest {
  debt: Debt;
}

export interface UpdateDebtResponse extends IResponse {
    debt: Debt;
}

export interface DeleteDebtRequest extends IAuthenticatedRequest {
  id: number;
}

export interface DeleteDebtResponse extends IResponse {
  id: number;
}