export interface User {
    userId: number;
    name: string;
    CC: number;
  }

export const initialState = {
    isLogged: false,
    logginIn: false,
    user: {} as User,
    errorMessage: ''
  };

  export type LoginState = typeof initialState;
