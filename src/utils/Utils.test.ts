import { Detail } from '../details/DetailsTypes';
import { formatCurrency, orderAccounts, orderByDate } from './Utils';

const accounts = [
  {
    id: '5',
    clientId: 1,
    accountType: 'savings',
    status: 35,
    availableValue: 71,
  },
  {
    id: '1',
    clientId: 1,
    accountType: 'savings',
    status: 60,
    availableValue: 33,
  },
  {
    id: '4',
    clientId: 1,
    accountType: 'savings',
    status: 79,
    availableValue: 104,
  },
  {
    id: '6',
    clientId: 1,
    accountType: 'checking',
    status: 50,
    availableValue: 95,
  },
  {
    id: '2',
    clientId: 1,
    accountType: 'checking',
    status: 65,
    availableValue: 45,
  },
  {
    id: '3',
    clientId: 1,
    accountType: 'credit card',
    status: 17,
    availableValue: 23,
  },
];

const details: Detail[] = [
  {
    id: 1,
    accountId: 1,
    transactionDate: '2020-12-20T04:44:15.582Z',
    transactionAmount: '84.22',
    description: 'Bhutan Planner copying',
  },
  {
    id: 2,
    accountId: 1,
    transactionDate: '2020-12-28T16:52:12.129Z',
    transactionAmount: '377.30',
    description: 'scalable',
  },
  {
    id: 3,
    accountId: 1,
    transactionDate: '2020-12-26T08:14:47.864Z',
    transactionAmount: '641.09',
    description: 'Coordinator e-tailers Cheese',
  },
];

describe('Utils functions', () => {
  describe('orderAccounts functions', () => {
    it('should order by savings, then checking, then credit cards, and lastly bigger to less amount', () => {
      const orderedAccounts = orderAccounts(accounts);
      expect(orderedAccounts.length).toEqual(accounts.length);
      expect(orderedAccounts[0]).toEqual(accounts[2]);
    });
  });
  describe('formatCurrency function', () => {
    it('should format to COP currency', () => {
      expect(formatCurrency(2366000).substring(4)).toBe('2,366,000.00');
    });
  });
  describe('orderByDate function', () => {
    it('should sort by date', () => {
      const orderedDetails = orderByDate(details);
      expect(orderedDetails.length).toEqual(details.length);
      expect(details[1]).toEqual(orderedDetails[1]);
    });
  });
});
