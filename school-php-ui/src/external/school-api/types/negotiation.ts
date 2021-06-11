import { IAuthenticatedRequest, IResponse } from "./http";

export interface Negotiation {
  id?: number;
  student: string;
  debt: string;
  proposal: string;
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