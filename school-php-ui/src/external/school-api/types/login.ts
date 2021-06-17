import { IResponse } from "@schoolApi/types/http";

export interface LoginRequest {
    email: string;
    password: string;
}

export interface LoginResponse extends IResponse {
    token: string;
    user: {
        id: number;
        name: string;
        profile: string;
    }
}