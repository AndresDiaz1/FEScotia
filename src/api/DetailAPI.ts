import API from './ApiAccess';
import { Detail } from '../details/DetailsTypes';
import { orderByDate } from '../utils/Utils';

export default class DetailsAPI extends API {
  static async getDetails(accountId: number): Promise<Detail[]> {
    const response = await this.get(`/movement?accountId=^${accountId}$`);
    return orderByDate(response as Detail[]);
  }
}
