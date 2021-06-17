import { IAuthenticatedRequest, IResponse } from "./http";

export interface Negotiation {
  id?: number;
  proposal: string;
  accepted: boolean;
  finished: boolean;
  student_id?: number;
  debt_id?: number;
  student?: {
    id: number;
    name: string;
    email: string;
    course: string;
    semester: string;
    responsible: string;
    user_id: number;
  };
  debt?: {
    id: number;
    course: string;
    semester: number;
    month: number;
    value: string;
    status: string;
    student_id: number;
    school_id: number;
  };
}

export interface ListNegotiationRequest extends IAuthenticatedRequest {}

export interface ListNegotiationResponse extends IResponse {
    negotiations: Negotiation[];
}

export interface CreateNegotiationRequest extends IAuthenticatedRequest {
  negotiation?: Negotiation;
}

export interface CreateNegotiationResponse extends IResponse {
    negotiation: Negotiation;
}

export interface UpdateNegotiationRequest extends IAuthenticatedRequest {
  negotiation: Negotiation;
}

export interface UpdateNegotiationResponse extends IResponse {
    negotiation: Negotiation;
}

export interface DeleteNegotiationRequest extends IAuthenticatedRequest {
  id: number;
}

export interface DeleteNegotiationResponse extends IResponse {
  id: number;
}