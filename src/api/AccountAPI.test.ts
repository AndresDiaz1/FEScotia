import { BASE_URL } from '../AppConstants';
import { orderAccounts } from '../utils/Utils';
import AccountAPI from './AccountAPI';

const accounts = [
  {
    id: '1',
    clientId: 1,
    accountType: 'savings',
    status: 60,
    availableValue: 33,
  },
  {
    id: '2',
    clientId: 1,
    accountType: 'checking',
    status: 65,
    availableValue: 45,
  },
  {
    id: '3',
    clientId: 1,
    accountType: 'credit card',
    status: 17,
    availableValue: 23,
  },
];

describe('AccountApi access helper class', () => {
  describe('getAccounts method', () => {
    it('should make getAccounts call correctly', async () => {
      const expectedResponse = new Response(JSON.stringify(accounts));
      const spyFetch = jest.spyOn(global, 'fetch').mockReturnValue(Promise.resolve(expectedResponse));
      const response = await AccountAPI.getAccounts(1);
      expect(spyFetch).toHaveBeenCalledWith(BASE_URL + '/account?clientId=^1$');
      expect(response).toStrictEqual(orderAccounts(accounts));
    });
  });
});
