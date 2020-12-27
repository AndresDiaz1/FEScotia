import { pipe } from 'fp-ts/lib/function';
import { AccountTypes } from '../AppConstants';
import { Account } from '../accounts/AccountTypes';
import { Detail } from '../details/DetailsTypes';

export const filterAccountByType = (accounts: Account[], type: string): Account[] => {
  return accounts.filter((account) => account.accountType === type);
};

export const sortByAvailableValue = (accounts: Account[]): Account[] => {
  return accounts.sort((a: Account, b: Account) => (a.availableValue < b.availableValue ? 1 : -1));
};

export const orderAccounts = (accounts: Account[]): Account[] => {
  const savingsAccounts = pipe(accounts, (acc) => filterAccountByType(acc, AccountTypes.saving), sortByAvailableValue);

  const checkingAccounts = pipe(
    accounts,
    (acc) => filterAccountByType(acc, AccountTypes.checking),
    sortByAvailableValue
  );

  const creditCardsAccounts = pipe(
    accounts,
    (acc) => filterAccountByType(acc, AccountTypes.creditcard),
    sortByAvailableValue
  );
  return [...savingsAccounts, ...checkingAccounts, ...creditCardsAccounts];
};

export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
  }).format(value);
};

export const orderByDate = (details: Detail[]):Detail[] => {
  return details.sort((a: Detail, b: Detail) => (a.transactionDate < b.transactionDate ? 1 : -1));
}