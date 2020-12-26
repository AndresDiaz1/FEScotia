import { formatCurrency, orderAccounts } from './Utils';

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

describe('Utils functions', () => {
  describe('orderAccounts functions', () => {
    it('should order by savings, then checking, then credit cards, and lastly bigger to less amount', () => {
      const orderedAccounts = orderAccounts(accounts);
      expect(orderedAccounts.length).toEqual(accounts.length);
      expect(orderedAccounts[0]).toEqual(accounts[2]);
    });
  });
  describe('formatCurrency functions', () => {
    it('should format to COP currency', () => {
      expect(formatCurrency(2366000).substring(4)).toBe('2,366,000.00');
    });
  });
});
