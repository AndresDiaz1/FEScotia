import { saveUserOnDB } from './LoginData';
import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;

const user = {
  id: 1,
  name: 'Pepe',
  CC: '12345',
};
const setSpy = jest.spyOn(Storage, 'set');

describe('LoginData', () => {
  describe('saveUserOnDB', () => {
    it('Should call Storage set', async () => {
      await saveUserOnDB(user);
      expect(setSpy).toHaveBeenCalledWith({ key: 'user', value: JSON.stringify(user) });
    });
  });
});
