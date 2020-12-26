import API from './ApiAccess';
import { Detail } from '../details/DetailsTypes';

export default class DetailsAPI extends API {
  static async getDetails(accountId: number): Promise<Detail[]> {
    const response = await this.get(`/movement?accountId=^${accountId}$`);
    return response as Detail[];
  }
}
