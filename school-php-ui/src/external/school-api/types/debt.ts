import { IAuthenticatedRequest, IResponse } from "./http";

export interface Debt {
  id?: number;
  student: string;
  course: string;
  semester: string;
  month: string;
  value: string;
  status: string;
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