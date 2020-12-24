import { pipe } from 'fp-ts/lib/function';
import { User } from '../login/LoginTypes';

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
    const BASE_URL = 'https://5fe296aa7a94870017682620.mockapi.io/api/v1/';
    const url = BASE_URL + endpoint;

    return pipe(fetch(url), this.processJSON);
  }

  static async get(endpoint: string): Promise<User[]> {
    return this.executeFetch(endpoint);
  }
}
