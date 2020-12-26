export interface Account {
  clientId: number;
  id: string;
  accountType: string;
  status: number;
  availableValue: number;
}

export interface AccountState {
  isLoading: boolean;
  accounts: Account[];
  errorMessage: string;
}

export const initialState: AccountState = {
  isLoading: false,
  accounts: [],
  errorMessage: '',
};
