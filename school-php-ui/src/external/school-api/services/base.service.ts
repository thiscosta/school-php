import { AxiosInstance, AxiosResponse } from 'axios';
import api from '@schoolApi/index';
import { IResponse } from '@schoolApi/types/http';

interface IService {
    api: AxiosInstance;
    parseAxiosResponse(response: AxiosResponse): IResponse
}

export abstract class Service implements IService {

    api: AxiosInstance = api;

    parseAxiosResponse(response: AxiosResponse<any>): IResponse {
      return {
          statusCode: response.status,
          success: response.status < 300
      }
    }

}