import { pipe } from 'fp-ts/lib/function';
import { BASE_URL } from '../AppConstants';
import { User } from '../login/LoginTypes';
import { Account } from '../accounts/AccountTypes';
import { Detail } from '../details/DetailsTypes';

export default class API {
  private static processJSON = async (jsonResponse: Promise<Response>): Promise<User[]> => {
    return jsonResponse.then((apiResponse: Response) => {
      if ([200, 201, 204].includes(apiResponse.status)) {
        return apiResponse.json();
      } else {
        throw new Error('API Response Error');
      }
    });
  };

  private static async executeFetch(endpoint: string): Promise<User[]> {
    const url = BASE_URL + endpoint;

    return pipe(fetch(url), this.processJSON);
  }

  static async get(endpoint: string): Promise<User[] | Account[] | Detail[]> {
    return this.executeFetch(endpoint);
  }
}
