import { User } from '../login/LoginTypes';
import { setDBItem } from './mainDB';

export const saveUserOnDB = async (user: User) => {
  await setDBItem('user', JSON.stringify(user));
};
