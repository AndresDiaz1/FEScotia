import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import LoginAPI from '../api/LoginApi';
import State from '../StoreType';
import { initialState, User } from './LoginTypes';
const STORE_NAME = '@@Login';

interface ClientCredentials {
  name: string;
  CC: string;
}

export const signIn = createAsyncThunk(
  `${STORE_NAME}/signIn`,
  async ({ name, CC }: ClientCredentials): Promise<User | null> => {
    const clients = await LoginAPI.getClients();
    const user = clients.filter((client) => `${client.CC.toString()}` === CC && client.name === name);
    if (user.length) {
      return user[0];
    } else {
      return Promise.reject(null);
    }
  }
);

export const loginSlice = createSlice({
  name: STORE_NAME,
  initialState,
  reducers: {},
  extraReducers: {
    [signIn.fulfilled.type]: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.isLogged = true;
      state.logginIn = false;
    },
    [signIn.pending.type]: (state) => {
      state.logginIn = true;
    },
    [signIn.rejected.type]: (state) => {
      state.user = initialState.user;
      state.logginIn = false;
      state.isLogged = false;
      state.errorMessage = 'There was an error try again';
    },
  },
});

export const loginSelector = (state: State): typeof initialState => state.login;
export const loginReducer = loginSlice.reducer;
