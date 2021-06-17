import { Service } from "@schoolApi/services/base.service";
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

interface INegotiationService {
  list(request: ListNegotiationRequest): Promise<ListNegotiationResponse>;
}

export class NegotiationService extends Service implements INegotiationService {
  async list({ token }: ListNegotiationRequest): Promise<ListNegotiationResponse> {
    try {
      const response = await this.api.get("/negotiations", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return {
        ...this.parseAxiosResponse(response),
        negotiations: response.data,
      };
    } catch (err) {
      console.log("Error: ", err);
      throw err;
    }
  }

  async create({
    token,
    negotiation,
  }: CreateNegotiationRequest): Promise<CreateNegotiationResponse> {
    try {
      const response = await this.api.post(
        "/negotiations",
        { ...negotiation },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return {
        ...this.parseAxiosResponse(response),
        negotiation: response.data,
      };
    } catch (err) {
      console.log("Error: ", err);
      throw err;
    }
  }

  async update({
    token,
    negotiation,
  }: UpdateNegotiationRequest): Promise<UpdateNegotiationResponse> {
    try {
      const response = await this.api.put(
        `/negotiations/${negotiation.id}`,
        { ...negotiation },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return {
        ...this.parseAxiosResponse(response),
        negotiation: response.data,
      };
    } catch (err) {
      console.log("Error: ", err);
      throw err;
    }
  }

  async delete({
    token,
    id,
  }: DeleteNegotiationRequest): Promise<DeleteNegotiationResponse> {
    try {
      const response = await this.api.delete(`/negotiations/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return {
        ...this.parseAxiosResponse(response),
        id,
      };
    } catch (err) {
      console.log("Error: ", err);
      throw err;
    }
  }
}

export default new NegotiationService();
