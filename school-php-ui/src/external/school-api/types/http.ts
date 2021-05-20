export interface IResponse {
  success: boolean;
  statusCode: number;
}

export interface IAuthenticatedRequest {
    token: string;
}