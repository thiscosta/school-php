import { Service } from "@schoolApi/services/base.service";
import {
  CreateDebtRequest,
  CreateDebtResponse,
  DeleteDebtRequest,
  DeleteDebtResponse,
  ListDebtRequest,
  ListDebtResponse,
  UpdateDebtRequest,
  UpdateDebtResponse,
} from "@schoolApi/types/debt";

interface IDebtService {
  list(request: ListDebtRequest): Promise<ListDebtResponse>;
}

export class DebtService extends Service implements IDebtService {
  async list({ token }: ListDebtRequest): Promise<ListDebtResponse> {
    try {
      const response = await this.api.get("/debts", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return {
        ...this.parseAxiosResponse(response),
        debts: response.data,
      };
    } catch (err) {
      console.log("Error: ", err);
      throw err;
    }
  }

  async create({
    token,
    debt,
  }: CreateDebtRequest): Promise<CreateDebtResponse> {
    try {
      const response = await this.api.post(
        "/debts",
        { ...debt },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return {
        ...this.parseAxiosResponse(response),
        debt: response.data,
      };
    } catch (err) {
      console.log("Error: ", err);
      throw err;
    }
  }

  async update({
    token,
    debt,
  }: UpdateDebtRequest): Promise<UpdateDebtResponse> {
    try {
      const response = await this.api.put(
        `/debts/${debt.id}`,
        { ...debt },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return {
        ...this.parseAxiosResponse(response),
        debt: response.data,
      };
    } catch (err) {
      console.log("Error: ", err);
      throw err;
    }
  }

  async delete({
    token,
    id,
  }: DeleteDebtRequest): Promise<DeleteDebtResponse> {
    try {
      const response = await this.api.delete(`/debts/${id}`, {
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

export default new DebtService();
