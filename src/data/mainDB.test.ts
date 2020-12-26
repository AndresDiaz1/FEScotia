import { clearDB, getDBItem, getParsedDBItem, setDBItem } from './mainDB';
import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;

const user = {
  id: 1,
  name: 'Pepe',
  CC: '12345',
};

const setSpy = jest.spyOn(Storage, 'set');
const clearSpy = jest.spyOn(Storage, 'clear');

jest.spyOn(Storage, 'get').mockReturnValue(Promise.resolve({ value: JSON.stringify(user) }));

describe('mainDB helper functions', () => {
  describe('setDBItem helper function', () => {
    it('Should call Storage set', async () => {
      await setDBItem('user', JSON.stringify(user));
      expect(setSpy).toHaveBeenCalledWith({ key: 'user', value: JSON.stringify(user) });
    });
  });

  describe('getDBItem helper function', () => {
    it('Should call Storage get', async () => {
      const result = await getDBItem('user');
      expect(result).toEqual(JSON.stringify(user));
    });
  });

  describe('getParsedDBItem helper function', () => {
    it('Should return the parsed item from DB', async () => {
      const resultParsed = await getParsedDBItem('user');
      expect(resultParsed).toEqual(user);
    });
  });

  describe('clearDB helper function', () => {
    it('Should call Storage clear', async () => {
      await clearDB();
      expect(clearSpy).toHaveBeenCalledTimes(1);
    });
  });
});
