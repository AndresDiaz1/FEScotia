import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import AccountAPI from '../api/AccountAPI';
import State from '../StoreType';
import { AccountState, initialState, Account } from './AccountTypes';

const STORE_NAME = '@@Accounts';

export const fetchAccounts = createAsyncThunk(
  `${STORE_NAME}/getAccounts`,
  async (clientId: number): Promise<Account[]> => {
    const accounts = await AccountAPI.getAccounts(clientId);
    return accounts;
  }
);

export const accountsSlice = createSlice({
  name: STORE_NAME,
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAccounts.fulfilled.type]: (state, action) => {
      state.accounts = action.payload;
      state.isLoading = false;
    },
    [fetchAccounts.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchAccounts.rejected.type]: (state) => {
      state.accounts = initialState.accounts;
      state.isLoading = false;
      state.errorMessage = 'There was an error fetching your accounts try again';
    },
  },
});

export const accountsSelector = (state: State): AccountState => state.accounts;
export const accoungtsReducer = accountsSlice.reducer;
