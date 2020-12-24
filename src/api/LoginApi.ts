import { User } from '../login/LoginTypes';
import API from './ApiAccess';

export default class LoginAPI extends API {
    static async getClients(): Promise<User[]> {
        const response = (await this.get('/clients'));
        return response;
    }

}
