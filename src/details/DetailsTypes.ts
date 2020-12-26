export interface Detail {
  id: number;
  accountId: number;
  transactionDate: string;
  transactionAmount: string;
  description: string;
}

export interface DetailState {
  isLoading: boolean;
  details: Account[];
  errorMessage: string;
}

export const initialState: DetailState = {
  isLoading: false,
  details: [],
  errorMessage: '',
};
