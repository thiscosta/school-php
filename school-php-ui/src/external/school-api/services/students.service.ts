import { Service } from "@schoolApi/services/base.service";
import {
  CreateStudentRequest,
  CreateStudentResponse,
  DeleteStudentRequest,
  DeleteStudentResponse,
  ListStudentRequest,
  ListStudentResponse,
  UpdateStudentRequest,
  UpdateStudentResponse,
} from "@schoolApi/types/student";

interface IStudentService {
  list(request: ListStudentRequest): Promise<ListStudentResponse>;
}

export class StudentService extends Service implements IStudentService {
  async list({ token }: ListStudentRequest): Promise<ListStudentResponse> {
    try {
      const response = await this.api.get("/students", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return {
        ...this.parseAxiosResponse(response),
        students: response.data,
      };
    } catch (err) {
      console.log("Error: ", err);
      throw err;
    }
  }

  async create({
    token,
    student,
  }: CreateStudentRequest): Promise<CreateStudentResponse> {
    try {
      const response = await this.api.post(
        "/students",
        { student },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return {
        ...this.parseAxiosResponse(response),
        student: response.data,
      };
    } catch (err) {
      console.log("Error: ", err);
      throw err;
    }
  }

  async update({
    token,
    student,
  }: UpdateStudentRequest): Promise<UpdateStudentResponse> {
    try {
      const response = await this.api.put(
        `/students/${student.id}`,
        { student },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return {
        ...this.parseAxiosResponse(response),
        student: response.data,
      };
    } catch (err) {
      console.log("Error: ", err);
      throw err;
    }
  }

  async delete({
    token,
    id,
  }: DeleteStudentRequest): Promise<DeleteStudentResponse> {
    try {
      const response = await this.api.delete(`/students/${id}`, {
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

export default new StudentService();
