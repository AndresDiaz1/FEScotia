import { BASE_URL } from '../AppConstants';
import { Detail } from '../details/DetailsTypes';
import { orderByDate } from '../utils/Utils';
import DetailsAPI from './DetailAPI';

const details: Detail[] = [
  {
    id: 1,
    accountId: 1,
    transactionDate: '2020-12-20T04:44:15.582Z',
    transactionAmount: '84.22',
    description: 'Bhutan Planner copying',
  },
  {
    id: 2,
    accountId: 1,
    transactionDate: '2020-12-26T16:52:12.129Z',
    transactionAmount: '377.30',
    description: 'scalable',
  },
  {
    id: 3,
    accountId: 1,
    transactionDate: '2020-12-28T08:14:47.864Z',
    transactionAmount: '641.09',
    description: 'Coordinator e-tailers Cheese',
  },
];

describe('DetailsAPI access helper class', () => {
  describe('getDetails method', () => {
    it('should make getDetails call correctly', async () => {
      const expectedResponse = new Response(JSON.stringify(details));
      const spyFetch = jest.spyOn(global, 'fetch').mockReturnValue(Promise.resolve(expectedResponse));
      const response = await DetailsAPI.getDetails(1);
      expect(spyFetch).toHaveBeenCalledWith(BASE_URL + '/movement?accountId=^1$');
      expect(response).toStrictEqual(orderByDate(details));
    });
  });
});
