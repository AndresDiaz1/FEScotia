import { Account } from '../accounts/AccountTypes';
import API from './ApiAccess';
import { orderAccounts } from '../utils/Utils';

export default class AccountAPI extends API {
  static async getAccounts(clientId: number): Promise<Account[]> {
    const response = await this.get(`/account?clientId=^${clientId}$`);
    return orderAccounts(response as Account[]);
  }
}
