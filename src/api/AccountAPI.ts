import API from './ApiAccess';

export default class AccountAPI extends API {
  static async getAccounts(clientId: number): Promise<Account[]> {
    const response = await this.get(`/account?clientId=^${clientId}$`);
    return response as Account[];
  }
}
