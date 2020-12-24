export interface User {
  id: number;
  name: string;
  CC: string;
}

export const initialState = {
  isLogged: false,
  logginIn: false,
  user: {} as User,
  errorMessage: '',
};

export type LoginState = typeof initialState;
