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
    const client = await LoginAPI.getClient(name, CC);
    return client.length ? client[0] : Promise.reject(null);
  }
);

export const loginSlice = createSlice({
  name: STORE_NAME,
  initialState,
  reducers: {
    setLocallySavedUser(state, action: PayloadAction<User>) {
      state.user = action.payload;
    },
    logout(state){
      state.user = initialState.user;
      state.isLogged = false;
      state.logginIn = false;
      state.errorMessage = '';
    }
  },
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

export const { setLocallySavedUser, logout } = loginSlice.actions;
export const loginSelector = (state: State): typeof initialState => state.login;
export const loginReducer = loginSlice.reducer;
