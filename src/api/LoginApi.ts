import { User } from '../login/LoginTypes';
import API from './ApiAccess';

export default class LoginAPI extends API {
  static async getClients(): Promise<User[]> {
    const response = await this.get('/clients');
    return response as User[];
  }

  static async getClient(name: string, CC: string): Promise<User[]> {
    const response = await this.get(`/clients?name=${name}&&CC=${CC}`);
    return response as User[];
  }
}
