import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;

export const setDBItem = async (key: string, val: string): Promise<void> => {
  await Storage.set({
    key: key,
    value: val,
  });
};

export const getDBItem = async (key: string): Promise<string | null> => {
  const { value } = await Storage.get({ key: key });
  return value;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getParsedDBItem = async (key: string): Promise<any> => {
  const { value } = await Storage.get({ key: key });
  return value ? JSON.parse(value) : null;
};

export const removeDBItem = async (key: string): Promise<void> => {
  await Storage.remove({ key: key });
};

export const getDBKeys = async (): Promise<Array<string>> => {
  const { keys } = await Storage.keys();
  return keys;
};

export const clearDB = async (): Promise<void> => {
  await Storage.clear();
};
