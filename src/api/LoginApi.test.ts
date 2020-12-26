import { BASE_URL } from '../AppConstants';
import LoginApi from './LoginApi';

const clients = [
  { id: '1', CC: 17205, name: 'Francis', lastname: 'Kohler' },
  { id: '2', CC: 137, name: 'Danyka', lastname: 'Hane' },
];
const client = { id: '1', CC: 17205, name: 'Francis', lastname: 'Kohler' };
describe('LoginApi access helper class', () => {
  describe('getClients method', () => {
    it('should make getClients call correctly', async () => {
      const expectedResponse = new Response(JSON.stringify(clients));
      const spyFetch = jest.spyOn(global, 'fetch').mockReturnValue(Promise.resolve(expectedResponse));
      const response = await LoginApi.getClients();
      expect(spyFetch).toHaveBeenCalledWith(BASE_URL + '/clients');
      expect(response).toStrictEqual(clients);
    });
    it('should make getClient call correctly', async () => {
      const expectedResponse = new Response(JSON.stringify(client));
      const spyFetch = jest.spyOn(global, 'fetch').mockReturnValue(Promise.resolve(expectedResponse));
      const clientName = client.name;
      const clientCC = client.CC.toString();
      const response = await LoginApi.getClient(clientName, clientCC);
      expect(spyFetch).toHaveBeenCalledWith(`${BASE_URL}/clients?name=${clientName}&&CC=${clientCC}`);
      expect(response).toStrictEqual(client);
    });
  });
});
