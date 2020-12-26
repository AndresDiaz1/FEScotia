import { BASE_URL } from '../AppConstants';
import APIAccess from './ApiAccess';

const exampleResponse = [
  { id: '1', CC: 17205, name: 'Francis', lastname: 'Kohler' },
  { id: '2', CC: 137, name: 'Danyka', lastname: 'Hane' },
];

describe('API access helper class', () => {
  describe('get method', () => {
    it('should make a call correctly', async () => {
      const fakeURL = '/url';
      const expectedResponse = new Response(JSON.stringify(exampleResponse));
      const spyFetch = jest.spyOn(global, 'fetch').mockReturnValue(Promise.resolve(expectedResponse));
      const response = await APIAccess.get(fakeURL);
      expect(spyFetch).toHaveBeenCalledTimes(1);
      expect(spyFetch).toHaveBeenCalledWith(BASE_URL + fakeURL);
      expect(response).toStrictEqual(exampleResponse);
    });
  });
});
