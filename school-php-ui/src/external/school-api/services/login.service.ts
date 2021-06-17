import { LoginRequest, LoginResponse } from "@schoolApi/types/login";
import { Service } from "@schoolApi/services/base.service";

interface ILoginService {
  login(request: LoginRequest): Promise<LoginResponse>;
}

export class LoginService extends Service implements ILoginService {
  async login(request: LoginRequest): Promise<LoginResponse> {
    try {
      const response = await this.api.post("/login", request);
      return {
        ...this.parseAxiosResponse(response),
        token: response.data.token,
        user: {...response.data.user}
      };
    } catch (err) {
      console.log(err.response.data);
      throw err;
    }
  }
}

export default new LoginService()
