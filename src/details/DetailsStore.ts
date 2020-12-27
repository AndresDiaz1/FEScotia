import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import DetailsAPI from '../api/DetailAPI';
import State from '../StoreType';
import { Detail, DetailState, initialState } from './DetailsTypes';

const STORE_NAME = '@@Details';

export const fetchDetails = createAsyncThunk(
  `${STORE_NAME}/fetchDetails`,
  async (accountId: number): Promise<Detail[] | null> => {
    const details = await DetailsAPI.getDetails(accountId);
    return details;
  }
);

export const detailsSlice = createSlice({
  name: STORE_NAME,
  initialState,
  reducers: {
      clearDetails(state) {
        state.details = initialState.details;
        state.isLoading = false;
        state.errorMessage = '';
      }
  },
  extraReducers: {
    [fetchDetails.fulfilled.type]: (state, action) => {
      state.details = action.payload;
      state.isLoading = false;
    },
    [fetchDetails.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchDetails.rejected.type]: (state) => {
      state.details = initialState.details;
      state.isLoading = false;
      state.errorMessage = 'There was an error fetching this account details';
    },
  },
});

export const { clearDetails } = detailsSlice.actions;
export const detailsSelector = (state: State): DetailState => state.details;
export const detailsReducer = detailsSlice.reducer;
